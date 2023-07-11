import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="flex flex-col text-black mt-5 border-t border-gray-200">
      <div className="flex flex-wrap justify-between sm:px-16 px-6 py-10 gap-5">
        <div className="flex flex-col justify-start items-start gap-4">
          <Image
            src="/car-logo.svg"
            width={60}
            height={15}
            alt="logo"
            className="object-contain"
          />
          <p className="text-sm text-gray-700">
            Car Rental App 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex justify-end flex-wrap gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[80px]"
            >
              <h1 className="text-sm font-bold">{link.title}</h1>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
