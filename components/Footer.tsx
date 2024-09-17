import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <article className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <section className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.png" alt="Carisma logo" width={118} height={18} />
          <p className="text-base text-gray-700">
            Carisma {new Date().getFullYear()}
            <br />
            All Rights Left
            <span className="inline-block rotate-180" aria-label="Copyleft">
              &copy;
            </span>
          </p>
        </section>

        <section className="footer__links">
          {footerLinks.map((link) => (
            <dl key={link.title} className="footer__link">
              <dt className="font-bold">{link.title}</dt>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </dl>
          ))}
        </section>
      </article>
      <section className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>{new Date().getFullYear()} Carisma. All rights Left</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </section>
    </footer>
  );
};
