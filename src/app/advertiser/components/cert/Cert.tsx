'use client';

import Image from 'next/image';

export default function Cert() {
  return (
    <section className='my-6 flex w-full justify-center bg-[#F9F9F9]'>
      <div className='w-full xs:w-[768px]'>
        <div className='relative h-[132px] w-full'>
          <Image
            src='/assets/images/Logo_Sponsor.svg'
            alt='올해의 관광벤처 우수기업 선정'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
