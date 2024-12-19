'use client'

import { useScroll } from '@/hooks/useScroll';
import Button from '../buttons/Button';
import HomeButton from '../buttons/HomeButton';
import DropDown from '../dropdown/Dropdown';

export default function AdNavBar() {
  const { scrollTo } = useScroll();

  return (
    <header>
      <div className='fixed left-0 top-0 z-30 flex min-h-[58px] w-full items-center border-b-[1px] bg-white shadow-sm xs:border-b-2 xs:px-4'>
        <div className='flex h-full w-full items-center justify-between xs:mx-4'>
          {/* 홈 버튼 */}
          <HomeButton />

          {/* 버튼 그룹  - 추후 컴포넌트 덩어리로 묶어버릴 예정.*/}
          <div className='flex items-center justify-around gap-x-1 xs:gap-x-2'>
            <div className='flex hidden justify-between xs:contents xs:gap-x-1'>
              <Button
                variant='light'
                onClick={() => {
                  scrollTo('intro');
                }}
              >
                서비스 소개
              </Button>
              <Button variant='light'>진행 사례</Button>
              <Button variant='light'>서비스 종류</Button>
              <Button variant='light'>FAQ</Button>
            </div>
            <div className='flex items-center justify-center gap-x-2'>
              <Button variant='primary' className='px-2'>
                제안서 받기
              </Button>
              <Button href='/influencer' variant='normal'>
                인플루엔서라면?
              </Button>
              <Button href='/' variant='normal'>
                똑똑한 여행법
              </Button>
            </div>
          </div>
          <DropDown />
        </div>
      </div>
    </header>
  );
}
