import { ReactNode } from "react";

export type ButtonProps = {
    href?: string; 
    className?: string; 
    onClick?: () => void; 
    variant: "primary" | "medium" | "normal" | "light"; 
    children: ReactNode
  };
