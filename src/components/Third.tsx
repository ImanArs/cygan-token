// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = ({ number, text, className }: any) => {
  return (
    <div
      className={`relative border-[6px] bg-[#fff] w-[260px] border-[#000] pt-[70px] px-[20px] rounded-[60px] h-[360px] ${className}`}
    >
      <h3 className="text-[150px] absolute top-[-120px] left-[50%] translate-x-[-50%] lodrina">
        {number}
      </h3>
      <p
        style={{ zIndex: 1000 }}
        className="absolute text-[34px] lodrina text-center"
      >
        {text}
      </p>
    </div>
  );
};

export const Third = () => {
  return (
    <div className="h-[130vh] coins w-full relative">
      <img
        src="/icons/coin.png"
        className="absolute w-[120px] top-[80px] left-[300px]"
        alt=""
      />
      <img
        src="/icons/card.png"
        className="absolute w-[400px] top-[-180px] right-[200px]"
        alt=""
      />
      <img
        src="/icons/coin.png"
        className="absolute top-[180px] left-[120px] rotate-[20deg]"
        alt=""
      />
      <img
        src="/icons/ring.png"
        className="absolute bottom-[-40px] right-[45%] w-[300px]"
        alt=""
      />
      <img
        src="/icons/shirt.png"
        className="absolute bottom-[0px] right-[3%] w-[320px]"
        alt=""
      />
      <div className="bg-[#e07700e2] z-[-1] w-full h-full absolute top-[0%] left-[0%]"></div>
      <div className="">
        <h2 className="lodrina text-[160px] text-center">ROADMAP</h2>
        <div className="grid grid-cols-4 gap-[50px] max-w-[1400px] w-full mx-auto relative z-[1]">
          <Grid
            number={1}
            text={"Lamborghini for a crypto gypsy"}
            className="mt-[120px]"
          />
          <Grid number={2} text={"Buying a Dubai"} />
          <Grid
            number={3}
            text={"Receiving the Most Gypsies Token 2025 reward"}
            className="mt-[120px]"
          />
          <Grid
            number={4}
            text={"Distribution of income from the project among the Tabor"}
          />
        </div>
        <div className="w-[calc(100%-12px)] h-[17px] bg-[#fff] absolute top-[413.5px] left-[0] z-[1]"></div>
        <div className="w-full h-7 bg-white absolute z-[0] top-[408px] border-[6px] border-[#000]"></div>
      </div>
    </div>
  );
};
