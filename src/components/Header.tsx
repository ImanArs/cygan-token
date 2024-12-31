import useLanguage from "../hooks";
import { translates } from "../translates";

export const Header = () => {
  const { language } = useLanguage();
  const translated = translates[language];

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`${
        language === "ru" ? "nozhik" : "ultra"
      } absolute h-[120px] z-[1] max-w-[1620px] w-full mx-auto left-[50%] translate-x-[-50%] px-[10px] sm:px-[40px] md:px-[62px]`}
    >
      <nav
        className={`flex ${
          language === "ru"
            ? "text-[24px] sm:text-[42px] md:text-[50px] xl:text-[96px]"
            : "text-[16px] sm:text-[30px] md:text-[30px] xl:text-[54px]"
        } sm:flex-row mx-auto justify-center md:justify-between items-center font-[400] gap-[20px] sm:gap-[30px]  xl:gap-[140px]`}
      >
        <div className="text-[32px] md:text-[44px] lg:text-[81px] lodrina">
          $CCC
        </div>
        <ul className="flex items-center sm:flex-row gap-[18px] md:gap-[42px] xl:gap-[130px]">
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="cursor-pointer"
            >
              {translated.first.nav[1]}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#roadmap")}
              className="cursor-pointer"
            >
              {translated.first.nav[2]}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#faq")}
              className="cursor-pointer"
            >
              {translated.first.nav[3]}
            </button>
          </li>
        </ul>
        <div className="flex gap-[10px] sm:gap-[15px] md:gap-[20px]">
          <a
            href="https://t.me/token_ccc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/TG.svg"
              alt="Telegram Icon"
              className="min-w-[28px] w-[28px] sm:w-[50px] md:w-[80px]"
            />
          </a>
          <a
            href="https://x.com/ccc_token"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/X.svg"
              alt="X Icon"
              className="min-w-[28px] w-[28px] sm:w-[50px] md:w-[80px]"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
