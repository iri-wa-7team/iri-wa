type ReButtonProps = {
  buttonIndex: number;
  currentIndex: number;
  clickHandler: (index: number) => void;
  mainContent: string;
  subContent?: string;
};

export default function ReButton({
  buttonIndex,
  currentIndex,
  clickHandler,
  mainContent,
  subContent,
}: ReButtonProps) {
  return (
    <button
      onClick={() => clickHandler(buttonIndex)}
      className={`group relative text-sm duration-300 ease-in-out ${
        currentIndex === buttonIndex ? 'text-xl font-bold' : ''
      } ${
        currentIndex === buttonIndex
          ? 'before:absolute before:left-[-55px] before:top-3 before:h-[1px] before:w-10 before:-translate-y-1/2 before:bg-white before:content-[""] after:absolute after:left-[-15px] after:top-3 after:h-[5px] after:w-[5px] after:-translate-y-1/2 after:rounded-full after:bg-white after:content-[""]'
          : ''
      }`}
    >
      {mainContent}

      <br />
      <b
        className={`${
          currentIndex === buttonIndex ? 'block' : 'hidden'
        } text-left text-sm font-medium`}
      >
        {subContent}
      </b>
    </button>
  );
}
