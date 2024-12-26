'use client';

import Image from 'next/image';
import service from '@assets/images/service.png';
import { IoIosArrowDown } from 'react-icons/io';

const plans = [
  {
    name: '무료',
    price: '직접진행',
    features: [false, false, false, false, false, false, false, false, false],
  },
  {
    name: '기본 멤버십',
    price: '월 39,000원',
    features: [true, true, true, true, true, false, false, false],
  },
  {
    name: '플러스 멤버십',
    price: '월 49,000원',
    features: [true, true, true, true, true, true, true, true, true],
  },
];

const plansList = [
  '신규 캠페인 생성',
  '신규 상품(객실) 등록',
  '캠페인 및 상품 관리',
  '재고 등록',
  '재고 관리',
  '포스팅 검수',
  '인플루언서 선정',
  '배포된 콘텐츠 내 사용된 사진 원본 전달',
  '캠페인 앱 내 상단 노출을 통한 인플루언서 모집 효과 증가',
]

export default function ServiceSection() {
  // const [selectedPlan, setSelectedPlan] = useState(0);
  return (
    <>
      <section className='mt-3 w-full bg-white pb-5 pt-10 font-montserrat'>
        <div className='relative mx-auto flex gap-x-20 xs:w-[768px] md:flex-col'>
          {/* Title Section */}
          <div className='relative left-14 top-0'>
            <h3 className='mb-2 text-sm uppercase tracking-wide text-teal-500'>
              Our Services
            </h3>
            <h2 className='text-2xl font-bold leading-snug tracking-tighter text-gray-700'>
              와이리를 이용하신다면!
            </h2>
          </div>
          <div className='mx-auto xs:my-[10%]'>
            <Image
              src={service}
              alt={'serviceImg'}
              width={1440}
              height={629}
              quality={100}
            />
          </div>
          <p className='text-center font-pre text-xl'>
            시간이 부족한 분들을 위해 <br /> 인플루언서 마케팅 전체 대행
            서비스도 운영하고 있어요!
          </p>
        </div>
      </section>
      <details>
        <summary className='mb-4 flex list-none justify-center pb-5 text-center font-pre text-sm text-gray-700 hover:cursor-pointer'>
          <span className='hover:bg-'>대행 서비스 보기</span>
          <IoIosArrowDown className='ml-1 flex justify-center pt-1' />
        </summary>

        <div className='flex w-full flex-col items-center justify-center bg-mainText py-10 font-pre'>
          <div className='text-center text-xl font-semibold text-white'>
            투자 가능한 시간에 따라 가격 플랜을 선택하고 <br />
            마케팅 결과만 받아보세요
          </div>
          <div className='mt-3 text-center text-[1.1rem] tracking-wide text-thirdText'>
            대부분 내용은 시스템상에서 직접 무료로 진행이 가능하오나, <br />
            <span>체크 표시된 부분은 와이리에서 대행을 진행해드립니다</span>
          </div>

          {/* 플랜 선택 버튼 (모바일 뷰) */}
          {/* <div className='mb-6 flex justify-center space-x-2 xs:hidden'>
            {plans.map((plan, index) => (
              <button
                key={index}
                className={`rounded-md px-4 py-2 text-sm`}
                onClick={() => setSelectedPlan(index)}
              >
                {plan.name}
              </button>
            ))}
          </div> */}

          {/* 표 영역 */}
          <div className='overflow-x-auto px-14 xs:w-[768px]'>
            <table className='w-full border-none text-sm'>
              <thead>
                <tr>
                  <th className='border-none p-3'></th>
                  {plans.map((plan, index) => (
                    <th key={index} className='border-none p-8'>
                      <div className='min-w-[6.5rem] rounded-lg bg-[#B1E7E8] py-2'>
                        <span className='text-subText'>{plan.name}</span>
                        <br />
                        <span className='text-xs text-[#748282]'>
                          {plan.price}
                        </span>
                      </div>
                      <div className='mx-3 mt-3 cursor-pointer rounded-2xl bg-black py-1 text-center text-white'>
                        이용하기
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plansList.map((feature, rowIndex, featureArray) => (
                  <tr
                    key={rowIndex}
                    className={
                      rowIndex === featureArray.length - 1 ? 'last-row' : ''
                    }
                  >
                    {/* 첫 번째 열 */}
                    <td
                      className={`w-48 p-3 text-xs text-white ${
                        rowIndex === featureArray.length - 1
                          ? ''
                          : 'border-b border-footerText'
                      }`}
                    >
                      {feature}
                    </td>

                    {/* 나머지 열 */}
                    {plans.map((plan, colIndex) => (
                      <td
                        key={colIndex}
                        className={`p-3 text-center ${
                          rowIndex === featureArray.length - 1
                            ? '' // 마지막 행에서는 테두리를 제거
                            : 'border-b border-footerText'
                        }`}
                      >
                        {plan.features[rowIndex] ? (
                          <div className='flex items-center justify-center'>
                            <Image
                              src={`/assets/images/check.png`}
                              alt='check'
                              width={20}
                              height={20}
                            />
                          </div>
                        ) : (
                          <div className='flex items-center justify-center'>
                            <Image
                              src={`/assets/images/x.png`}
                              alt='x'
                              width={20}
                              height={20}
                            />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
        </div>
      </details>
    </>
  );
}
