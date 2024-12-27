// src/app/advertiser/components/cert/Cert.tsx
'use client';

import Image from 'next/image';

export default function Cert() {
  return (
    <section className='my-4 flex w-full justify-center bg-[#F9F9F9] sm:my-6'>
      <div className='w-full px-4 xs:w-[768px] xs:px-0'>
        <div className='/* 모바일 320px */ /* 500px */ /* 640px */ /* 768px */ /* 1024px */ /* 1280px */ /* 최대 높이 제한 */ relative h-[80px] max-h-[200px] w-full xs:h-[100px] sm:h-[120px] md:h-[132px] lg:h-[160px] xl:h-[180px]'>
          <Image
            src='/assets/images/Logo_Sponsor.svg'
            alt='올해의 관광벤처 우수기업 선정'
            fill
            className='object-contain'
            priority
            sizes='(max-width: 500px) 90vw,
                   (max-width: 768px) 720px,
                   768px'
          />
        </div>
      </div>
    </section>
  );
}
