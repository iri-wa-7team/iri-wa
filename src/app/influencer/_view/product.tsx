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
export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='relative flex w-full justify-center py-[100px] pt-[140px]'>
      <div className='flex w-[1440px] flex-col items-center'>
        <h1 className='mb-[106px] text-5xl font-bold text-mainText'>
          숙박 및 상품을 <span className='text-primaryColor'>90% 할인가</span>에
          체험해보세요
        </h1>
        <ul className='flex flex-col gap-[43px]'>
          <li>
            <ul className='flex gap-9'>
              {campaignImages1.map((image) => (
                <li key={image.name}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={389} // 적절한 너비 지정
                  />
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className='flex gap-9'>
              {campaignImages2.map((image) => (
                <li key={image.name}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={389} // 적절한 너비 지정
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className='relative flex flex-col items-center justify-center'>
            <ul className='flex gap-9'>
              {campaignImage3.map((image) => (
                <li key={image.name} className='relative'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={389}
                    className='relative z-10' // 이미지를 앞으로 가져옵니다
                  />
                  {/* 각 이미지 위에 그라디언트 추가 */}
                  <div className='pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white from-50% to-transparent to-100%'></div>
                </li>
              ))}
            </ul>
            <button
              type='button'
              onClick={() => setIsModalOpen(true)}
              className='absolute bottom-24 z-30 w-[370px] rounded-full bg-subText px-[32px] py-[10px] text-[1.875rem] font-semibold text-white transition-all duration-300 ease-in-out hover:bg-subText/90 hover:shadow-xl active:shadow-md'
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
