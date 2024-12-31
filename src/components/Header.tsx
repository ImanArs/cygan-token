import useLanguage from "../hooks";
import { translates } from "../translates";

export const Header = () => {
  const { language } = useLanguage();
  const translated = translates[language];

  return (
    <header
      className={`${
        language === "ru" ? "nozhik" : "ultra"
      } absolute z-[1] max-w-[1620px] w-full mx-auto left-[50%] translate-x-[-50%] px-[10px] sm:px-[40px] md:px-[62px]`}
    >
      <nav
        className={`flex ${
          language === "ru"
            ? "text-[22px] sm:text-[36px] md:text-[40px] xl:text-[54px]"
            : "text-[16px] sm:text-[30px] md:text-[30px] xl:text-[54px]"
        } sm:flex-row justify-between items-center font-[400] gap-[20px] sm:gap-[30px]  xl:gap-[140px]`}
      >
        <div className="text-[16px] sm:text-[24px] md:text-[32px] lg:text-[44px] lodrina">
          $CCC
        </div>
        <ul className="flex items-center sm:flex-row gap-[5px]  md:gap-[42px]">
          <li>{translated.first.nav[1]}</li>
          <li>{translated.first.nav[2]}</li>
          <li>{translated.first.nav[3]}</li>
        </ul>
        <div className="flex gap-[10px] sm:gap-[15px] md:gap-[20px]">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/TG.svg"
              alt="Telegram Icon"
              className="w-[30px] sm:w-[40px] md:w-[60px]"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/X.svg"
              alt="X Icon"
              className="w-[30px] sm:w-[40px] md:w-[60px]"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
