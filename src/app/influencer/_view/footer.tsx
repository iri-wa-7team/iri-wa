import Image from 'next/image';
import logo from '/public/assets/images/wairi_logo.svg';

function Footer() {
  return (
    <section className='flex h-[328px] w-full justify-center bg-interviewFooterBox'>
      <div className='flex gap-[133px] px-[100px] pb-[56px] pt-[42px]'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-6'>
            <Image
              src={logo}
              alt={'wairi_logo'}
              className='h-[62px] w-[135px]'
            />
            <span className='text-[1.75rem]'>&#40;주&#41;와이리</span>
          </div>
          <div className='flex flex-col text-[1.5625rem] leading-[40px]'>
            <span>대표자 : 김범석</span>
            <span>
              사업자등록번호 : 441-86-02504 | 통신판매업신고 :
              2021-서울영등포-2197
            </span>
            <span>주소 : 서울시 동작구 상도로 55길 6, 테크스테이션 408호</span>
            <span>
              이메일 : wairi_sales@naver.com | 대표전화 : 070-8098-7127
            </span>
          </div>
        </div>
        <div className='flex flex-col self-end'>
          <span className='mb-[4.98px] text-[1.75rem] font-medium leading-[33.41px]'>
            와이리 고객센터
          </span>
          <span className='mb-3 text-[2.1875rem] font-bold leading-[41.77px]'>
            070-8098-7127
          </span>
          <span className='text-[1.75rem] font-medium leading-[24.91px]'>
            운영시간 평일 10:00 ~ 18:00
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
