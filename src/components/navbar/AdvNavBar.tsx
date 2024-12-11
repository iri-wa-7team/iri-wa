import Button from "../buttons/Button";
import HomeButton from "../buttons/HomeButton";
import DropDown from "../dropdown/Dropdown";

export default function AdNavBar() {
  return (
    <header>
      <div className="fixed top-0 left-0 w-full bg-white xs:border-b-2 shadow-sm border-b-[1px] xs:px-3 min-h-[58px] flex items-center">
        <div className="flex items-center justify-evenly xs:justify-between w-full h-full px-2">
          {/* 홈 버튼 */}
         <HomeButton/>

          {/* 버튼 그룹  - 추후 컴포넌트 덩어리로 묶어버릴 예정.*/}
          <div className="flex justify-between items-center xs:gap-x-2 gap-x-1 ml-1">
            <div className="flex justify-between hidden xs:contents xs:gap-x-1">
              <Button variant="light">서비스 소개</Button>
              <Button variant="light">진행 사례</Button>
              <Button variant="light">서비스 종류</Button>
              <Button variant="light">FAQ</Button>
            </div>
            <div className="flex justify-center items-center xs:gap-x-2 gap-x-2">
              <Button variant="primary" className="px-2">
                제안서 받기
              </Button>
              <Button href="/influencer" variant="normal">인플루엔서라면?</Button>
              <Button href="/" variant="normal">
                똑똑한 여행법
              </Button>
            </div>
          </div>
          <DropDown/>
        </div>
      </div>
    </header>
  );
}
