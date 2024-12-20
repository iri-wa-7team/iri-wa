import Image from 'next/image';

export default function Banner() {
  return (
    <section className='mt-[75px] flex h-[116px] w-full justify-center bg-bannerCardGray'>
      <div className='mx-[11.11%] flex h-[116px] w-[38.88%] justify-between'>
        <div className='flex flex-col justify-center gap-[12px]'>
          <h4 className='text-[clamp(1.125rem,4vw,1.25rem)] font-semibold tracking-[-5%] text-mainText'>
            인플루언서 광고가 필요하신가요?
          </h4>
          <div className='flex items-center gap-[7px]'>
            <span className='text-[clamp(1.125rem,4vw,1.25rem)] font-semibold leading-[1.875rem] tracking-[-5%] text-primaryColor'>
              무료로 하는 와이리 마케팅 알아보기
            </span>
            <svg
              className='h-[14px] w-[14px]'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 30L30 16M30 16L16 2M30 16L2 16'
                stroke='#2EC8C8'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <Image
          src='/assets/images/banner_influencer.png'
          alt='human-icon'
          width={370}
          height={232}
          className='max-w-[185px]'
        />
      </div>
    </section>
  );
}
