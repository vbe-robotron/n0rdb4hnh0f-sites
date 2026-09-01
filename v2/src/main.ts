function alertloop() {
  for ( ; ; ) {
window.alert("　∧_∧　ババババ\n（ ・ω・)=つ≡つ\n（っ ≡つ=つ\n`/　　)\n(ノΠＵ\n何回閉じても無駄ですよ～ww\nm9（＾Д＾）プギャー！！\n逮捕できるもんならやってみろ、兵庫県警")
}
}

type Language = "ja" | "ryu" | "ain";
const translations: Record<Language, Record<string, string>> = {
  ja: {
    title: "Nordbahnhofのサイト", aboutHeading: "About Me", about1: "これはNordbahnhofのサイトです。", about2: "このサイトは、Nordbahnhofが個人的に運営しているサイトです。", about3: "このサイトでは、Nordbahnhofの自己紹介などを行います。", about4: "プログラミングが好きです。", about5: "主にGolangを使用して開発を行っています。", homeHeading: "Home", home1: "このサイトは Vite + Tailwind CSS + TypeScript で構築し、GitHub Pages でホスティングしています。", home2: "初代サイト・現ブログ(", home2End: ")はHugo製です。", here: "こちら", skillsHeading: "Skills", skillsText: "以下のスキルを持っています。", contactHeading: "Contact", contactText: "お問い合わせは以下の方法でお願いいたします。", linksHeading: "Links", linksText: "相互リンク募集中です。当サイトはリンクフリーです。", copyright: "Copyright © 2024 Nordb4hnh0f",
  },
  ryu: {
    title: "Nordbahnhof ヌ サイト", aboutHeading: "わんねー誰がねー", about1: "うりや Nordbahnhof ヌ サイト やいびーん。", about2: "くぬサイトや Nordbahnhof が個人的に運営 そーん。", about3: "くぬサイトしぇー Nordbahnhof ヌ 紹介 そーん。", about4: "プログラミングが好き やいびーん。", about5: "主に Golang 使てー 開発 そーん。", homeHeading: "ホーム", home1: "くぬサイトや Vite + Tailwind CSS + TypeScript し作って、GitHub Pages し公開 そーん。", home2: "初代サイト・今ぬブログ(", home2End: ")や Hugo 製 やいびーん。", here: "うり", skillsHeading: "スキル", skillsText: "ちゃーんなスキル が ありびーん。", contactHeading: "連絡", contactText: "問い合わせや ちゃーんな方法 うにげーさびら。", linksHeading: "リンク", linksText: "相互リンク募集中 やいびーん。くぬサイトや リンクフリー やいびーん。", copyright: "Copyright © 2024 Nordb4hnh0f",
  },
  ain: {
    title: "Nordbahnhof pirka itak", aboutHeading: "Ku=ani", about1: "Ta an Nordbahnhof oruspe kotan ne.", about2: "Ta an site Nordbahnhof oruspe a=kar wa a=oman.", about3: "Ta an site oruspe Nordbahnhof a=itak a=nu.", about4: "Programming ku=eramiskari ka somo ki.", about5: "Golang ku=kar wa ku=eramiskari.", homeHeading: "Cise", home1: "Ta an site Vite, Tailwind CSS, TypeScript ne a=kar wa GitHub Pages oruspe a=nu.", home2: "Pirka site ani blog(", home2End: ") Hugo ne a=kar.", here: "ta", skillsHeading: "Eramsik", skillsText: "Tane ku=eramsik an.", contactHeading: "Ukor", contactText: "Ita ku=ukor ruwe an.", linksHeading: "Link", linksText: "Link a=kor wa a=ukor.", copyright: "Copyright © 2024 Nordb4hnh0f",
  },
};

const languageButtons = document.querySelectorAll<HTMLButtonElement>("[data-language]");
const greetings: Record<Language, string> = { ja: "こんにちは！", ryu: "ハイサイ！", ain: "Irankarapte!" };
const languageStatements: Record<Language, string> = { ja: "言語帝国主義に反対します。", ryu: "言語帝国主義に反対します。", ain: "Giremu itak a=eyayramokte." };
function setLanguage(language: Language) {
  document.documentElement.lang = language;
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && translations[language][key]) element.textContent = translations[language][key];
  });
  document.querySelector<HTMLElement>("[data-i18n=\"greeting\"]")!.textContent = greetings[language];
  document.querySelector<HTMLElement>("[data-i18n=\"languageStatement\"]")!.textContent = languageStatements[language];
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
}
languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language as Language)));
const languageMenuToggle = document.querySelector<HTMLButtonElement>(".language-menu-toggle");
const languageMenu = document.querySelector<HTMLElement>(".language-menu");
languageMenuToggle?.addEventListener("click", () => {
  const expanded = languageMenuToggle.getAttribute("aria-expanded") === "true";
  languageMenuToggle.setAttribute("aria-expanded", String(!expanded));
  languageMenu?.classList.toggle("is-open", !expanded);
});

// main.ts の末尾などに追加
const btn = document.getElementById("alert-btn");
if (btn) {
  btn.addEventListener("click", alertloop);
}
