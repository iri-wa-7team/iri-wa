// src/app/advertiser/components/services/Services.tsx
'use client';

import { useScroll } from '@/hooks/useScroll';
import Image from 'next/image';

export default function Services() {
  const { refs, scrollTo } = useScroll();

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
    <section
      className='w-full scroll-mt-[58px] bg-white py-8 sm:py-12 md:py-16'
      ref={refs['service']}
    >
      <div className='mx-auto w-full px-[20px] xs:w-[500px] sm:w-[640px] sm:px-4 md:w-[768px] lg:w-[1024px] xl:w-[1200px]'>
        {/* 헤더 */}
        <div className='mb-8 sm:mb-10 md:mb-12'>
          <h3 className='mb-2 text-base text-[#2EC8C8] sm:text-lg'>
            MORE SERVICES
          </h3>
          <h2 className='text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl'>
            더 많은 서비스들이 있어요
          </h2>
        </div>

        {/* 서비스 그리드 */}
        <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white'
            >
              <div className='p-4 sm:p-5 md:p-6'>
                <div className='relative mb-4 h-[140px] w-full sm:mb-5 sm:h-[160px] md:mb-6 md:h-[200px]'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-contain'
                  />
                </div>
                <h3 className='mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl'>
                  {service.title}
                </h3>
                <p className='mb-4 line-clamp-2 h-[32px] text-sm text-gray-600 sm:mb-5 sm:h-[36px] md:mb-6 md:h-[40px]'>
                  {service.description}
                </p>
                <button
                  className='w-full rounded-lg bg-[#2EC8C8] py-3 text-sm text-white transition-colors hover:bg-[#29b5b5] sm:py-3.5 md:py-4 md:text-base'
                  onClick={() => scrollTo('inquiry')}
                >
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
