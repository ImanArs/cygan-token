import useLanguage from "../hooks";
import { translates } from "../translates";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = ({ number, text, className }: any) => {
  return (
    <div
      className={`relative border-[6px] bg-[#fff] w-[100%] mx-auto md:mx-0 lg:w-[260px] border-[#000] 
        pt-[20px] md:pt-[70px] px-[10px] md:px-[20px] rounded-[26px] md:rounded-[60px] h-full md:h-[380px] ${className}`}
    >
      <h3 className="text-[70px] md:text-[150px] absolute top-[-60px] md:top-[-120px] left-[50%] translate-x-[-50%] lodrina">
        {number}
      </h3>
      <p className="text-[10px] sm:text-[18px] md:text-[26px] lg:text-[34px] lodrina text-center">
        {text}
      </p>
    </div>
  );
};

export const Third = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  const image = language === "ru" ? "/images/ru-3.png" : "/images/eng-3.png";

  return (
    <div className="md:h-[130vh] h-[70vh] coins w-full relative">
      <img
        src="/icons/coin.png"
        className="absolute w-[50px] lg:w-[120px] top-[70px] left-[60px] md:left-[300px]"
        alt=""
      />
      <img
        src="/icons/card.png"
        className="absolute w-[150px] lg:w-[320px] xl:w-[400px] top-[-50px] right-[0px] md:top-[-180px] md:right-[200px]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute top-[10px] left-[10px] md:top-[180px] md:left-[120px] w-[70px] md:w-[150px] md:rotate-[20deg]"
        alt=""
      />
      <img
        src="/icons/ring.png"
        className="absolute bottom-[-40px] right-[65%] md:bottom-[-40px] md:right-[45%] w-[150px] lg:w-[300px]"
        alt=""
      />
      <img
        src="/icons/shirt.png"
        className="absolute bottom-[0px] right-[3%] w-[160px] lg:w-[300px]"
        alt=""
      />
      <div className="bg-[#e07700e2] z-[-1] w-full h-full absolute top-[0%] left-[0%]"></div>
      <div className="">
        <div className="lodrina text-[80px] md:text-[160px] pt-[30px] text-center">
          <img
            src={image}
            className="w-[213px] sm:w-[300px] md:w-[400px] mx-auto relative z-10"
            alt=""
          />
        </div>
        <div className="grid grid-cols-4 mt-[50px] md:mt-[150px] gap-[10px] sm:grid sm:grid-cols-4 md:gap-[50px] max-w-[1400px] w-full mx-auto relative z-[1]">
          <Grid
            number={1}
            text={translated.third[1]}
            className="mt-[30px] sm:mt-[50px] md:mt-[100px] "
          />
          <Grid number={2} text={translated.third[2]} />
          <Grid
            number={3}
            text={translated.third[3]}
            className="mt-[30px] sm:mt-[50px] md:mt-[100px] "
          />
          <Grid number={4} text={translated.third[4]} />
        </div>
        {language === "eng" ? (
          <>
            <div className="w-[calc(100%-12px)] h-[6px] sm:h-[12px] md:h-[17px] bg-[#fff] absolute top-[240px] sm:top-[313.5px] lg:top-[553px] left-[0] z-[1]"></div>
            <div className="w-full h-[13px] sm:h-[21px] md:h-7 bg-white absolute z-[0] top-[237px] sm:top-[308px] lg:top-[548px] border-[6px] border-[#000] border-x-0"></div>
          </>
        ) : (
          <>
            <div className="w-[calc(100%-12px)] h-[4px] sm:h-[12px] md:h-[11px] bg-[#fff] absolute top-[230px] sm:top-[323.5px] md:top-[462px] lg:top-[533px] left-[0] z-[1]"></div>
            <div className="w-full h-[11px] sm:h-[21px] md:h-[20px] bg-white absolute z-[0] top-[226px] sm:top-[318px] md:top-[457px] lg:top-[528px] border-[6px] border-[#000] border-x-0"></div>
          </>
        )}
      </div>
    </div>
  );
};
