export const Footer = () => {
  return (
    <div className="py-[45px] max-w-[1390px] w-full mx-auto">
      <h2 className="text-center text-[67px] ultra">JOIN US AT SOCIALS!</h2>
      <div className="flex justify-between gap-[103px] items-center mt-[74px]">
        <p className="text-[36px] font-[700]">
          DISCLAIMER: <br /> $CRYPTO-GYPSY IS A MEME TOKEN MADE FOR FUN
        </p>
        <div className="flex justify-between gap-[34px]">
          <img src="/icons/TG.svg" alt="" />
          <img src="/icons/X.svg" alt="" />
          <button className="px-[20px] font-[700] rounded-[26px] text-[50px] border-[6px] border-[#000]">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};
