import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distRoot = existsSync(join(projectRoot, "dist", "client"))
  ? join(projectRoot, "dist", "client")
  : join(projectRoot, "dist");
const sourceRoots = [join(projectRoot, "src"), join(projectRoot, "public")];

const fail = (message) => {
  throw new Error(message);
};

const walk = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const htmlPath = join(distRoot, "index.html");
if (!existsSync(htmlPath))
  fail("dist/index.html is missing; run the build first.");

const html = readFileSync(htmlPath, "utf8");
const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
if (h1Count !== 1) fail(`Expected one H1; found ${h1Count}.`);
if (/localhost|127\.0\.0\.1/i.test(html))
  fail("Local URL found in index.html.");
if (
  !/<link rel="canonical" href="https:\/\/lp\.shelfia\.com\.br\/?"/.test(html)
)
  fail("Canonical URL is missing or invalid.");
if (!/og:image:width" content="1200"/.test(html))
  fail("OG image width is missing.");
if (!/og:image:height" content="630"/.test(html))
  fail("OG image height is missing.");

for (const type of [
  "Organization",
  "WebSite",
  "WebPage",
  "SoftwareApplication",
  "FAQPage",
]) {
  if (!html.includes(`"@type":"${type}"`))
    fail(`JSON-LD type missing: ${type}.`);
}

const gtmId = "GTM-58FFD9HS";
const gtmIds = [...html.matchAll(/GTM-[A-Z0-9]+/g)].map((match) => match[0]);
if (gtmIds.length !== 2 || gtmIds.some((id) => id !== gtmId))
  fail(`Expected exactly the head and noscript entries for ${gtmId}.`);
if (
  !/<head>\s*<!-- Google Tag Manager -->\s*<script>[\s\S]*?GTM-58FFD9HS[\s\S]*?<\/script>/.test(
    html,
  )
)
  fail("Google Tag Manager script is missing from the top of <head>.");
if (
  !/<body>\s*<!-- Google Tag Manager \(noscript\) -->\s*<noscript>\s*<iframe[^>]+ns\.html\?id=GTM-58FFD9HS/.test(
    html,
  )
)
  fail("Google Tag Manager noscript is missing immediately after <body>.");
if (/gtag\(/i.test(html))
  fail("Unexpected direct Google Analytics snippet found in index.html.");

const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];
for (const tag of imageTags) {
  if (!/\bwidth="\d+"/.test(tag) || !/\bheight="\d+"/.test(tag))
    fail(`Image without explicit dimensions: ${tag}`);
  if (!/\balt(?:=|\s|>)/.test(tag)) fail(`Image without alt text: ${tag}`);
}

const ids = new Set(
  [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
);
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(match[1])) fail(`Internal anchor has no target: #${match[1]}.`);
}

for (const filename of ["robots.txt", "sitemap.xml", "llms.txt"]) {
  if (!existsSync(join(distRoot, filename))) fail(`Missing dist/${filename}.`);
}

const distFiles = walk(distRoot);
for (const file of distFiles) {
  if (/localhost|127\.0\.0\.1/i.test(readFileSync(file, "utf8")))
    fail(`Local URL found in ${file}.`);
}

const videoExtensions = new Set([".mp4", ".webm", ".mov", ".avi"]);
for (const root of sourceRoots) {
  for (const file of walk(root)) {
    if (videoExtensions.has(extname(file).toLowerCase()))
      fail(`Unoptimized video found: ${file}.`);
    if (/\.(astro|html|md|mdx|ts|js)$/.test(file)) {
      const source = readFileSync(file, "utf8");
      if (/<video|youtube|vimeo|\.mp4|\.webm/i.test(source))
        fail(`Video markup requires an optimization review: ${file}.`);
    }
  }
}

const generatedPng = distFiles.filter(
  (file) =>
    file.startsWith(join(distRoot, "_astro")) && extname(file) === ".png",
);
if (generatedPng.length)
  fail(`Generated responsive PNG remains: ${generatedPng.join(", ")}.`);

const distBytes = distFiles.reduce(
  (total, file) => total + statSync(file).size,
  0,
);
console.log(
  `Production audit passed: H1=${h1Count}, images=${imageTags.length}, JSON-LD=5, GTM=${gtmId}, videos=0, dist=${Math.round(distBytes / 1024)}KB.`,
);
