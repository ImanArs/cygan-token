export const First = () => {
  return (
    <>
      <div className="banner min-h-screen flex justify-center pt-[100px] relative">
        <h1 className="lodrina text-[150px] font-[400] text-[#fff] stroke">
          CRYPTO-GYPSY COIN
        </h1>
        <button className="absolute bottom-[38px] left-[63px] rounded-[20px] py-[9px] px-[15px] border-[#000] border-[6px] bg-[#fff] flex gap-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
            className="w-[68px] h-[42px]"
            alt=""
          />
          <span className="text-[38px] font-[700]">ENG</span>
        </button>
      </div>
    </>
  );
};
