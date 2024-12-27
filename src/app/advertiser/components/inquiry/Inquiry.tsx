// src/app/advertiser/components/inquiry/Inquiry.tsx
'use client';

import { useScroll } from '@/hooks/useScroll';
import { useState } from 'react';

interface InquiryData {
  company: string;
  name: string;
  phone: string;
  email: string;
  inquiryType: string[];
  agreeToTerms: boolean;
}

export default function Inquiry() {
  const {refs} = useScroll()
  const [formData, setFormData] = useState<InquiryData>({
    company: '',
    name: '',
    phone: '',
    email: '',
    inquiryType: [],
    agreeToTerms: false,
  });

  const inquiryTypes = [
    '네이버 검색',
    '인스타그램 광고',
    '후기',
    '지인 추천',
    '와이리 직원의 소개',
    '기타',
  ];

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: prev.inquiryType.includes(value)
        ? prev.inquiryType.filter((type) => type !== value)
        : [...prev.inquiryType, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log(formData);
  };

  return (
    <section className='mt-16 scroll-mt-[58px] w-full bg-[#424242] py-16' ref={refs['inquiry']}>
      <div className='mx-auto w-full px-4 xs:w-[768px]'>
        <form onSubmit={handleSubmit}>
          {/* 제목 */}
          <h2 className='mb-4 text-center text-2xl font-bold text-white'>
            문의하기
          </h2>
          <p className='mb-12 text-center text-[#bcbcbc]'>
            저희 와이리를 찾아주셔서 감사합니다. 연락처와 함께 어떤 항목
            작성해주시면,
            <br />
            담당자 확인 후 상담 도와드리도록 하겠습니다.
          </p>

          {/* 입력 필드 */}
          <div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-white'>회사명</label>
              <input
                type='text'
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                className='w-full rounded-lg bg-[#535353] p-3 text-white'
                placeholder='와이리'
              />
            </div>
            <div>
              <label className='mb-2 block text-white'>담당자명</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className='w-full rounded-lg bg-[#535353] p-3 text-white'
                placeholder='송주희'
              />
            </div>
            <div>
              <label className='mb-2 block text-white'>담당자 연락처</label>
              <input
                type='tel'
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className='w-full rounded-lg bg-[#535353] p-3 text-white'
                placeholder='01012345678'
              />
            </div>
            <div>
              <label className='mb-2 block text-white'>담당자 이메일</label>
              <input
                type='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className='w-full rounded-lg bg-[#535353] p-3 text-white'
                placeholder='juheewairi@wairi.com'
              />
            </div>
          </div>

          {/* 체크박스 그룹 */}
          <div className='mb-8'>
            <p className='mb-4 text-center text-white'>
              와이리를 어떻게 알게 되셨나요?
            </p>
            <div className='flex flex-nowrap items-center space-x-6'>
              {inquiryTypes.map((type) => (
                <label
                  key={type}
                  className='flex items-center space-x-2 whitespace-nowrap'
                >
                  <div className='relative h-5 w-5'>
                    <input
                      type='checkbox'
                      checked={formData.inquiryType.includes(type)}
                      onChange={() => handleCheckboxChange(type)}
                      className='peer h-5 w-5 appearance-none rounded border-none bg-[#535353] checked:bg-white'
                    />
                    {formData.inquiryType.includes(type) && (
                      <>
                        <span className='absolute inset-0 flex items-center justify-center text-black'>
                          ✓
                        </span>
                      </>
                    )}
                  </div>
                  <span className='text-white'>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 약관 동의 */}
          <div className='mb-8 flex items-center justify-center'>
            <label className='flex cursor-pointer items-center space-x-2'>
              <div className='relative h-5 w-5'>
                <input
                  type='checkbox'
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeToTerms: e.target.checked,
                    }))
                  }
                  className='peer h-5 w-5 appearance-none rounded-full border-none bg-[#535353] transition-colors duration-200'
                />
                {formData.agreeToTerms && (
                  <>
                    <div className='absolute inset-0 rounded-full bg-[#2EC8C8]' />
                    <div className='absolute inset-0 flex items-center justify-center text-sm text-white'>
                      ✓
                    </div>
                  </>
                )}
              </div>
              <span
                className={`text-sm ${
                  formData.agreeToTerms ? 'text-white' : 'text-[#9E9E9E]'
                }`}
              >
                개인 정보 수집 및 이용에 동의합니다.
              </span>
            </label>
          </div>

          {/* 제출 버튼 */}
          <button
            type='submit'
            disabled={
              !formData.company ||
              !formData.name ||
              !formData.phone ||
              !formData.email ||
              !formData.inquiryType ||
              !formData.agreeToTerms
            }
            className={`w-full rounded-full py-4 text-white transition-colors duration-200 ${
              !formData.company ||
              !formData.name ||
              !formData.phone ||
              !formData.email ||
              !formData.inquiryType ||
              !formData.agreeToTerms
                ? 'cursor-not-allowed bg-[#535353]'
                : 'cursor-pointer bg-black'
            }`}
          >
            문의하기
          </button>
        </form>
      </div>
    </section>
  );
}
