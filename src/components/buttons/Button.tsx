import Link from "next/link";
import classNames from "classnames";
import { buttons } from "./buttonStyle";
import type{ ButtonProps } from "@/types/types";

export default function Button({
  href,
  className: additionalStyles,
  onClick,
  variant,
  children,
}: ButtonProps) {

  const styles = classNames(
    "transition whitespace-nowrap ", //버튼 기본 설정
    buttons[variant],
    additionalStyles
  );
  
  return href ? (
    <Link className={styles} href={href}>
      <div className="flex justify-center items-center">{children}</div>
    </Link>
  ) : (
    <button className={styles} onClick={onClick}>
      <div className="flex justify-center items-center">{children}</div>
    </button>
  );
}
