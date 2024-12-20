// src/app/advertiser/components/hotelreview/HotelReview.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import grandocean from '../../../../../public/assets/images/hotelreview_grandocean.svg';
import lotte from '../../../../../public/assets/images/hotelreview_lotte.svg';
import ibis from '../../../../../public/assets/images/hotelreview_ibis.svg';

interface Review {
  image: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}

export default function HotelReview() {
  const reviews: Review[] = [
    {
      image: lotte,
      title: '롯데 호텔 월드',
      subTitle: '신규 캠페인 홍보 진행',
      description:
        '"이번에 이용해보면서 정말 편리했어서, 도움 필요할 때마다 캠페인 등록하겠습니다! ㅎㅎ 매니저님 덕분에 이렇게 편하게 모집하네요"',
    },
    {
      image: ibis,
      title: '이비스 스타일 앰배서너',
      subTitle: '호텔 홍보 진행',
      description:
        '"좋텔 홍보에 정말 많은 도움이 됩니다. 신경써주셔서 너무 감사합니다."',
    },
    {
      image: grandocean,
      title: '그랜디오션',
      subTitle: '호텔 홍보 진행',
      description:
        '"무료로 이렇게 좋은 홍보를 할 수 있다는 너무 놀랍습니다. 다른 호텔도 홍보 많이 이뤄져 하겠습니다. 감사합니다!"',
    },
  ];

  return (
    <section
      id='hotelreview'
      className='w-full scroll-mt-[58px] bg-white pt-[58px]'
    >
      <div className='pt-16'>
        <div className='mx-auto w-full px-4 xs:w-[768px]'>
          {/* Header */}
          <div className='mb-10'>
            <p className='text-lg text-[#2EC8C8]'>Partners</p>
            <h2 className='text-[28px] font-bold text-gray-800'>
              400개의 업체와 마케팅을
              <br />
              함께하고 있습니다
            </h2>
          </div>

          {/* Cards Grid */}
          <div className='mb-16 grid grid-cols-1 gap-4 md:grid-cols-2'>
            {/* Left large card */}
            <div className='relative -mr-2 h-[500px] cursor-pointer overflow-hidden rounded-[20px]'>
              <Image
                src={reviews[0].image}
                alt={reviews[0].title}
                className='h-full w-full object-cover'
                priority
                fill
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60' />
              <div className='absolute bottom-0 left-0 p-6 text-white'>
                <h3 className='mb-2 text-2xl font-bold'>{reviews[0].title}</h3>
                <p className='mb-2 text-sm'>{reviews[0].subTitle}</p>
                <p className='text-sm opacity-70'>{reviews[0].description}</p>
              </div>
            </div>

            {/* Right column with two smaller cards */}
            <div className='-ml-2 grid grid-cols-1 gap-4'>
              {reviews.slice(1).map((review, index) => (
                <div
                  key={index}
                  className='relative h-[240px] cursor-pointer overflow-hidden rounded-[20px]'
                >
                  <Image
                    src={review.image}
                    alt={review.title}
                    className='h-full w-full object-cover'
                    fill
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60' />
                  <div className='absolute bottom-0 left-0 p-6 text-white'>
                    <h3 className='mb-2 text-xl font-bold'>{review.title}</h3>
                    <p className='mb-2 text-sm'>{review.subTitle}</p>
                    <p className='text-sm opacity-70'>{review.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className='mb-16 w-full'>
            <div className='relative aspect-[16/9] w-full overflow-hidden rounded-[20px]'>
              <iframe
                src='https://www.youtube.com/embed/mL5BoE_2Q5A'
                title='YouTube hotel review'
                className='absolute left-0 top-0 h-full w-full'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
