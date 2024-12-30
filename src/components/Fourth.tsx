import useLanguage from "../hooks";
import { translates } from "../translates";

export const Fourth = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  return (
    <div className="bg-[#FF5900] relative w-full">
      <img
        src="/images/horse.png"
        className="absolute top-[-100px] lg:top-[-300px] z-[5] w-[250px] lg:w-[300px]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute w-[50px] lg:w-[140px] top-[-20px] lg:top-[-70px] right-[120px] lg:right-[270px] rotate-[25deg] z-[5]"
        alt=""
      />
      <img
        src="/icons/ring.png"
        className="absolute w-[240px] bottom-[-130px] right-[170px] rotate-[65deg] z-[5]"
        alt=""
      />
      <h2 className="text-center text-[100px] lodrina pt-[100px] stroke text-[#FF7023] font-[600]">
        {translated.fourth.title}
      </h2>
      <div className="mt-[120px] flex flex-col lg:flex-row justify-between gap-[60px] max-w-[1360px] mx-auto">
        <div className="w-full flex flex-col gap-5 lodrina text-[32px] max-w-[800px] p-10 border-[6px] border-[#000] lg:border-b-0 rounded-[88px_88px_0_0] bg-[#fff]">
          <p>{translated.fourth.desc[1]}</p>
          <p>{translated.fourth.desc[2]}</p>
          <p>{translated.fourth.desc[3]}</p>
          <p>{translated.fourth.desc[4]}</p>
        </div>
        <div className="w-full flex flex-col">
          <button className="rounded-[50px] h-[83px] text-[41px] lodrina border-[6px] bg-gradient-to-b from-[#ffd95b] to-[#9f811c]">
            <div className="bg-[#FFC300] rounded-[90px] h-[50%] w-full relative">
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-full">
                {translated.fourth.btn}
              </p>
            </div>
          </button>
          <div className="text-center mt-[100px]">
            <h3 className="lodrina text-[48px]">
              {translated.fourth.contract}
            </h3>
            <div className="bg-[#F1F1F1] border-[6px] border-[#000] py-5 text-center rounded-[50px] text-[20px]">
              EQCmEVJQ5njttNRBa1bqqZsVq5WaHYliG9BU_d5BP1Bu2QXY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
