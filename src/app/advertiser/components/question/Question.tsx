// src/app/advertiser/components/question/Question.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQ {
  id: number;
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: '정말 무료인가요?',
    answer:
      '네, 그렇습니다.\n와이리 기본 서비스의 경우 인플루언서에게 서비스 수수료를 받고 있습니다.\n따라서 파트너사가 부담될 금액은 없습니다.',
  },
  {
    id: 2,
    question: '아무나 와이리 인플루언서가 될 수 있나요?',
    answer: (
      <>
        아니요. 아무나 와이리 인플루언서가 될 수 있는 것은 아닙니다. 회원이
        등록한 채널에 대해 와이리 운영팀이 직접 검수하는 작업을 통해 와이리에서
        설정한 최소 승인 기준을 통과한 인플루언서만 활동할 수 있습니다.
        <br />
        <br />
        자세한 최소 승인 기준은 아래 링크를 통해 확인해주세요.
        <br />
        <Link
          href='https://www.wairi.co.kr/influencer/board/view/notice/108/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#2EC8C8] hover:underline'
        >
          www.wairi.co.kr/influencer/board/view/notice/108/
        </Link>
      </>
    ),
  },
  {
    id: 3,
    question: '인플루언서가 돈도 내고 체험하고 싶어 하나요?',
    answer:
      '네, 그렇습니다. 인플루언서들은 정기적인 콘텐츠 발제에 필요합니다. 와이리는 타 플랫폼과 달리 인플루언서가 날짜를 선택하여 신청 할수 있어 꾸준하게 신천진이 발생합니다. 파주의 한 숙박업체의 경우 한 달에 30건 이상의 신청이 발생합니다.',
  },
  {
    id: 4,
    question: '인플루언서에게 추가적인 요구를 해도 되나요?',
    answer:
      '네, 가능합니다. 캠페인 등록 시 상세페이지에 추가적인 요구사항을 미리 적어주시면 인플루언서가 해당 내용을 확인하고 캠페인 내용에 동의할 경우 신청이 발생합니다. 단, 신청 및 선정 이후 추가적인 요구사항은 반영되시 않을 수 있으며 오스틱 체크 난이도가 높아질 경우 신청이 저조할 수 있습니다.',
  },
  {
    id: 5,
    question: '최저가 보상제 (BRG)에 저촉되지는 않나요?',
    answer:
      '와이리 상품의 가격은 인플루언서에게 와이리가 받는 연결 수수료와 해당하여 호텔 측이 고객에게 직접을 판매하는 금액이 아니니 다. 호텔은 와이리에게 상품을 협찬해 주는 것으로 해당 패널티 규정에 영향되지 않습니다.',
  },
];

export default function Question() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className='mt-16 flex w-full justify-center bg-white'>
      <div className='w-full px-4 xs:w-[768px]'>
        {/* 헤더 */}
        <div className='mb-8'>
          <h3 className='text-lg text-[#2EC8C8]'>QUESTION</h3>
          <h2 className='text-2xl font-bold text-[#424242]'>자주 묻는 질문</h2>
        </div>

        {/* FAQ 목록 */}
        <div className='space-y-3'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className='overflow-hidden rounded-lg bg-[#F9F9F9] text-[#424242]'
            >
              <button
                className='flex w-full items-center justify-between px-6 py-4 text-left'
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className='font-medium'>Q. {faq.question}</span>
                <span
                  className={`text-blue-600 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  {openId === faq.id ? '∧' : '∨'}
                </span>
              </button>
              {openId === faq.id && (
                <div className='border-t border-gray-200 px-6 py-4'>
                  <div className='text-xs text-gray-600'>A. {faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
