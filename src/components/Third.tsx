import useLanguage from "../hooks";
import { translates } from "../translates";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = ({ number, text, className }: any) => {
  return (
    <div
      className={`relative border-[6px] bg-[#fff] w-[60%] mx-auto md:mx-0 md:w-[260px] border-[#000] pt-[70px] px-[20px] rounded-[60px] h-auto md:h-[360px] ${className}`}
    >
      <h3 className="text-[70px] md:text-[150px] absolute top-[-60px] md:top-[-120px] left-[50%] translate-x-[-50%] lodrina">
        {number}
      </h3>
      <p className="text-[34px] lodrina text-center">{text}</p>
    </div>
  );
};

export const Third = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  return (
    <div className="md:h-[130vh] min-h-[100vh] coins w-full relative">
      <img
        src="/icons/coin.png"
        className="absolute w-[50px] lg:w-[120px] top-[80px] left-[100px] md:left-[300px]"
        alt=""
      />
      <img
        src="/icons/card.png"
        className="absolute w-[150px] lg:w-[320px] xl:w-[400px] top-[-50px] right-[80px] md:top-[-180px] md:right-[200px]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute top-[180px] left-[120px] rotate-[20deg]"
        alt=""
      />
      <img
        src="/icons/ring.png"
        className="absolute bottom-[-40px] right-[45%]  w-[150px] lg:w-[300px]"
        alt=""
      />
      <img
        src="/icons/shirt.png"
        className="absolute bottom-[0px] right-[3%] w-[150px] lg:w-[300px]"
        alt=""
      />
      <div className="bg-[#e07700e2] z-[-1] w-full h-full absolute top-[0%] left-[0%]"></div>
      <div className="">
        <h2 className="lodrina text-[80px] md:text-[160px] text-center">
          {translated.third.title}
        </h2>
        <div className="flex flex-col mt-[150px] md:mt-0 gap-[50px] md:grid md:grid-cols-4 md:gap-[50px] max-w-[1400px] w-full mx-auto relative z-[1]">
          <Grid
            number={1}
            text={translated.third[1]}
            className="md:mt-[120px]"
          />
          <Grid number={2} text={translated.third[2]} />
          <Grid
            number={3}
            text={translated.third[3]}
            className="md:mt-[120px]"
          />
          <Grid number={4} text={translated.third[4]} />
        </div>
        <div className="hidden md:block w-[calc(100%-12px)] h-[17px] bg-[#fff] absolute top-[413.5px] left-[0] z-[1]"></div>
        <div className="hidden md:block w-full h-7 bg-white absolute z-[0] top-[408px] border-[6px] border-[#000]"></div>
      </div>
    </div>
  );
};
