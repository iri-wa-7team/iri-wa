// src/app/advertiser/components/logoline/LogoLine.tsx
'use client';

import Image from 'next/image';

// 상단 로고 배열
const topLogos = [
  { src: '/assets/images/LG_LOTTEHOTELS.svg', alt: 'Lotte Hotels' },
  { src: '/assets/images/LG_BLUEOCEAN.svg', alt: 'Blue Ocean' },
  { src: '/assets/images/LG_COURTYARD.svg', alt: 'Courtyard' },
  { src: '/assets/images/LG_PHOENIX.svg', alt: 'Phoenix' },
  { src: '/assets/images/LG_HOTELFORET.svg', alt: 'Hotel Foret' },
  { src: '/assets/images/LG_THEFIRST70.svg', alt: 'The First 70' },
  { src: '/assets/images/LG_HOTELFORETPRE.svg', alt: 'Hotel Foret Premier' },
  { src: '/assets/images/LG_TRIPCOM.svg', alt: 'Trip.com' },
];

// 하단 로고 배열
const bottomLogos = [
  { src: '/assets/images/LG_CAPPUCCINO.svg', alt: 'Cappuccino Hotel' },
  { src: '/assets/images/LG_HOTELKOREANA.svg', alt: 'Hotel Koreana' },
  { src: '/assets/images/LG_IBISSTYLES.svg', alt: 'Ibis Styles' },
  { src: '/assets/images/LG_KLOOK.svg', alt: 'Klook' },
  { src: '/assets/images/LG_NOVOTEL.svg', alt: 'Novotel' },
  { src: '/assets/images/LG_AVANI.svg', alt: 'Avani' },
  { src: '/assets/images/LG_YANOLJA.svg', alt: 'Yanolja' },
  { src: '/assets/images/LG_YEOSU.svg', alt: 'Yeosu' },
];

export default function LogoLine() {
  return (
    <section className='mt-[58px] w-full bg-white'>
      <div className='w-full bg-white'>
        <div className='w-full overflow-hidden py-8'>
          {/* 오른쪽으로 움직이는 상단 줄 */}
          <div className='group'>
            <div className='animate-scroll-right group-hover:pause flex'>
              {[...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
                <div
                  key={index}
                  className='mx-4 flex h-12 w-32 flex-shrink-0 items-center justify-center'
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={112}
                    height={40}
                    className='h-auto w-full object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 왼쪽으로 움직이는 하단 줄 */}
          <div className='group mt-8'>
            <div className='animate-scroll-left group-hover:pause flex'>
              {[...bottomLogos, ...bottomLogos, ...bottomLogos].map(
                (logo, index) => (
                  <div
                    key={index}
                    className='mx-4 flex h-12 w-32 flex-shrink-0 items-center justify-center'
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={112}
                      height={40}
                      className='h-auto w-full object-contain'
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
