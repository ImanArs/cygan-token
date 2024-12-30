const FancyText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block font-bold lodrina">
      {/* Текст "обводка" */}
      <span className="absolute top-0 left-0 text-[96px] text-black  tracking-wide whitespace-nowrap z-10">
        {text}
      </span>
      {/* Основной текст */}
      <span className="absolute top-[5px] left-[-16px] text-[90px] z-20">
        {text}
      </span>
    </div>
  );
};

export default FancyText;
