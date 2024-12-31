import useLanguage from "../hooks";
import { translates } from "../translates";

export const Fourth = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  const image = language === "ru" ? "/images/ru-4.png" : "/images/eng-4.png";
  return (
    <div className="bg-[#FF5900] relative w-full py-[30px] lg:py-0">
      <img
        src="/images/horse.png"
        className="absolute top-[-100px] left-[90px] md:left-0 lg:top-[-140px] xl:top-[-300px] z-[5] w-[160px] sm:w-[200px] lg:w-[400px] xl:w-[600px]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute w-[50px] lg:w-[140px] top-[-20px] lg:top-[-70px] right-[120px] lg:right-[270px] rotate-[25deg] z-[5]"
        alt=""
      />
      <div className="flex text-center text-[100px] lodrina pt-[100px] stroke text-[#FF7023] font-[600]">
        <img
          src={image}
          className="w-[240px] sm:w-[380px] md:w-[500px] mx-auto"
          alt=""
        />
      </div>
      <div className="mt-[20px] md:mt-[120px] flex flex-col lg:flex-row justify-between gap-[20px] md:gap-[60px] max-w-[1360px] mx-auto">
        <div className="w-full flex flex-col gap-5 relative lodrina text-[14px] md:text-[32px] text-center max-w-[1000px] p-10 border-[6px] border-[#000] lg:border-b-0 rounded-[88px_88px_0_0] bg-[#fff]">
          <p>{translated.fourth.desc[1]}</p>
          <p>{translated.fourth.desc[2]}</p>
          <p>{translated.fourth.desc[3]}</p>
          <p>{translated.fourth.desc[4]}</p>

          <img
            src="/icons/shirt.png"
            className="absolute w-[160px] top-[-50px] left-[-70px] z-[5] md:hidden"
            alt=""
          />

          <img
            src="/icons/ring.png"
            className="absolute w-[100px] md:w-[240px] bottom-[-130px] sm:bottom-[-60px] md:bottom-[-140px] md:left-[67%] left-[-20px] rotate-[65deg] z-[5]"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col">
          <button className="rounded-[50px] w-[60%] mx-auto md:w-full  h-[53px] md:h-[83px] lodrina border-[6px] border-[#000] bg-gradient-to-b from-[#ffd95b] to-[#9f811c]">
            <a
              href="https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=EQCmEVJQ5njttNRBa1bqqZsVq5WaHYliG9BU_d5BP1Bu2QXY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#FFC300] rounded-[90px] h-[50%] w-full relative">
                <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-full text-[16px] md:text-[41px]">
                  {translated.fourth.btn}
                </p>
              </div>
            </a>
          </button>
          <div className="text-center mt-[20px] md:mt-[100px]">
            <div className="lodrina text-[48px]">
              <img
                src="/images/contract-eng.png"
                className="w-[400px] mx-auto"
                alt=""
              />
            </div>
            <div className="bg-[#F1F1F1] text-wrap w-[80%] mx-auto md:w-full border-[6px] border-[#000] py-2 md:py-5 text-center rounded-[50px] text-[10px] md:text-[18px] font-[700] break-all">
              EQCmEVJQ5njttNRBa1bqqZsVq5WaHYliG9BU_d5BP1Bu2QXY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
