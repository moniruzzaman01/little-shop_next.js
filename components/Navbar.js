import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/menu.svg"
            className="lg:hidden w-5 h-5"
            height={20}
            width={20}
            alt=""
          />
          <Link href="/">
            <Image src="/lws-logo-black.svg" height={120} width={120} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          height={20}
          width={20}
          alt="login acount avatar"
        />
        <Image
          src="/shopping-Cart.svg"
          className="block w-5 h-5"
          height={20}
          width={20}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}
