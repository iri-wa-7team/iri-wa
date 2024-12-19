import Link from 'next/link';

export default function Video() {
  return (
    <div className='flex w-full flex-col items-center justify-center border-gray-300 mb-10'>
      <div className='xs:m-h-[280px] flex-flex-col aspect-video items-center justify-center xs:max-h-[422px] xs:w-[500px] md:h-[422px] md:w-[750px]'>
        <iframe
          src='https://www.youtube.com/embed/ipYckn3E_lY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=ipYckn3E_lY'
          title='Wairi Introduction'
          allow='autoplay; gyroscope; mute;'
          allowFullScreen
          className='h-full w-full'
        ></iframe>
      </div>
      <div>
        <div className='my-2 text-center text-xs text-black'>▼</div>
        <div className='xs:w-[500px] md:w-[768px] py-1 hover:bg-gray-100'>
          <Link
            href={'https://www.youtube.com/watch?v=ipYckn3E_lY'}
            className='flex items-center justify-center'
          >
            <span className='text-xs font-semibold text-gray-600'>
              소개 영상 다시 보기
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
