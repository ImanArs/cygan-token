import useLanguage from "../hooks";
import { translates } from "../translates";

export const Second = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  const image = language === "ru" ? "/images/ru-2.png" : "/images/eng-2.png";
  return (
    <div
      className="h-[60vh] md:h-[120vh] w-full bg-[#FFB325] relative overflow-hidden"
      id="about"
    >
      <img
        src="/images/lines.png"
        className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[155vh]"
        alt=""
      />
      <img
        src="/images/cygan.png"
        className="w-[340px] md:w-[600px] xl:w-[1100px] absolute md:relative bottom-[-120px] left-[-50px] z-[1]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute top-[20px] left-[120px] w-[50px] md:w-[120px]"
        alt=""
      />
      <div className="absolute right-0 top-[50%] translate-y-[-50%] ">
        <div
          className="w-[300px] md:w-[800px] max-h-[626px] relative border-[6px] border-r-0 bg-[#fff] border-[#000] rounded-[36px_0_0_36px] md:rounded-[88px_0_0_88px] 
          px-[14px] pt-[10px] pb-[20px] md:px-[74px] md:pt-[80px] md:pb-[100px]  
          leading-[20px] md:leading-[44px]"
        >
          <div
            className="absolute top-[-50px] md:top-[-100px] stroke left-[50%] translate-x-[-50%] lodrina text-[#FFA807] 
          text-[50px] md:text-[170px] "
          >
            <img
              src={image}
              className="w-[213px] sm:w-[300px] md:w-[400px] mx-auto relative z-10"
              alt=""
            />
          </div>
          <p className="text-center lodrina text-[16px] md:text-[32px]">
            {translated.second.desc}
          </p>
          <img
            src="/icons/coin.png"
            className="absolute bottom-[-40px] left-[120px] rotate-[320deg] w-[50px] md:w-[120px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
