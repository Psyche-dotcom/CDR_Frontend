import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}

const ButtonLink: React.FC<ButtonProps> = ({ href, children, style }) => {
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
};

export default ButtonLink;
