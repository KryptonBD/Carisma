"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
}

export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <figure className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Arrow Left"
            fill
            className="object-contain"
          />
        </figure>
      )}
    </button>
  );
};
