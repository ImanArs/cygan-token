export const Header = () => {
  return (
    <header className="ultra absolute z-[1] max-w-[1620px] w-full mx-auto left-[50%] translate-x-[-50%] px-[62px]">
      <nav className="flex justify-between text-[44px] font-[400] gap-[140px]">
        <div>$CCC</div>
        <ul className="flex gap-[42px]">
          <li>ABOUT</li>
          <li>ROADMAP</li>
          <li>FAQ</li>
        </ul>
        <div className="flex gap-5">
          <img src="/icons/TG.svg" alt="" />
          <img src="/icons/X.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};
