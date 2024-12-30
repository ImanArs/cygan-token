export const Five = () => {
  return (
    <div className="bg-[#000]">
      <div className="cubes relative min-h-[120vh]">
        <img
          src="/icons/shirt.png"
          className="absolute top-[-60px] left-[47%] w-[350px]"
          alt=""
        />
        <img
          src="/icons/coin.png"
          className="absolute bottom-[-60px] left-[17%] rotate-[-25deg] w-[120px]"
          alt=""
        />
        <img
          src="/icons/coin.png"
          className="absolute bottom-[-10px] left-[25%] rotate-[-5deg] w-[170px]"
          alt=""
        />
        <div className="w-full lodrina pt-[140px]">
          <div className="relative w-[50%] bg-white border-[6px] border-[#000] rounded-[0_88px_88px_0]">
            <p className="text-[100px] ml-auto text-center">Crypto</p>
            <h2 className="absolute top-[-85%] left-[67%] text-[130px] font-bold stroke lodrina text-[#fff]">
              FAQ
            </h2>
          </div>
          <div className="w-[50%] ml-auto bg-white border-[6px] border-[#000] rounded-[88px_0_0_88px]">
            <p className="text-[100px] ml-auto text-center">Fun</p>
          </div>
          <div className="w-[50%] bg-white border-[6px] border-[#000] rounded-[0_88px_88px_0]">
            <p className="text-[100px] ml-auto text-center">Gucci</p>
          </div>
          <div className="w-[50%] ml-auto bg-white border-[6px] border-[#000] rounded-[88px_0_0_88px]">
            <p className="text-[100px] ml-auto text-center">Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};
