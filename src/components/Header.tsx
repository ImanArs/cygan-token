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
      } absolute h-[120px] z-[1] max-w-[1620px] w-full mx-auto left-[50%] translate-x-[-50%] px-[10px] sm:px-[40px]`}
    >
      <nav
        className={`flex ${
          language === "ru"
            ? "text-[22px] sm:text-[40px] md:text-[48px] xl:text-[94px]"
            : "text-[12px] sm:text-[28px] md:text-[28px] xl:text-[52px]"
        } sm:flex-row flex mx-auto justify-between md:justify-between items-center font-[400] gap-[20px] sm:gap-[30px] xl:gap-[100px]`}
      >
        <div className="text-[26px] md:text-[44px] lg:text-[81px] lodrina">
          $CCC
        </div>
        <ul className="flex items-center sm:flex-row gap-[14px] md:gap-[42px] xl:gap-[80px]">
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
        <div className="flex gap-[10px] sm:gap-[10px]">
          <a
            href="https://t.me/token_ccc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/TG.svg"
              alt="Telegram Icon"
              className="min-w-[28px] w-[28px] sm:min-w-[50px] sm:w-[50px] md:min-w-[65px] md:w-[65px]"
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
              className="min-w-[28px] w-[28px] sm:min-w-[50px] sm:w-[50px] md:min-w-[65px] md:w-[65px]"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
