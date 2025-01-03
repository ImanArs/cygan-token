import useLanguage from "../hooks";
import { translates } from "../translates";

export const Footer = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  return (
    <div className="py-[45px] max-w-[1390px] w-full mx-auto px-[30px]">
      <h2
        className={`text-center text-[26px] md:text-[38px] lg:text-[67px] ${
          language === "ru" ? "nozhik" : "ultra"
        } `}
      >
        {translated.footer.title}
      </h2>
      <div className="flex justify-between gap-[10px] lg:gap-[63px] items-center mt-[74px]">
        <p className="text-[8px] md:text-[18px] lg:text-[30px] font-[700]">
          {translated.footer[1]} <br /> {translated.footer[2]}
        </p>
        <div className="flex justify-between items-center gap-[6px] md:gap-[14px] lg:gap-[28px]">
          <a
            href="https://t.me/token_ccc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/TG.svg"
              className="w-[32px] sm:w-[40px] md:w-[60px]"
              alt=""
            />
          </a>
          <a
            href="https://x.com/ccc_token"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/X.svg"
              className="w-[32px] sm:w-[40px] md:w-[60px]"
              alt=""
            />
          </a>
          <a
            href="https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQCmEVJQ5njttNRBa1bqqZsVq5WaHYliG9BU_d5BP1Bu2QXY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-[3px] m-auto h-full md:px-[10px] font-[700] rounded-[6px] md:rounded-[26px] text-[14px] md:text-[30px] lg:text-[40px] border-[2px] md:border-[6px] border-[#000]">
              {translated.footer.buy}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
