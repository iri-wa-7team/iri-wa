'use client';
import Image from 'next/image';

import campaignExample0 from '/public/assets/images/campaign_example_0.png';
import campaignExample1 from '/public/assets/images/campaign_example_1.png';
import campaignExample2 from '/public/assets/images/campaign_example_2.png';
import campaignExample3 from '/public/assets/images/campaign_example_3.png';
import campaignExample4 from '/public/assets/images/campaign_example_4.png';
import campaignExample5 from '/public/assets/images/campaign_example_5.png';
import campaignExample6 from '/public/assets/images/campaign_example_6.png';
import campaignExample7 from '/public/assets/images/campaign_example_7.png';
import campaignExample8 from '/public/assets/images/campaign_example_8.png';
import CampaignModal from '../components/CampaignModal';
import { useState } from 'react';

const campaignImages1 = [
  { name: 'campaignExample0', alt: '숙박 이미지', src: campaignExample0 },
  { name: 'campaignExample1', alt: '숙박 이미지', src: campaignExample1 },
  { name: 'campaignExample2', alt: '숙박 이미지', src: campaignExample2 },
];

const campaignImages2 = [
  { name: 'campaignExample3', alt: '숙박 이미지', src: campaignExample3 },
  { name: 'campaignExample4', alt: '숙박 이미지', src: campaignExample4 },
  { name: 'campaignExample5', alt: '숙박 이미지', src: campaignExample5 },
];

const campaignImage3 = [
  { name: 'campaignExample6', alt: '숙박 이미지', src: campaignExample6 },
  { name: 'campaignExample7', alt: '숙박 이미지', src: campaignExample7 },
  { name: 'campaignExample8', alt: '숙박 이미지', src: campaignExample8 },
];

const campaignImagesM1 = [
  { name: 'campaignExample0', alt: '숙박 이미지', src: campaignExample0 },
  { name: 'campaignExample1', alt: '숙박 이미지', src: campaignExample1 },
];

const campaignImagesM2 = [
  { name: 'campaignExample2', alt: '숙박 이미지', src: campaignExample2 },
  { name: 'campaignExample3', alt: '숙박 이미지', src: campaignExample3 },
];

const campaignImageM3 = [
  { name: 'campaignExample4', alt: '숙박 이미지', src: campaignExample4 },
  { name: 'campaignExample5', alt: '숙박 이미지', src: campaignExample5 },
];
const campaignImageM4 = [
  { name: 'campaignExample6', alt: '숙박 이미지', src: campaignExample6 },
  { name: 'campaignExample7', alt: '숙박 이미지', src: campaignExample7 },
];
export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='relative flex w-full justify-center py-[50px] pt-[35px]'>
      <div className='flex w-full max-w-[720px] flex-col items-center px-8'>
        <h1 className='mb-[35px] text-center text-[22px] font-bold text-mainText xs:text-left xs:text-[clamp(16px,4vw,24px)]'>
          숙박 및 상품을
          <span className='block xs:inline'>
            {' '}
            {/* br 대신 block/inline 사용 */}
            <span className='text-primaryColor'>90% 할인가</span>에 체험해보세요
          </span>
        </h1>
        {/* 데스크톱 버전 (500px 이상) */}
        <ul className='hidden w-full flex-col gap-[21.5px] min-[500px]:flex'>
          <li>
            <ul className='flex w-full gap-[2%]'>
              {campaignImages1.map((image) => (
                <li key={image.name} className='w-[32%]'>
                  <Image src={image.src} alt={image.alt} className='w-full' />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className='flex w-full gap-[2%]'>
              {campaignImages2.map((image) => (
                <li key={image.name} className='w-[32%]'>
                  <Image src={image.src} alt={image.alt} className='w-full' />
                </li>
              ))}
            </ul>
          </li>
          <li className='relative flex flex-col items-center justify-center'>
            <ul className='flex w-full gap-[2%]'>
              {campaignImage3.map((image) => (
                <li key={image.name} className='relative w-[32%]'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='relative z-10 w-full'
                  />
                  <div className='pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white from-50% to-transparent to-100%'></div>
                </li>
              ))}
            </ul>
            <button
              type='button'
              onClick={() => setIsModalOpen(true)}
              className='absolute bottom-12 z-30 w-[clamp(120px,25vw,185px)] rounded-full bg-subText px-[16px] py-[5px] text-[clamp(10px,2vw,0.9375rem)] font-semibold text-white transition-all duration-300 ease-in-out hover:bg-subText/90 hover:shadow-xl active:shadow-md'
            >
              더 많은 캠페인 보기
            </button>
          </li>
        </ul>

        {/* 모바일 버전 (500px 미만) */}
        <ul className='flex w-full flex-col gap-[21.5px] min-[500px]:hidden'>
          <li>
            <ul className='flex w-full gap-x-4'>
              {campaignImagesM1.map((image) => (
                <li key={image.name} className='w-[49%]'>
                  <Image src={image.src} alt={image.alt} className='w-full' />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className='flex w-full gap-x-4'>
              {campaignImagesM2.map((image) => (
                <li key={image.name} className='w-[49%]'>
                  <Image src={image.src} alt={image.alt} className='w-full' />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className='flex w-full gap-x-4'>
              {campaignImageM3.map((image) => (
                <li key={image.name} className='w-[49%]'>
                  <Image src={image.src} alt={image.alt} className='w-full' />
                </li>
              ))}
            </ul>
          </li>
          <li className='relative flex flex-col items-center justify-center'>
            <ul className='flex w-full gap-x-4'>
              {campaignImageM4.map((image) => (
                <li key={image.name} className='relative w-[49%]'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='relative z-10 w-full'
                  />
                  <div className='pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white from-50% to-transparent to-100%'></div>
                </li>
              ))}
            </ul>
            <button
              type='button'
              onClick={() => setIsModalOpen(true)}
              className='absolute bottom-12 z-30 w-[185px] rounded-full bg-subText px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:bg-subText/90 hover:shadow-xl active:shadow-md xs:w-[clamp(120px,25vw,185px)] xs:px-[16px] xs:py-[5px] xs:text-[clamp(10px,2vw,0.9375rem)]'
            >
              더 많은 캠페인 보기
            </button>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <CampaignModal onClose={closeModal} isOpen={isModalOpen} />
      )}
    </div>
  );
}
