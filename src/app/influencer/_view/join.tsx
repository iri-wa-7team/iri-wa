import Image from 'next/image';
import backgroundBubble from '/public/assets/images/background_bubble.png';
import phone from '/public/assets/images/phone_wairi_splash_short.png';

export default function Join() {
  return (
    <section
      className='flex h-[649px] w-full justify-center bg-cardMint'
      style={{
        backgroundImage: `url(${backgroundBubble.src})`,
        backgroundSize: 'auto',
        width: '100%',
        height: '649px',
      }}
    >
      <div className='flex justify-center gap-[130px] px-[144px]'>
        <div className='flex flex-col items-center justify-center gap-11 pl-[61px]'>
          <h1 className='text-[3rem] font-bold leading-[63.3px] tracking-[-5%] text-mainText'>
            와이리 가입하기
          </h1>
          <div className='flex gap-5'>
            <button
              type='button'
              className='flex h-[84px] w-[242px] items-center justify-center gap-[5px] rounded-[56px] bg-primaryColor text-[1.75rem] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
            >
              <svg
                width='31'
                height='30'
                viewBox='0 0 31 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_177_3539)'>
                  <path
                    d='M25.7441 9.429C25.6211 9.506 22.6931 11.131 22.6931 14.734C22.8311 18.843 26.3881 20.284 26.4491 20.284C26.3881 20.361 25.9121 22.247 24.5021 24.224C23.3831 25.927 22.1411 27.644 20.2551 27.644C18.4611 27.644 17.8171 26.509 15.7471 26.509C13.5241 26.509 12.8951 27.644 11.1931 27.644C9.30712 27.644 7.97312 25.835 6.79312 24.148C5.26012 21.94 3.95712 18.475 3.91112 15.148C3.88012 13.385 4.21812 11.652 5.07612 10.18C6.28712 8.125 8.44912 6.73 10.8101 6.684C12.6191 6.623 14.2291 7.926 15.3331 7.926C16.3911 7.926 18.3691 6.684 20.6071 6.684C21.5731 6.685 24.1491 6.976 25.7441 9.429ZM15.1801 6.332C14.8581 4.722 15.7471 3.112 16.5751 2.085C17.6331 0.843 19.3041 0 20.7451 0C20.8371 1.61 20.2541 3.189 19.2121 4.339C18.2771 5.581 16.6671 6.516 15.1801 6.332Z'
                    fill='#FFF'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_177_3539'>
                    <rect
                      width='30'
                      height='30'
                      fill='white'
                      transform='translate(0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
              APP Store
            </button>
            <button
              type='button'
              className='flex h-[84px] w-[242px] items-center justify-center gap-[5px] rounded-[56px] bg-primaryColor text-[1.75rem] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
            >
              <svg
                width='31'
                height='30'
                viewBox='0 0 31 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.675 15.0008L5.06875 26.607C4.9375 26.332 4.875 26.032 4.875 25.7195V4.28203C4.875 3.96953 4.9375 3.66953 5.06875 3.39453L16.675 15.0008Z'
                  fill='white'
                />
                <path
                  d='M18.0004 16.3252L21.8816 20.2064L8.10039 27.6439C7.77539 27.8189 7.41914 27.9064 7.06289 27.9064C6.86914 27.9064 6.68164 27.8814 6.49414 27.8314L18.0004 16.3252Z'
                  fill='white'
                />
                <path
                  d='M18 13.6754L6.5 2.17539C7.03125 2.02539 7.6 2.08789 8.1 2.35664L21.8812 9.79414L18 13.6754Z'
                  fill='white'
                />
                <path
                  d='M29.1189 15C29.1189 15.8062 28.6752 16.5437 27.9689 16.925L23.6064 19.2812L19.3252 15L23.6064 10.7188L27.9689 13.075C28.6752 13.4562 29.1189 14.1937 29.1189 15Z'
                  fill='white'
                />
              </svg>
              Google Play
            </button>
          </div>
        </div>
        <Image src={phone} alt={'phone-image'} className='w-full pt-[110px]' />
      </div>
    </section>
  );
}

{
  /* <div className='flex flex-col items-center justify-center gap-[44px]'>
<h1 className='text-[3rem] font-bold text-mainText'>
  와이리 가입하기
</h1>
<div className='flex gap-5'>
  <button
    type='button'
    className='flex h-[84px] w-[242px] items-center justify-center gap-[5px] rounded-[56px] bg-primaryColor text-[1.75rem] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
  >
    <svg
      width='31'
      height='30'
      viewBox='0 0 31 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_177_3539)'>
        <path
          d='M25.7441 9.429C25.6211 9.506 22.6931 11.131 22.6931 14.734C22.8311 18.843 26.3881 20.284 26.4491 20.284C26.3881 20.361 25.9121 22.247 24.5021 24.224C23.3831 25.927 22.1411 27.644 20.2551 27.644C18.4611 27.644 17.8171 26.509 15.7471 26.509C13.5241 26.509 12.8951 27.644 11.1931 27.644C9.30712 27.644 7.97312 25.835 6.79312 24.148C5.26012 21.94 3.95712 18.475 3.91112 15.148C3.88012 13.385 4.21812 11.652 5.07612 10.18C6.28712 8.125 8.44912 6.73 10.8101 6.684C12.6191 6.623 14.2291 7.926 15.3331 7.926C16.3911 7.926 18.3691 6.684 20.6071 6.684C21.5731 6.685 24.1491 6.976 25.7441 9.429ZM15.1801 6.332C14.8581 4.722 15.7471 3.112 16.5751 2.085C17.6331 0.843 19.3041 0 20.7451 0C20.8371 1.61 20.2541 3.189 19.2121 4.339C18.2771 5.581 16.6671 6.516 15.1801 6.332Z'
          fill='#FFF'
        />
      </g>
      <defs>
        <clipPath id='clip0_177_3539'>
          <rect
            width='30'
            height='30'
            fill='white'
            transform='translate(0.5)'
          />
        </clipPath>
      </defs>
    </svg>
    APP Store
  </button>
  <button
    type='button'
    className='flex h-[84px] w-[242px] items-center justify-center gap-[5px] rounded-[56px] bg-primaryColor text-[1.75rem] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
  >
    <svg
      width='31'
      height='30'
      viewBox='0 0 31 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.675 15.0008L5.06875 26.607C4.9375 26.332 4.875 26.032 4.875 25.7195V4.28203C4.875 3.96953 4.9375 3.66953 5.06875 3.39453L16.675 15.0008Z'
        fill='white'
      />
      <path
        d='M18.0004 16.3252L21.8816 20.2064L8.10039 27.6439C7.77539 27.8189 7.41914 27.9064 7.06289 27.9064C6.86914 27.9064 6.68164 27.8814 6.49414 27.8314L18.0004 16.3252Z'
        fill='white'
      />
      <path
        d='M18 13.6754L6.5 2.17539C7.03125 2.02539 7.6 2.08789 8.1 2.35664L21.8812 9.79414L18 13.6754Z'
        fill='white'
      />
      <path
        d='M29.1189 15C29.1189 15.8062 28.6752 16.5437 27.9689 16.925L23.6064 19.2812L19.3252 15L23.6064 10.7188L27.9689 13.075C28.6752 13.4562 29.1189 14.1937 29.1189 15Z'
        fill='white'
      />
    </svg>
    GOOGLE Play
  </button>
</div>
</div>

<Image src={phone} alt={'phone'} className='pt-[110px]' /> */
}
