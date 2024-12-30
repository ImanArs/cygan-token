type NavKeys = 1 | 2 | 3 | 4;
type DescKeys = 1 | 2 | 3 | 4;

interface SectionFirst {
  nav: Record<number, string>;
  title: string;
  lngBtn: string;
}

interface SectionSecond {
  title: string;
  desc: string;
}

type SectionThird = {
  [key in NavKeys]: string;
} & {
  title: string;
};

interface SectionFourth {
  title: string;
  desc: Record<DescKeys, string>;
  btn: string;
  contract: string;
}

type SectionFive = {
  [key in NavKeys]: string;
} & {
  title: string;
};

interface Footer {
  title: string;
  1: string;
  2: string;
  buy: string;
}

interface LanguageContent {
  first: SectionFirst;
  second: SectionSecond;
  third: SectionThird;
  fourth: SectionFourth;
  five: SectionFive;
  footer: Footer;
}

export const translates: Record<"eng" | "ru", LanguageContent> = {
  eng: {
    first: {
      nav: {
        1: "ABOUT",
        2: "ROADMAP",
        3: "FAQ",
      },
      title: "CRYPTO-GYPSY COIN",
      lngBtn: "ENG",
    },
    second: {
      title: "ABOUT",
      desc: "$CCC is a project build by community that started its acquaintance with the TON ecosystem with wrong projects. The creators of the project burned through investments in Hamster Combat, Dicks, Clowns and decided to create their own token, where they united all the projects of this blockchain in one character, meet! Crypto-Gypsy token",
    },
    third: {
      title: "ROADMAP",
      1: "Lamborghini for a crypto gypsy",
      2: "Buying a Dubai",
      3: "Receiving the Most Gypsies Token 2025 reward",
      4: "Distribution of income from the project among the Tabor",
    },
    fourth: {
      title: "HOW TO BUY?",
      desc: {
        1: "SWITCH TO DEDUST OR STON.FI",
        2: "Switch to DeDust or STON.fi in Google Chrome or in the browser in the TonKeeper app. Connect your wallet. Enter a name (do not buy DUREVOLD) or insert the address of the $DUREV token and confirm. When Tonkeeper prompts you to sign, sign it.",
        3: "WHERE TO BUY A TON?",
        4: "If you want to buy a TON using a bank card, you can do so using the TonKeeper or TonSpace apps. If you want to use CEX, exchange your cryptocurrency for TON, then withdraw them to a custodial TON wallet, such as TonKeeper.",
      },
      btn: "BUY $CCC VIA STON.FI",
      contract: "CONTRACT ADDRESS:",
    },
    five: {
      title: "FAQ",
      1: "Crypto",
      2: "Fun",
      3: "Gucci",
      4: "Dubai",
    },
    footer: {
      title: "JOIN US AT SOCIALS!",
      1: "DISCLAIMER:",
      2: "$CRYPTO-GYPSY IS A MEME TOKEN MADE FOR FUN",
      buy: "BUY",
    },
  },
  ru: {
    first: {
      nav: {
        1: "О НАС",
        2: "РОАДМАП",
        3: "FAQ",
      },
      title: "Крипто-цыган токен ",
      lngBtn: "РУС",
    },
    second: {
      title: "О НАС",
      desc: "$CCC это проект построенный сообществом которое начало свое знакомство с экосистемой TON с неправильных проектов. Создатели проекта прогорели на инвестициях в Hamster Combat, Х$ях, клоунах и решили создать свой токен, где объеденили все проекты этого блокчейна в одного персонажа, встречайте! Крипто-цыган токен ",
    },
    third: {
      title: "РOAДMAП",
      1: "Lamborghini для крипто-цыгана",
      2: "Покупка Дубая",
      3: "Награда за самый цыганский токен 2025",
      4: "Распределе-ние доходов от проекта среди таборами",
    },
    fourth: {
      title: "КАК КУПИТЬ?",
      desc: {
        1: "ПЕРЕЙДИТЕ НА DEDUST ИЛИ STON.FI",
        2: "Перейдите на DeDust или STON.FI в Google Chrome или в браузере в приложении TonKeeper. Подключите кошелек. Введите имя (не покупайте DUREVOLD) или вставьте адрес токена $DUREV и подтвердите. Когда Tonkeeper предложит вам подписать, подпишите.",
        3: "ГДЕ КУПИТЬ ТОН?",
        4: "Если вы хотите купить TON с помощью банковской карты, вы можете это сделать с помощью приложений TonKeeper или TonSpace. Если вы хотите использовать CEX, обменивайте вашу криптовалюту на TON, затем выводите их на кастодиальный TON кошелек, например TonKeeper.",
      },
      btn: "КУПИТЬ $CCC ЧЕРЕЗ STON.FI",
      contract: "АДРЕС КОНТРАКТА:",
    },
    five: {
      title: "FAQ",
      1: "Крипта",
      2: "Веселье",
      3: "Гуччи",
      4: "Дубай",
    },
    footer: {
      title: "ПОДПИСЫВАЙТЕСЬ НА НАС В СОЦСЕТЯХ!",
      1: "ДИСКЛЕЙМЕР:",
      2: "$КРИПТО-ЦЫГАН ЭТО МЕМ ТОКЕН СОЗДАННЫЙ В ШУТКУ",
      buy: "КУПИТЬ",
    },
  },
};
