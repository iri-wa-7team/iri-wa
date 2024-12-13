export default function DropDown() {
    return (
      <>
        <details className="group xs:hidden">
          <summary className="cursor-pointer text-teal-500 list-none relative transition-all duration-300 ease-in-out w-8 h-8 flex items-center justify-center">
            <span className="group-open:hidden text-[clamp(20px,5vw,32px)]">☰</span>{" "}
            {/* 기본 햄버거 아이콘 */}
            <span className="hidden group-open:contents">X</span>{" "}
            {/* 열렸을 때 'X' 표시 */}
          </summary>
  
          {/* 드롭다운 메뉴 항목들 */}
          <div className="absolute border-t top-full left-0 w-full bg-white px-4 shadow-md z-10">
            <ul className="text-subText text-center text-sm">
              <li className="p-2 hover:bg-gray-200">
                <div>서비스 소개</div>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <div>진행 사례</div>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <div>서비스 종류</div>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <div>FAQ</div>
              </li>
            </ul>
          </div>
        </details>
      </>
    );
  }
  