'use client'

import Image from 'next/image';
import listIcon from '@assets/images/list.svg';
import { useScroll } from '@/hooks/useScroll';

export default function DropDown() {
  const {scrollTo} = useScroll();

  return (
    <>
      <details className='group xs:hidden'>
        <summary className='relative flex h-6 w-6 cursor-pointer list-none items-center justify-center text-teal-500 transition-all duration-300 ease-in-out'>
          <div className='block group-open:hidden xs:hidden'>
            <Image
              src={listIcon}
              width={24}
              height={24}
              alt='listIcon'
              className='object-contain'
              style={{ minWidth: '18px', minHeight: '18px' }}
            />
          </div>
          {/* 기본 햄버거 아이콘 */}
          <span className='hidden group-open:contents'>X</span>{' '}
          {/* 열렸을 때 'X' 표시 */}
        </summary>

        {/* 드롭다운 메뉴 항목들 */}
        <div className='absolute left-0 top-full z-10 w-full border-t bg-white px-4 shadow-md'>
          <ul className='text-center text-sm text-subText'>
            <li className='p-2 hover:bg-gray-200' onClick={()=>{scrollTo("intro")}}>
              <div>서비스 소개</div>
            </li>
            <li className='p-2 hover:bg-gray-200'>
              <div>진행 사례</div>
            </li>
            <li className='p-2 hover:bg-gray-200'>
              <div>서비스 종류</div>
            </li>
            <li className='p-2 hover:bg-gray-200'>
              <div>FAQ</div>
            </li>
          </ul>
        </div>
      </details>
    </>
  );
}
