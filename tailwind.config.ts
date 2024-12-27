// tailwind.config.ts
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2EC8C8', //로고 메인컬러
        secondColor: '#E0F5F6', // 버튼
        mainText: '#424242', // 메인텍스트
        subText: '#616161', // 서브 및 푸터 상단 테두리
        thirdText: '#BDBDBD', // 상품 가격, 문의 텍스트
        productText: '#FF5454', // 상품 할인
        cardYellow: '#FFF9ED', // 회원,파트너에서 사용
        bannerCardGray: '#F9F9F9', // 회원,파트너에서 사용
        cardMint: '#C3F6F6', // 회원에서 사용
        cardGray: '#F5F5F5', //
        interviewFooterBox: '#4D4D4D', // 회원, 푸터에서 사용
        questionBox: '#F5F5F5', //회원,파트너에서 사용
        questionBoxBorder: '#EEEEEE', // 회원,파트너에서 사용
        footerText: '#9E9E9E', // 푸터 텍스트
        chatBot: '#367BA2', // 챗봇
        prevButton: '#D9D9D9', // 파트너에서 사용
      },
      boxShadow: {
        qrBoxShadow: '0px 4px 13.2px 0px #5AA9A980',
        referenceBoxShadow:
          'box-shadow: 0px -12px 32.8px 0px rgba(0, 0, 0, 0.14)',
      },
      fontFamily: {
        pre: ['var(--font-pretendard)'],
        montserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.75rem' }],
        xxxs: ['0.5rem', { lineHeight: '0.5rem' }],
      },
      borderWidth: {
        3: '3px',
      },
      screens: {
        xs: '500px', // 미디어 쿼리 xs: 500px 추가
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      },
      animation: {
        'scroll-right': 'scroll-right 15s linear infinite', // 속도 증가
        'scroll-left': 'scroll-left 15s linear infinite', // 속도 증가
        'scroll-down' : 'scroll-down 25s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
    );
    }),
  ],
} satisfies Config;
