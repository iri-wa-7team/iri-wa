import Image from 'next/image';
import reviewBg from '/public/assets/images/review_img_influencer.png';
import quote from '/public/assets/images/quote.svg';

function Review() {
  return (
    <section className='flex w-full justify-center'>
      <div className='mx-[6.9%] flex max-w-[640px] flex-col pb-[60px] pt-[45px]'>
        {/* title */}
        <div className='mb-7'>
          <span className='mb-1.5 text-[0.875rem] font-normal text-primaryColor'>
            REVIEW
          </span>
          <h3 className='text-[1.5rem] font-bold text-mainText'>
            400개의 업체와 마케팅을 <br /> 함께하고 있습니다
          </h3>
        </div>
        {/* content */}
        <div className='grid h-[358px] w-full grid-cols-[minmax(59.35%,368px)_minmax(42.5%,240px)] grid-rows-2 gap-[2%]'>
          {/* left */}
          <div
            className='relative row-start-1 row-end-3 rounded-[16px]'
            style={{
              backgroundImage: `url(${reviewBg.src})`,
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
            }}
          >
            <div className='absolute bottom-7 left-0 flex flex-col gap-2 px-7'>
              <Image src={quote} alt={quote} className='h-[16px] w-[20px]' />
              <span className='text-[1.25rem] font-bold leading-[1.875rem] tracking-[-2.5%] text-[#fff]'>
                네이버 블로거 B님
              </span>
              <p className='break-keep text-[0.875rem] font-normal leading-[1.3125rem] tracking-[-2.5%] text-[#fff]'>
                처음에는 인플루언서 협업 제안을 받았을 때, 이 가격에 정말 이용이
                가능한지 반신반의 했는데, 정말 모든 상품을 90% 할인 가격에 내가
                원하는 날 이용할 수 있는 곳이었어요.
              </p>
            </div>
          </div>
          {/* right - 1 */}
          <div className='relative rounded-[16px] bg-interviewFooterBox'>
            <div className='absolute bottom-0 flex flex-col gap-2 px-4 pb-4'>
              <Image src={quote} alt={quote} className='h-[16px] w-[20px]' />
              <span className='text-[0.875rem] font-bold leading-[1.3125rem] tracking-[-2.5%] text-[#fff]'>
                인스타그래머 J님
              </span>
              <p className='break-keep text-[0.875rem] font-normal leading-[1.3125rem] tracking-[-2.5%] text-[#fff]'>
                위치가 좋은 숙소가 많아 너무 좋습니다. 저 같이 여행 피드를
                제작하는 사람들한테는 너무 좋은 플랫폼이에요 ㅠㅠ
              </p>
            </div>
          </div>
          {/* right - 2 */}
          <div className='relative rounded-[16px] bg-interviewFooterBox'>
            <div className='absolute bottom-0 flex flex-col gap-1 px-4 pb-4'>
              <Image src={quote} alt={quote} className='h-[16px] w-[20px]' />
              <span className='text-[0.875rem] font-bold leading-[1.3125rem] tracking-[-5%] text-[#fff]'>
                유튜버 B님
              </span>
              <p className='break-keep text-[0.875rem] font-normal leading-[1.3125rem] tracking-[-5%] text-[#fff]'>
                70만원 럭셔리 호텔 2박 3일 패키지 상품을 7만원에 친구랑 같이
                갔다 왔어요. 제가 원하는 시기에 신청할 수 있어 여행 겸 콘텐츠
                제작 겸 떠나기에 너무 좋아요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
