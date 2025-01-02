'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import popupBubble from '../../../../public/assets/images/popup_bubble_mobile.png';
import xicon from '../../../../public/assets/images/x.svg';
import appstoreQr from '/public/assets/images/qr_appstore_popup.svg';
import goolePlayQr from '/public/assets/images/qr_playstore_popup.svg';
import phoneWairi from '/public/assets/images/phone_wairi_splash.png';
import { useState } from 'react';

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function CampaignModal({ onClose, isOpen }: ModalProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true); // 닫힘 애니메이션 시작
    setTimeout(onClose, 300); // 애니메이션 지속 시간 후 DOM에서 제거
  };

  return (
    <AnimatePresence>
      {isOpen && !isExiting && (
        <>
          <motion.div
            className='fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-black/50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            style={{ overflowY: 'hidden' }}
          >
            <motion.div
              className='w-[820px] rounded-[2rem] bg-cardMint px-6 pt-6'
              style={{
                backgroundImage: `url(${popupBubble.src})`,
                backgroundSize: 'cover',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='gap-y flex flex-col'>
                <div>
                  <div className='flex w-full justify-end'>
                    <Image
                      src={xicon}
                      alt='x-icon'
                      className='cursor-pointer'
                      onClick={handleClose}
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-[2.125rem] font-bold text-mainText'>
                      와이리 앱에서 더 많은 캠페인을 <br />
                      확인할 수 있어요!
                    </h1>
                    <div className='my-[14px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <path
                          d='M10 19L2.20577 5.5L17.7942 5.5L10 19Z'
                          fill='#2EC8C8'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center gap-y-[21px]'>
                    <ul className='flex gap-[21px]'>
                      <li className='flex items-center justify-center rounded-[24px] bg-white p-6 shadow-qrBoxShadow'>
                        <div className='flex flex-col gap-y-3'>
                          <Image src={appstoreQr} alt='app_store_qr' />
                          <div className='flex items-center justify-center gap-x-1'>
                            <p className='text-[15px] font-medium tracking-[-1px] text-mainText'>
                              APP Store
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className='flex items-center justify-center rounded-[24px] bg-white p-6 shadow-qrBoxShadow'>
                        <div className='flex flex-col gap-y-3'>
                          <Image src={goolePlayQr} alt='google_play_qr' />
                          <div className='flex items-center justify-center gap-x-1'>
                            <p className='text-[15px] font-medium tracking-[-1px] text-mainText'>
                              Google Play
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <p className='font-normal text-subText'>
                      휴대폰으로 QR코드를 스캔해서 설치해보세요
                    </p>
                  </div>
                  <div>
                    <Image src={phoneWairi} alt='phone' className='relative' />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
