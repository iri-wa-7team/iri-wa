'use client';

import Image from 'next/image';
import Video from '../video/Video';
import coins from '@assets/images/coins.png';
import coin from '@assets/images/coin.png';
import arrow from '@assets/images/arrow.svg';
import { useScroll } from '@/hooks/useScroll';

export default function IntroSection() {
  const { refs } = useScroll();

  return (
    <div
      ref={refs['intro']}
      className='mt-[58px] flex w-full scroll-mt-[58px] flex-col items-center justify-center bg-white'
    >
      <Video />
      <div className='flex flex-col items-center justify-center gap-[2.6rem] font-pre'>
        <div className='flex flex-col items-center'>
          <h1 className='hidden'>와이리 서비스 소개</h1>
          <div className='flex flex-col items-center justify-center'>
            <p className='whitespace-nowrap text-[clamp(12px,4vw,18px)] font-normal text-subText xs:text-[clamp(16px,3vw,24px)]'>
              언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
            </p>
            <p className='whitespace-nowrap text-[clamp(12px,4vw,18px)] font-bold xs:text-[clamp(16px,3vw,24px)]'>
              <span className='font-bold text-primaryColor'>
                무료로 검증된 인플루언서
              </span>
              <span className='font-bold text-black'>를 통해</span>
            </p>
            <p className='whitespace-nowrap text-[clamp(12px,4vw,18px)] font-bold text-black xs:text-[clamp(16px,3vw,24px)]'>
              마케팅을 진행해보세요
            </p>
          </div>
        </div>

        <div className='mb-12 flex items-center justify-between gap-14'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <div className='relative flex items-center justify-center xs:h-[120px] xs:w-[95px]'>
              <Image
                src={coins}
                alt='coins'
                fill
                className='absolute inset-0 m-auto object-center'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-xl font-bold text-gray-600'>
                400,000원 ~ 50,000원
              </h3>
              <p className='text-xs text-gray-500'>
                타사 인플루언서 10명 진행 기준
              </p>
            </div>
          </div>
          <div className='relative xs:h-[32px] xs:w-[52px]'>
            <Image src={arrow} alt='arrow' fill />
          </div>
          <div className='flex flex-col items-center gap-[0.26rem]'>
            <div className='relative mb-6 xs:h-[70px] xs:w-[70px]'>
              <Image src={coin} alt='coin' fill />
            </div>
            <h2 className='font-montserrat text-[1.56rem] font-semibold leading-[2.34rem] tracking-tight text-primaryColor'>
              0원
            </h2>
            <p className='text-center font-pre text-xs font-normal text-gray-500'>
              와이리에서는
              <br />
              인원수 관계없이 무료!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
