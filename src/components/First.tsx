import useLanguage from "../hooks";
import { translates } from "../translates";

export const First = () => {
  const { language, changeLanguage } = useLanguage();
  const translated = translates[language];
  const image =
    language === "ru" ? "/images/ru-title.png" : "/images/eng-title.png";

  return (
    <>
      <div className="banner min-h-screen flex justify-center pt-[100px] relative">
        <div className="lodrina text-[50px] text-center sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-[400] text-[#fff] stroke">
          <img src={image} className="w-[1100px]" alt="lol" />
        </div>
        <button className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[38px] left-[20px] sm:left-[40px] md:left-[63px] rounded-[15px] sm:rounded-[20px] py-[6px] sm:py-[8px] md:py-[9px] px-[10px] sm:px-[12px] md:px-[15px] border-[#000] border-[4px] sm:border-[5px] md:border-[6px] bg-[#fff] flex gap-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
            className="w-[40px] sm:w-[50px] md:w-[68px] h-[25px] sm:h-[35px] md:h-[42px]"
            alt=""
          />
          <span
            className="text-[20px] sm:text-[28px] md:text-[38px] font-[700]"
            onClick={() => changeLanguage(language === "ru" ? "eng" : "ru")}
          >
            {translated.first.lngBtn}
          </span>
        </button>
      </div>
    </>
  );
};
