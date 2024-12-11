
export default function HomeButton() {
  return (
    <div className='flex items-center'>
      {/* 데스크톱 로고 */}
      <img
        src='/assets/images/wairi_logo.svg'
        alt='mobileLogo'
        className='hidden xs:block xs:aspect-[3/1] xs:h-[clamp(18px, 3vw, 20px)] xs:max-h-[20px] xs:min-h-[18px] xs:min-w-[54px] xs:shrink-0 object-contain'
        
        
      />

      {/* 모바일 로고 */}
      <img
        src='/assets/images/wairi_logo_mobile.svg'
        alt='mobileLogo'
        className='aspect-[1/1] object-contain block xs:hidden'
      />
    </div>
  );
}

// aspect-[2/1] sm:aspect-[3/1]
