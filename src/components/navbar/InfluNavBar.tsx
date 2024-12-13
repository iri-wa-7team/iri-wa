import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa6';
import Button from '../buttons/Button';
import HomeButton from '../buttons/HomeButton';

export default function InfluNavBar() {
  return (
    <>
      <div className='fixed left-0 top-0 flex max-h-[58px] min-h-[58px] w-full flex-col justify-center bg-white shadow-lg'>
        <div className='flex items-center justify-between px-3 py-1'>
          {/* 홈 버튼 */}
          <HomeButton />

          {/* 버튼 그룹  - 추후 컴포넌트 덩어리로 묶어버릴 예정.*/}
          <div className='flex items-center justify-center gap-x-[clamp(4px,2vw,8px)]'>
            <span className='hidden whitespace-nowrap text-subText xs:contents xs:text-[clamp(10px,1.7vw,12px)]'>
              <span>수많은 캠페인에 참여해보세요</span>
            </span>

            <Button
              href='/advertiser'
              variant='primary'
              className='min-h-9 w-[clamp(32px,10vw,48px)] min-w-9 xs:min-h-[26px]'
            >
              <FaApple className='h-4 w-4 xs:mr-1' />
              <span className='hidden xs:contents'>APP Store</span>
            </Button>
            <Button href='/advertiser' variant='medium'>
              <FaGooglePlay className='h-4 w-4 xs:mr-1' />
              <span className='hidden xs:contents'>Google Play</span>
            </Button>

            <Button href='/advertiser' variant='normal'>
              <span>광고주라면?</span>
            </Button>
            <Button href='/' variant='normal'>
              <span>똑똑한 여행법</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
