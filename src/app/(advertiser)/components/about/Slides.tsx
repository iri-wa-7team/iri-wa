'use client';

import { useState, useMemo } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slide, { SlideProps } from './Slide';

type SliderProp = {
  slides : SlideProps[]
}

const Slider = ({ slides } : SliderProp) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideElements = useMemo(
    () =>
      slides.map((slide) => (
        <div key={slide.id} className='h-[200px] w-full flex-shrink-0 px-4'>
            <Slide
              id={slide.id}
              title={slide.title}
              description={slide.description}
              imgUrl={slide.imgUrl}
            />
          </div>
      )),
    [slides]
  );

  return (
    <div className='relative w-full overflow-hidden'>
      {/* 슬라이드 영역 */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slideElements}
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className='absolute right-9 top-4 -translate-y-1/2 transform rounded-full bg-primaryColor p-2 text-white hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-gray-300'
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex === slides.length - 1}
        className='absolute right-0 top-4 -translate-y-1/2 transform rounded-full bg-primaryColor p-2 text-white hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-gray-300'
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
