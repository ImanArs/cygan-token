export const Second = () => {
  return (
    <div className="h-[120vh] w-full bg-[#FFB325] relative overflow-hidden">
      <img
        src="/images/lines.svg"
        className="absolute top-[-40%] left-[0%]"
        alt=""
      />
      <img
        src="/images/cygan.png"
        className="w-[1100px] relative z-[0]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute top-[20px] left-[120px] w-[120px]"
        alt=""
      />
      <div className="absolute right-0 top-[50%] translate-y-[-50%] ">
        <div className="w-[800px] max-h-[626px] relative border-[6px] bg-[#fff] border-[#000] rounded-[88px_0_0_88px] px-[74px] pt-[80px] pb-[100px] leading-[44px]">
          <h2 className="absolute top-[-50px] stroke left-[50%] translate-x-[-50%] lodrina text-[170px] text-[#FFA807]">
            ABOUT
          </h2>
          <p className="text-center lodrina text-[32px]">
            $CCC is a project build by community that started its acquaintance
            with the TON ecosystem with wrong projects. The creators of the
            project burned through investments in Hamster Combat, Dicks, Clowns
            and decided to create their own token, where they united all the
            projects of this blockchain in one character, meet! Crypto-Gypsy
            token
          </p>
          <img
            src="/icons/coin.png"
            className="absolute bottom-[-80px] left-[120px] rotate-[320deg] w-[140px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
