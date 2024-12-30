import useLanguage from "../hooks";
import { translates } from "../translates";

export const Footer = () => {
  const { language } = useLanguage();
  const translated = translates[language];
  return (
    <div className="py-[45px] max-w-[1390px] w-full mx-auto">
      <h2 className="text-center text-[67px] ultra">
        {translated.footer.title}
      </h2>
      <div className="flex justify-between gap-[103px] items-center mt-[74px]">
        <p className="text-[28px] font-[700]">
          {translated.footer[1]} <br /> {translated.footer[2]}
        </p>
        <div className="flex justify-between gap-[34px]">
          <img src="/icons/TG.svg" alt="" />
          <img src="/icons/X.svg" alt="" />
          <button className="px-[10px] font-[700] rounded-[26px] text-[50px] border-[6px] border-[#000]">
            {translated.footer.buy}
          </button>
        </div>
      </div>
    </div>
  );
};
