import Image from 'next/image';

export default function Banner() {
  return (
    <section className='mt-[150px] h-[232px] w-full bg-bannerCardGray'>
      <div className='flex justify-center gap-[137px]'>
        <div className='mt-[72px] flex flex-col gap-6'>
          <h4 className='text-[40px] font-semibold leading-[60px] tracking-tight text-mainText'>
            인플루언서 광고가 필요하신가요?
          </h4>
          <span className='relative text-[40px] font-semibold leading-[60px] tracking-tight text-primaryColor'>
            무료로 하는 와이리 마케팅 알아보기
            <svg
              className='absolute right-[-42px] top-[50%] translate-y-[-50%]'
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
          </span>
        </div>
        <Image
          src='/assets/images/banner_influencer.png'
          alt='human-icon'
          width={370}
          height={232}
        />
      </div>
    </section>
  );
}
