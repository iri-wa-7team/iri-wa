import backgroundBubble from '/public/assets/images/background_bubble.png';
import appstoreQr from '/public/assets/images/qr_appstore.png';
import goolePlayQr from '/public/assets/images/qr_playstore.png';
import Image from 'next/image';

export default function MainSection() {
  const videoId = '8bBoGxyY48E';
  return (
    <div className='mt-[58px] w-full bg-cardMint'>
      <section
        className='flex w-full justify-center xs:aspect-[404/227] xs:max-h-[404px]'
        style={{
          backgroundImage: `url(${backgroundBubble.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
        }}
      >
        <article className='m-auto mx-auto flex w-full max-w-[720px] flex-col items-center justify-between xs:aspect-[720/227] xs:flex-row'>
          <div className='flex flex-col gap-y-[50px] pt-[44px] xs:px-[50px]'>
            <div className='flex flex-col gap-y-3 text-center text-mainText xs:gap-5 xs:text-left'>
              <h2 className='font-medium tracking-[-0.8px] xs:text-[clamp(12px,2.5vw,1rem)]'>
                인플루언서 마케팅 NO.1
              </h2>

              <h1 className='text-2xl font-bold leading-tight xs:text-[clamp(16px,4vw,2rem)]'>
                여행 인플루언서
                <br />
                마케팅의 시작, 와이리
              </h1>
            </div>
            <ul className='hidden origin-top-left scale-[min(1,max(0.5,100vw/1440))] gap-3 xs:flex'>
              <li className='flex items-center justify-center rounded-[16px] bg-white p-[14px] shadow-qrBoxShadow'>
                <div className='flex w-[80px] flex-col gap-y-2'>
                  <Image
                    src={appstoreQr}
                    alt='app_store_qr'
                    width={90}
                    height={90}
                  />
                  <div className='flex items-center justify-center gap-x-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M20.1955 7.5432C20.0971 7.6048 17.7547 8.9048 17.7547 11.7872C17.8651 15.0744 20.7107 16.2272 20.7595 16.2272C20.7107 16.2888 20.3299 17.7976 19.2019 19.3792C18.3067 20.7416 17.3131 22.1152 15.8043 22.1152C14.3691 22.1152 13.8539 21.2072 12.1979 21.2072C10.4195 21.2072 9.91629 22.1152 8.55469 22.1152C7.04589 22.1152 5.97869 20.668 5.03469 19.3184C3.80829 17.552 2.76589 14.78 2.72909 12.1184C2.70429 10.708 2.97469 9.3216 3.66109 8.144C4.62989 6.5 6.35949 5.384 8.24829 5.3472C9.69549 5.2984 10.9835 6.3408 11.8667 6.3408C12.7131 6.3408 14.2955 5.3472 16.0859 5.3472C16.8587 5.348 18.9195 5.5808 20.1955 7.5432ZM11.7443 5.0656C11.4867 3.7776 12.1979 2.4896 12.8603 1.668C13.7067 0.6744 15.0435 0 16.1963 0C16.2699 1.288 15.8035 2.5512 14.9699 3.4712C14.2219 4.4648 12.9339 5.2128 11.7443 5.0656Z'
                        fill='#424242'
                      />
                    </svg>
                    <p className='text-[10px] font-medium text-mainText'>
                      APP Store
                    </p>
                  </div>
                </div>
              </li>
              <li className='flex items-center justify-center rounded-[16px] bg-white p-[14px] shadow-qrBoxShadow'>
                <div className='flex w-[80px] flex-col gap-y-2'>
                  <Image
                    src={goolePlayQr}
                    alt='google_play_qr'
                    width={138}
                    height={138}
                  />
                  <div className='flex items-center justify-center gap-x-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M12.94 12.0001L3.655 21.2851C3.55 21.0651 3.5 20.8251 3.5 20.5751V3.42509C3.5 3.17509 3.55 2.93509 3.655 2.71509L12.94 12.0001Z'
                        fill='#424242'
                      />
                      <path
                        d='M13.9999 13.0601L17.1049 16.1651L6.07992 22.1151C5.81992 22.2551 5.53492 22.3251 5.24992 22.3251C5.09492 22.3251 4.94492 22.3051 4.79492 22.2651L13.9999 13.0601Z'
                        fill='#424242'
                      />
                      <path
                        d='M13.9998 10.94L4.7998 1.74002C5.2248 1.62002 5.6798 1.67002 6.0798 1.88502L17.1048 7.83502L13.9998 10.94Z'
                        fill='#424242'
                      />
                      <path
                        d='M22.8946 12C22.8946 12.645 22.5396 13.235 21.9746 13.54L18.4846 15.425L15.0596 12L18.4846 8.57495L21.9746 10.46C22.5396 10.765 22.8946 11.355 22.8946 12Z'
                        fill='#424242'
                      />
                    </svg>
                    <p className='text-[10px] font-medium text-mainText'>
                      Google Play
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className='mb-[66px] flex gap-[10px] xs:hidden'>
              <button
                type='button'
                className='flex h-[42px] items-center justify-center gap-x-[8px] rounded-[56px] bg-primaryColor px-[24px] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
              >
                <svg
                  className='h-[18px] w-[18px]'
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
                className='flex h-[42px] items-center justify-center gap-x-[8px] rounded-[56px] bg-primaryColor px-[24px] font-semibold tracking-[-5%] text-[#fff] hover:bg-[#3ECCCC] hover:shadow-qrBoxShadow'
              >
                <svg
                  className='h-[18px] w-[18px]'
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
          <div className='w-full xs:max-w-[227px]'>
            <div
              className='relative aspect-[227/404] w-full'
              style={{
                transform: `scale(min(1, max(0.5, 100vw / 1440)))`,
                transformOrigin: 'top left',
              }}
            >
              <iframe
                className='absolute inset-0 h-full w-full'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&widgetid=1&loop=1&playlist=${videoId}`}
                title='YouTube Shorts player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              {/* 마우스 이벤트를 차단하는 오버레이 레이어 */}
              <div className='pointer-events-auto absolute inset-0' />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
