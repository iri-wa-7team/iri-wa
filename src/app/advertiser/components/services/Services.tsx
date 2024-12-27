// src/app/advertiser/components/services/Services.tsx
'use client';

import { useScroll } from '@/hooks/useScroll';
import Image from 'next/image';

export default function Services() {
  const {refs, scrollTo} = useScroll()

  const services = [
    {
      image: '/assets/images/Service_Macro.svg',
      title: '매크로 유튜버 서비스',
      description:
        '믿을 수 있는 와이리 유튜버를 통해 PPL에서 브랜드 도 콘텐츠까지 원하는 영상을 제작해보세요.',
      buttonText: '이용하기',
    },
    {
      image: '/assets/images/Service_Pakage.svg',
      title: '실속 패키지',
      description:
        '객실 혹은 상품 제공 없이 지정한 금액으로 빠르게 마케팅을 진행해보세요.',
      buttonText: '이용하기',
    },
    {
      image: '/assets/images/Service_Sales.svg',
      title: '세일즈 마케팅 (구매제)',
      description:
        '유휴객실을 적극적으로 활용하여 세일즈를 통한 매출 중 대와 마케팅을 동시에 진행해보세요.',
      buttonText: '이용하기',
    },
    {
      image: '/assets/images/Service_Black.svg',
      title: '블랙 인플루언서',
      description:
        '보다 확실한 홍보 방법! 와이리 인플루언서 중 가장 영향력이 높은 50인이 마케팅을 진행합니다.',
      buttonText: '이용하기',
    },
  ];

  return (
    <section className='flex scroll-mt-[58px] w-full justify-center bg-white py-16' ref={refs['service']}>
      <div className='w-full px-4 xs:w-[768px]'>
        {/* 헤더 */}
        <div className='mb-12'>
          <h3 className='mb-2 text-lg text-[#2EC8C8]'>MORE SERVICES</h3>
          <h2 className='text-3xl font-bold text-gray-800'>
            더 많은 서비스들이 있어요
          </h2>
        </div>

        {/* 서비스 그리드 */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {services.map((service, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white'
            >
              <div className='p-6'>
                <div className='relative mb-6 h-[200px] w-full'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-contain'
                  />
                </div>
                <h3 className='mb-3 text-xl font-bold text-gray-800'>
                  {service.title}
                </h3>
                <p className='mb-6 line-clamp-2 h-[40px] text-sm text-gray-600'>
                  {service.description}
                </p>
                <button className='w-full rounded-lg bg-[#2EC8C8] py-4 text-white transition-colors hover:bg-[#29b5b5]' onClick={()=>scrollTo('inquiry')}>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
