import useLanguage from "../hooks";
import { translates } from "../translates";

export const Five = () => {
  const { language } = useLanguage();
  const translated = translates[language];

  const image = language === "ru" ? "/images/eng-5.png" : "/images/eng-5.png";

  return (
    <div className="bg-[#000]">
      <div className="cubes relative h-[80vh] md:h-[130vh]">
        <img
          src="/icons/shirt.png"
          className="absolute 
          top-[-10px] left-[47%] md:top-[-40px] sm:left-[57%]
          w-[160px] sm:w-[120px] md:w-[250px] lg:w-[350px]"
          alt=""
        />
        <img
          src="/icons/coin.png"
          className="absolute bottom-[-40px] left-[14%] rotate-[-25deg] w-[50px] md:w-[120px]"
          alt=""
        />
        <img
          src="/icons/coin.png"
          className="absolute bottom-[-10px] left-[25%] rotate-[-5deg] w-[56px] md:w-[120px]"
          alt=""
        />
        <div className="w-full lodrina pt-[140px]">
          <div className="relative w-[50%] bg-white border-[6px] border-[#000] rounded-[0_88px_88px_0]">
            <p className="text-[37px] sm:text-[50px] md:text-[70px] lg:text-[100px] ml-auto text-center">
              {translated.five[1]}
            </p>
            <div className="absolute top-[-100%] md:top-[-85%] left-[67%] text-[130px] font-bold stroke lodrina text-[#fff]">
              <img src={image} className="w-[240px] mx-auto" alt="" />
            </div>
          </div>
          <div className="w-[50%] ml-auto bg-white border-[6px] border-[#000] rounded-[88px_0_0_88px]">
            <p className="text-[37px] sm:text-[50px] md:text-[70px] lg:text-[100px] ml-auto text-center">
              {translated.five[2]}
            </p>
          </div>
          <div className="w-[50%] bg-white border-[6px] border-[#000] rounded-[0_88px_88px_0]">
            <p className="text-[37px] sm:text-[50px] md:text-[70px] lg:text-[100px] ml-auto text-center">
              {translated.five[3]}
            </p>
          </div>
          <div className="w-[50%] ml-auto bg-white border-[6px] border-[#000] rounded-[88px_0_0_88px]">
            <p className="text-[37px] sm:text-[50px] md:text-[70px] lg:text-[100px] ml-auto text-center">
              {translated.five[4]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
