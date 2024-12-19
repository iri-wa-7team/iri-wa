import Image from 'next/image';
import mobileLogo from '@assets/images/wairi_logo_mobile.svg';
import webLogo from '@assets/images/wairi_logo.svg';

export default function HomeButton() {
  return (
    <div className='flex items-center'>
      {/* 데스크톱 로고 */}
 
      <div className='hidden xs:flex flex-shrink min-w-[48px] max-w-[72px] w-[clamp(48px,5vw,72px)]'>
        <Image
          src={webLogo}
          alt='webLogo'
          className='object-contain'
          layout='responsive'
        />
      </div>

      {/* 모바일 로고 */}
      <div className='block xs:hidden'>
        <Image
          src={mobileLogo}
          alt='mobileLogo'
          width={30}
          height={30}
          className='object-contain'
          style={{ minWidth: '18px', minHeight: '18px' }}
        />
      </div>

    </div>
  );
}

// aspect-[2/1] sm:aspect-[3/1]
