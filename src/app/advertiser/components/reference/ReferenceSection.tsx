'use client';

import { useState } from 'react';
import ReferenceSlider from './ReferenceSlider';
import Image from 'next/image';
import ReButton from './ReButton';

// const bottomImage = referenceImages.map((image) => {
//   <Image />;
// });

export default function ReferenceSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const clickHandler = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className='mt-10 w-full bg-primaryColor font-pre text-white'>
      <div className='mx-auto flex w-[768px] justify-between'>
        <div className='relative left-14 flex flex-col'>
          {/* Title Section */}
          <div className='relative top-12 mb-6'>
            <h3 className='mb-2 text-sm uppercase tracking-wide'>reference</h3>
            <h2 className='text-3xl font-bold leading-snug tracking-tighter'>
              와이리 인플루언서 마케팅 <br />
              사례들을 확인해보세요
            </h2>
          </div>
          <div className='mt-8 flex h-[12rem] flex-col items-start justify-end gap-y-3'>
            <ReButton
              buttonIndex={Number(0)}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 평창 휘닉스 파크'
              subContent='총 61건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={1}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 씨티칼리지'
              subContent='총 24건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={2}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 이스트웨이브'
              subContent='총 1건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={3}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='더 많은 예시 보기'
            />
          </div>
          <div className='relative right-4 w-[390px] h-[270px]'>
            <Image
              src={`/assets/images/reference_menu_image_${currentIndex}.png`}
              width={400}
              height={0}
              alt={'bt-img'}
              className={`${currentIndex === 3 ? "hidden" : ""}`}
            />
          </div>
        </div>

        {/*이미지 슬라이더 섹션 */}

        <ReferenceSlider currentIndex={currentIndex} />
      </div>
    </section>
  );
}
