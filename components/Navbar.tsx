import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <div className="w-full absolute z-10">
      <div className="mx-auto flex justify-between items-center max-w-[1440px] sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car-logo.svg"
            width={80}
            height={15}
            alt="logo"
            className="object-contain"
          />
        </Link>
        <CustomButton title="Login" style="bg-blue text-blue-700" />
      </div>
    </div>
  );
};

export default Navbar;
