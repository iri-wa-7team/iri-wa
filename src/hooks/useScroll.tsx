'use client'

import React, { ReactNode, useContext, useRef, createContext } from "react";

type RefKeys = "intro" | "case" | "service" | "faq" | "inquiry";

const ScrollContext = createContext<{
  refs: { [key in RefKeys]: React.RefObject<HTMLDivElement> };
  scrollTo: (key: RefKeys) => void;
} | null>(null);

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const introRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const inquiryRef = useRef<HTMLDivElement>(null);

  const refs: { [keys in RefKeys]: React.RefObject<HTMLDivElement> } = {
    intro: introRef,
    case: caseRef,
    service: serviceRef,
    faq: faqRef,
    inquiry: inquiryRef,
  };

  const scrollTo = (key: RefKeys) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll은 ScrollProvider의 내부에서 사용되어야 합니다.");
  }

  const {refs, scrollTo} = context;

  return {refs, scrollTo};
};
