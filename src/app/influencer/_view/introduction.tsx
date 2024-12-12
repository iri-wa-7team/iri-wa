import InfluencerCard from '../components/InfluencerCard';
import naverIcon from '/public/assets/images/channel_icon_0.svg';
import instagramIcon from '/public/assets/images/channel_icon_1.svg';
import youtubeIcon from '/public/assets/images/channel_icon_2.svg';
import ticktokIcon from '/public/assets/images/channel_icon_3.svg';
import tistoryIcon from '/public/assets/images/channel_icon_4.svg';
import snsIcon from '/public/assets/images/channel_icon_5.svg';
import calendar from '/public/assets/images/introduction_calendar.svg';
import check from '/public/assets/images/introduction_check.svg';
import silver from '/public/assets/images/introduction_grade_silver.svg';
import gold from '/public/assets/images/introduction_grade_gold.svg';
import black from '/public/assets/images/introduction_grade_black.svg';
import Image from 'next/image';

const snsImages = [
  { name: 'naver', src: naverIcon, alt: '네이버' },
  { name: 'instagram', src: instagramIcon, alt: '인스타그램' },
  { name: 'youtube', src: youtubeIcon, alt: '유튜브' },
  { name: 'ticktok', src: ticktokIcon, alt: '틱톡' },
  { name: 'tistory', src: tistoryIcon, alt: '티스토리' },
  { name: 'sns', src: snsIcon, alt: 'sns' },
];

export default function Introduction() {
  return (
    <div className='mt-[90px] flex justify-center px-[100px]'>
      <div>
        <div className='mb-[56px] flex flex-col gap-y-3'>
          <h2 className='font-montserrat text-[1.75rem] tracking-[-0.0875rem] text-primaryColor'>
            INTRODUCTION
          </h2>
          <h1 className='text-[3rem] font-bold text-mainText'>
            와이리 인플루언서가 되어야하는 이유!
          </h1>
        </div>
        <div className='flex flex-col gap-y-6'>
          <InfluencerCard style='bg-cardYellow'>
            <div className='flex flex-col gap-[35px] pl-[80px] text-mainText'>
              <h1 className='pt-[86px] text-[3rem] font-bold'>
                SNS 채널만 가지고 있다면!
              </h1>
              <p className='text-[2.25rem] font-normal tracking-[-0.0875rem]'>
                와이리에서는 타 체험단 사이트와 비교하여 <br />
                가장 많은 SNS 종류를 승인해드리고 있어요!
              </p>
            </div>
            <div className='mb-[72px] mt-[57px] flex w-full items-center bg-gradient-to-r from-white from-0% to-transparent to-100% px-[80px] py-[43px]'>
              <ul className='flex w-full justify-between'>
                {snsImages.map((icon) => (
                  <li key={icon.name}>
                    <Image src={icon.src} alt={icon.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardGray'>
            <div className='relative flex h-[454px]'>
              <div className='flex flex-col gap-[25px] pl-[80px] text-mainText'>
                <h1 className='pt-[123px] text-[3rem] font-bold'>
                  원하는 날짜에 신청가능
                </h1>
                <p className='relative z-10 text-[2.25rem] font-normal tracking-[-0.0875rem]'>
                  정해진 날짜가 아닌, 원하는 시기에 캠페인을 신청할 수 있습니다.{' '}
                  <br />
                  이제 본인이 원하는 시기에 처함하세요!
                </p>
              </div>
              <Image
                src={calendar}
                alt='캘린더'
                className='absolute bottom-0 right-0 z-0'
              />
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardMint'>
            <div className='relative flex'>
              <div className='flex h-[454px] flex-col gap-[25px] pl-[80px] text-mainText'>
                <h1 className='pt-[99px] text-[3rem] font-bold'>
                  체험 선정 여부 96시간 이내
                </h1>
                <p className='relative z-10 text-[2.25rem] font-normal tracking-[-0.0875rem]'>
                  빠른 결과 안내를 통해 여행을 차질 없이 계획해보세요.
                </p>
              </div>
              <Image
                src={check}
                alt='체크'
                className='absolute bottom-0 right-0'
              />
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardGray'>
            <div className='relative flex'>
              <div className='flex h-[784px] flex-col gap-[25px] pl-[80px] text-mainText'>
                <h1 className='pt-[108px] text-[3rem] font-bold'>
                  와이리가 인증하는 영향력 <br />
                  등급을 받아보세요
                </h1>
                <div className='flex flex-col gap-[10px]'>
                  <p className='z-10 text-[2.25rem] font-normal tracking-[-0.0875rem]'>
                    와이리는 채널에 따라 예상 영향력에 따라서 등급을 부여하고
                    있습니다. <br />
                    와이리에서 인증하는 인플루언서가 되어보세요.
                  </p>
                  <span className='text-[1.75rem] font-light text-thirdText'>
                    *채널 승급은 매월말에 신청을 받고 있습니다.
                  </span>
                </div>
              </div>
              <div className='absolute bottom-0 left-[50%] translate-x-[-50%]'>
                <div className='flex items-end gap-[63.9px]'>
                  <Image src={silver} alt='실버' />
                  <Image src={gold} alt='골드' />
                  <Image src={black} alt='블랙' />
                </div>
              </div>
            </div>
          </InfluencerCard>
        </div>
      </div>
    </div>
  );
}
