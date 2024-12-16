import backgroundBubble from '/public/assets/images/background_bubble.png';
import appstoreQr from '/public/assets/images/qr_appstore.png';
import goolePlayQr from '/public/assets/images/qr_playstore.png';
import Image from 'next/image';

export default function MainSection() {
  return (
    <div className='mt-[58px] w-full bg-cardMint'>
      <section
        className='flex aspect-[404/227] max-h-[404px] w-full justify-center'
        style={{
          backgroundImage: `url(${backgroundBubble.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
        }}
      >
        <article className='m-auto mx-auto flex aspect-[720/227] w-full max-w-[720px] items-center justify-between'>
          <div className='flex flex-col gap-y-[50px] px-[50px]'>
            <div className='flex flex-col gap-5 text-mainText'>
              <h2 className='text-[clamp(12px,2.5vw,1rem)] font-medium tracking-[-0.8px]'>
                인플루언서 마케팅 NO.1
              </h2>

              <h1 className='text-[clamp(16px,4vw,2rem)] font-bold leading-tight'>
                여행 인플루언서
                <br />
                마케팅의 시작, 와이리
              </h1>
            </div>
            <ul className='flex origin-top-left scale-[min(1,max(0.5,100vw/1440))] gap-3'>
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
          </div>
          <div
            className='aspect-[227/404] w-full max-w-[227px] bg-cardYellow'
            style={{
              transform: `scale(min(1, max(0.5, 100vw / 1440)))`,
              transformOrigin: 'top left',
            }}
          ></div>
        </article>
      </section>
    </div>
  );
}
