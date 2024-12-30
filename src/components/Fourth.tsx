export const Fourth = () => {
  return (
    <div className="bg-[#FF5900] relative w-full">
      <img
        src="/images/horse.png"
        className="absolute top-[-300px] z-[5]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute w-[140px] top-[-70px] right-[270px] rotate-[25deg] z-[5]"
        alt=""
      />
      <img
        src="/icons/ring.png"
        className="absolute w-[240px] bottom-[-130px] right-[170px] rotate-[65deg] z-[5]"
        alt=""
      />
      <h2 className="text-center text-[100px] lodrina pt-[100px] stroke text-[#FF7023] font-[600]">
        HOW TO BUY?
      </h2>
      <div className="mt-[120px] flex justify-between gap-[60px] max-w-[1360px] mx-auto">
        <div className="w-full flex flex-col gap-5 lodrina text-[32px] max-w-[800px] p-10 border-[6px] border-[#000] border-b-0 rounded-[88px_88px_0_0] bg-[#fff]">
          <p>SWITCH TO DEDUST OR STON.FI</p>
          <p>
            Switch to DeDust or STON.fi in Google Chrome or in the browser in
            the TonKeeper app. Connect your wallet. Enter a name (do not buy
            DUREVOLD) or insert the address of the $DUREV token and confirm.
            When Tonkeeper prompts you to sign, sign it.
          </p>
          <p>WHERE TO BUY A TON?</p>
          <p>
            If you want to buy a TON using a bank card, you can do so using the
            TonKeeper or TonSpace apps. If you want to use CEX, exchange your
            cryptocurrency for TON, then withdraw them to a custodial TON
            wallet, such as TonKeeper.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <button className="rounded-[50px] h-[83px] text-[41px] lodrina border-[6px] bg-gradient-to-b from-[#ffd95b] to-[#9f811c]">
            <div className="bg-[#FFC300] rounded-[90px] h-[50%] w-full relative">
              <p className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-full">
                BUY $CCC VIA STON.FI
              </p>
            </div>
          </button>
          <div className="text-center mt-[100px]">
            <h3 className="lodrina text-[48px]">CONTRACT ADDRESS:</h3>
            <div className="bg-[#F1F1F1] border-[6px] border-[#000] py-5 text-center rounded-[50px] text-[20px]">
              EQCmEVJQ5njttNRBa1bqqZsVq5WaHYliG9BU_d5BP1Bu2QXY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
