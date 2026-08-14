export type NavItem = { label: string; href: string; external?: boolean };
export type ChoiceOption = { value: string; label: string };
export type FaqItem = { question: string; answer: string };

const whatsappNumber =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER?.trim() || "5583999651105";

export const site = {
  name: "Shelfia",
  legalName: "Shelfia AI",
  url: import.meta.env.PUBLIC_SITE_URL?.trim() || "https://lp.shelfia.com.br",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  bookingUrl:
    "https://outlook.office.com/book/ComercialIMWTI@imwti.com.br/?ismsaljsauthenabled",
  nav: [
    { label: "O que você enxerga", href: "#visibilidade" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Para sua rede", href: "#segmentos" },
    { label: "Dúvidas", href: "#duvidas" },
  ] satisfies NavItem[],
  legacyLinks: [
    {
      label: "Login",
      href: "https://www.shelfia.com.br/login",
      external: true,
    },
    {
      label: "Agendar demonstração",
      href: "https://outlook.office.com/book/ComercialIMWTI@imwti.com.br/?ismsaljsauthenabled",
      external: true,
    },
    { label: "Site atual", href: "https://www.shelfia.com.br", external: true },
  ] satisfies NavItem[],
};

export const visibilityItems = [
  {
    title: "Rupturas na gôndola",
    description:
      "Identifique situações em que o sistema aponta disponibilidade, mas a execução na loja pede atenção.",
  },
  {
    title: "Execução por loja",
    description:
      "Acompanhe a condição da gôndola em diferentes unidades sem depender apenas de relatos isolados.",
  },
  {
    title: "Prioridades da operação",
    description:
      "Organize o que precisa ser verificado para que a equipe de loja consiga agir com mais clareza.",
  },
  {
    title: "Padrão de exposição",
    description:
      "Tenha uma leitura visual da área acompanhada e compare a execução com o padrão definido pela rede.",
  },
  {
    title: "Histórico para análise",
    description:
      "Use os registros para entender recorrências e orientar conversas de operação e abastecimento.",
  },
  {
    title: "Visão da rede",
    description:
      "Dê à gestão uma forma mais direta de acompanhar o que está acontecendo nas gôndolas das lojas.",
  },
];

export const processItems = [
  {
    number: "01",
    title: "A gôndola é registrada",
    description:
      "A equipe usa uma foto da área acompanhada para iniciar a leitura da execução em loja.",
  },
  {
    number: "02",
    title: "A imagem é analisada",
    description:
      "A Shelfia interpreta os elementos visuais definidos para aquele acompanhamento.",
  },
  {
    number: "03",
    title: "A situação é organizada",
    description:
      "Os achados são apresentados para que a operação visualize o que merece atenção.",
  },
  {
    number: "04",
    title: "A gestão define prioridade",
    description:
      "Responsáveis conseguem direcionar a análise por loja, área ou necessidade operacional.",
  },
  {
    number: "05",
    title: "A equipe é acionada",
    description:
      "A informação chega ao processo de execução e reposição já com o contexto necessário.",
  },
  {
    number: "06",
    title: "A rede acompanha a evolução",
    description:
      "Os registros ajudam a manter a operação conectada à condição real da gôndola.",
  },
];

export const comparisonItems = [
  {
    before: "O ERP informa que existe saldo disponível na loja.",
    after:
      "A Shelfia ajuda a verificar se o produto está disponível na frente do consumidor.",
  },
  {
    before:
      "O estoque está organizado no sistema, mas a execução depende de conferência.",
    after:
      "Uma leitura visual traz contexto para a rotina de loja e de reposição.",
  },
  {
    before:
      "A gestão recebe relatos e fotos dispersas entre diferentes unidades.",
    after: "Os registros ficam organizados para apoiar a análise da rede.",
  },
  {
    before: "Cada equipe pode identificar prioridades de uma forma diferente.",
    after:
      "A operação trabalha a partir de uma referência visual compartilhada.",
  },
  {
    before:
      "A ruptura só aparece quando já se tornou uma reclamação ou perda de venda.",
    after:
      "A gôndola passa a fazer parte da conversa de acompanhamento da operação.",
  },
];

export const networkProfiles = [
  {
    title: "Redes regionais",
    description:
      "Para quem quer manter proximidade com a execução mesmo quando as unidades se multiplicam.",
  },
  {
    title: "Supermercados de bairro",
    description:
      "Para operações que valorizam disponibilidade, padrão e agilidade na rotina de loja.",
  },
  {
    title: "Atacarejos e varejo alimentar",
    description:
      "Para gestores que precisam acompanhar áreas de alto giro e orientar a execução com consistência.",
  },
  {
    title: "Redes em expansão",
    description:
      "Para manter a cultura de operação próxima da gôndola enquanto novas lojas entram na rede.",
  },
];

export const teamBenefits = [
  {
    title: "Proprietários e diretoria",
    description:
      "Acompanhem a realidade da gôndola sem precisar estar fisicamente em cada loja.",
  },
  {
    title: "Operações",
    description:
      "Transformem fotos e conferências em uma rotina mais organizada de priorização.",
  },
  {
    title: "Gerentes de loja",
    description:
      "Tenham mais contexto para verificar áreas que pedem atenção no dia a dia.",
  },
  {
    title: "Reposição",
    description:
      "Recebam uma referência mais clara sobre o que precisa ser conferido na execução.",
  },
  {
    title: "Compras e abastecimento",
    description:
      "Conversem com a operação a partir da condição observada na loja, além do saldo sistêmico.",
  },
  {
    title: "Tecnologia",
    description:
      "Avaliem uma camada de visão voltada à execução física, sem substituir os sistemas atuais.",
  },
];

export const objections = [
  {
    title: "“Já temos ERP.”",
    description:
      "O ERP é essencial para controlar a operação. A Shelfia complementa essa visão ao levar a condição da gôndola para a conversa de gestão.",
  },
  {
    title: "“Nossos gerentes já mandam fotos.”",
    description:
      "Fotos soltas ajudam pontualmente, mas são difíceis de comparar e priorizar. A proposta é estruturar esse acompanhamento.",
  },
  {
    title: "“A loja é muito dinâmica.”",
    description:
      "Justamente por isso a execução precisa de uma referência simples: registrar, analisar, orientar e acompanhar.",
  },
  {
    title: "“Não quero mais um sistema complexo.”",
    description:
      "O diagnóstico serve para entender a realidade da rede e definir se o fluxo faz sentido antes de qualquer implantação.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "O que é a Shelfia?",
    answer:
      "A Shelfia é uma solução voltada ao varejo alimentar que ajuda a gestão a acompanhar a condição das gôndolas a partir de registros visuais organizados.",
  },
  {
    question: "A Shelfia substitui o ERP da rede?",
    answer:
      "Não. Ela foi pensada como uma camada complementar de visibilidade sobre a execução física na loja.",
  },
  {
    question: "Como a análise começa?",
    answer:
      "O fluxo parte de uma foto da área acompanhada. A aplicação da Shelfia analisa o registro conforme o escopo definido para a operação.",
  },
  {
    question: "Para quais tipos de rede a solução faz sentido?",
    answer:
      "Principalmente para redes regionais de supermercados e varejo alimentar que precisam manter o padrão de execução entre unidades.",
  },
  {
    question: "É preciso trocar os sistemas atuais?",
    answer:
      "Não. A conversa inicial avalia como a Shelfia pode complementar processos e sistemas que a rede já utiliza.",
  },
  {
    question: "A Shelfia identifica toda situação de ruptura sozinha?",
    answer:
      "A solução apoia a identificação de situações que precisam de conferência. A definição do processo e da ação continua sendo da operação da rede.",
  },
  {
    question: "Posso usar em todas as lojas?",
    answer:
      "O desenho de uso depende da operação, das áreas priorizadas e dos objetivos da rede. Isso é alinhado no diagnóstico.",
  },
  {
    question: "Como solicito uma demonstração?",
    answer:
      "Preencha o diagnóstico. Ao finalizar, você confirma o envio da mensagem pelo WhatsApp e a equipe entra em contato para entender sua rede.",
  },
];

export const storeCountOptions: ChoiceOption[] = [
  { value: "1-6", label: "De 1 a 6 lojas" },
  { value: "7-15", label: "De 7 a 15 lojas" },
  { value: "16-30", label: "De 16 a 30 lojas" },
  { value: "31-50", label: "De 31 a 50 lojas" },
  { value: "51+", label: "Mais de 50 lojas" },
];

export const currentProcessOptions: ChoiceOption[] = [
  { value: "erp", label: "Acompanhamos principalmente pelo ERP" },
  { value: "photos", label: "Gerentes enviam fotos e relatos" },
  { value: "visits", label: "Conferimos em visitas e auditorias" },
  { value: "spreadsheets", label: "Usamos planilhas e controles próprios" },
  { value: "other", label: "Outro processo" },
];

export const challengeOptions: ChoiceOption[] = [
  { value: "rupture", label: "Identificar rupturas na gôndola" },
  { value: "execution", label: "Manter padrão de execução entre lojas" },
  { value: "priorities", label: "Definir o que a equipe deve priorizar" },
  { value: "visibility", label: "Ter visibilidade sem estar em cada unidade" },
  { value: "reports", label: "Organizar fotos, relatos e conferências" },
  { value: "other", label: "Outro desafio" },
];
