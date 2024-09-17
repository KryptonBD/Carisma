import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            width={188}
            height={18}
            alt="Carisma Logo"
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-red rounded-full bg-white min-w-32"
        />
      </nav>
    </header>
  );
};
