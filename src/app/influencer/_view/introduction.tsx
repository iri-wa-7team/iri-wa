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
    <div className='mt-[45px] flex justify-center px-[clamp(20px,6vw,50px)]'>
      <div>
        <div className='mb-[28px] flex flex-col gap-y-1.5'>
          <h2 className='font-montserrat text-primaryColor'>INTRODUCTION</h2>
          <h1 className='text-[clamp(16px,4vw,24px)] font-bold text-mainText'>
            와이리 인플루언서가 되어야하는 이유!
          </h1>
        </div>
        <div className='flex flex-col gap-y-3'>
          <InfluencerCard style='bg-cardYellow'>
            <div className='flex flex-col gap-[17.5px] pl-[clamp(20px,5vw,40px)] text-mainText'>
              <h1 className='pt-[43px] text-[clamp(16px,4vw,24px)] font-bold'>
                SNS 채널만 가지고 있다면!
              </h1>
              <p className='text-[clamp(14px,3vw,18px)] font-normal'>
                와이리에서는 타 체험단 사이트와 비교하여 <br />
                가장 많은 SNS 종류를 승인해드리고 있어요!
              </p>
            </div>
            <div className='mb-[36px] mt-[28.5px] flex w-full items-center bg-gradient-to-r from-white from-0% to-transparent to-100% px-[clamp(20px,5vw,40px)] py-[21.5px]'>
              <ul className='flex w-full justify-between'>
                {snsImages.map((icon) => (
                  <li key={icon.name} className='w-[clamp(24px,4vw,36.5px)]'>
                    <Image src={icon.src} alt={icon.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardGray'>
            <div className='relative flex h-[227px]'>
              <div className='flex flex-col gap-[12.5px] pl-[clamp(20px,5vw,40px)] text-mainText'>
                <h1 className='pt-[61.5px] text-[clamp(16px,4vw,24px)] font-bold'>
                  원하는 날짜에 신청가능
                </h1>
                <p className='relative z-10 text-[clamp(14px,3vw,18px)] font-normal tracking-[-0.04375rem]'>
                  정해진 날짜가 아닌, 원하는 시기에 캠페인을 신청할 수 있습니다.{' '}
                  <br />
                  이제 본인이 원하는 시기에 처함하세요!
                </p>
              </div>
              <Image
                src={calendar}
                alt='캘린더'
                className='absolute bottom-0 right-0 z-0 w-[clamp(150px,30vw,227px)]'
                width={227}
                height={227}
              />
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardMint'>
            <div className='relative flex'>
              <div className='flex h-[227px] flex-col gap-[17.5px] pl-[clamp(20px,5vw,40px)] text-mainText'>
                <h1 className='pt-[49.5px] text-[clamp(16px,4vw,24px)] font-bold'>
                  체험 선정 여부 96시간 이내
                </h1>
                <p className='relative z-10 text-[clamp(14px,3vw,18px)] font-normal tracking-[-0.04375rem]'>
                  빠른 결과 안내를 통해 여행을 차질 없이 계획해보세요.
                </p>
              </div>
              <Image
                src={check}
                alt='체크'
                className='absolute bottom-0 right-0 w-[clamp(150px,30vw,227px)]'
              />
            </div>
          </InfluencerCard>
          <InfluencerCard style='bg-cardGray'>
            <div className='relative'>
              <div className='flex h-[392px] flex-col gap-[12.5px] pl-[clamp(20px,5vw,40px)] text-mainText'>
                <h1 className='pt-[54px] text-[clamp(16px,4vw,24px)] font-bold'>
                  와이리가 인증하는 영향력 <br />
                  등급을 받아보세요
                </h1>
                <div className='flex flex-col gap-[5px]'>
                  <p className='z-10 text-[clamp(14px,3vw,18px)] font-normal tracking-[-0.0875rem]'>
                    와이리는 채널에 따라 예상 영향력에 따라서 등급을 부여하고
                    있습니다. <br />
                    와이리에서 인증하는 인플루언서가 되어보세요.
                  </p>
                  <span className='text-[clamp(10px,2.5vw,12px)] font-light text-thirdText'>
                    *채널 승급은 매월말에 신청을 받고 있습니다.
                  </span>
                </div>
              </div>
              <div className='absolute bottom-0 left-[50%] translate-x-[-75%]'>
                <div className='flex items-end gap-[31.9px]'>
                  <Image
                    src={silver}
                    alt='실버'
                    className='w-[clamp(80px,10vw,93px)]'
                  />
                  <Image
                    src={gold}
                    alt='골드'
                    className='w-[clamp(80px,10vw,93px)]'
                  />
                  <Image
                    src={black}
                    alt='블랙'
                    className='w-[clamp(80px,10vw,93px)]'
                  />
                </div>
              </div>
            </div>
          </InfluencerCard>
        </div>
      </div>
    </div>
  );
}
