const primayAdButton: string =
  "flex justify-center items-center bg-primaryColor text-white text-center font-medium text-[clamp(10px,3vw,14px)] xs:text-[clamp(8px,1.5vw,11px)] rounded-full hover:shadow hover:shadow-gray-400 xs:px-3 sm:px-4 h-[clamp(32px,10vw,48px)] xs:h-[clamp(26px,5vw,36px)] xs:w-auto ";
//primary의 min-w mon-h는 사용처에서 제공해야 함(아이콘 버튼, 논 아이콘 버튼으로 나뉘어 지기 때문.)

const mediumAdButton: string =
  "flex justify-center items-center font-bold border-3 xs:border-2 border-teal-400 text-xxs xs:text-[clamp(9px,1.5vw,12px)] text-teal-400 rounded-full hover:shadow hover:shadow-gray-400 xs:px-3 sm:px-4 min-h-9 min-w-9 w-[clamp(32px,10vw,48px)] h-[clamp(32px,10vw,48px)] xs:min-h-[26px] xs:h-[clamp(26px,5vw,37px)] xs:w-auto";

const normalAdButton: string =
  "flex justify-center items-center text-center font-medium font-medium bg-cardMint text-[clamp(10px,3vw,14px)] xs:text-[clamp(8px,1.5vw,11px)] text-primaryColor rounded-full hover:shadow hover:shadow-gray-400 px-2 xs:px-3 sm:px-4 h-[clamp(32px,10vw,48px)] xs:h-[clamp(26px,5vw,36px)]";

const lightAdButton: string =
  "flex justify-center items-center xs:text-[clamp(9px,1.7vw,12px)] font-normal hover:bg-cyan-50 rounded px-3 xs:px-4 xs:h-[clamp(24px,5vw,38px)]";

export const buttons = {
  primary: primayAdButton,
  medium: mediumAdButton,
  normal: normalAdButton,
  light: lightAdButton,
}