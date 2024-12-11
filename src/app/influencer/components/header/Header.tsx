'use client';
import Image from 'next/image';

function Header() {
  return (
    <header className='h-[102px] w-full bg-[#fff] pl-10 pr-10 shadow-sm'>
      <div className='flex h-full items-center justify-between'>
        <div>
          <Image
            src='/assets/images/wairi_logo.svg'
            alt='logo'
            width={182}
            height={62}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
