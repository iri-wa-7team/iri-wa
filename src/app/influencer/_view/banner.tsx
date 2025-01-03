import Image from 'next/image';

export default function Banner() {
  return (
    <section className='mt-[75px] flex h-[116px] w-full justify-center bg-bannerCardGray'>
      <div className='flex w-[560px] justify-between'>
        <div className='flex flex-col pb-[30px] pl-[20px] pt-[36px]'>
          <h4 className='text-[clamp(16px,3vw,20px)] font-semibold leading-[30px] tracking-tight text-mainText'>
            인플루언서 광고가 필요하신가요?
          </h4>
          <span className='relative text-[clamp(16px,3vw,20px)] font-semibold leading-[30px] tracking-tight text-primaryColor'>
            무료로 하는 와이리 마케팅 알아보기
            <svg
              className='absolute right-[-21px] top-[50%] h-[16px] w-[16px] translate-y-[-50%]'
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
        <div>
          <Image
            src='/assets/images/banner_influencer.png'
            alt='human-icon'
            width={185}
            height={116}
          />
        </div>
      </div>
    </section>
  );
}
