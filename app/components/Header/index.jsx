import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
        <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/svg/menu.svg"
              alt="menu"
              className="lg:hidden w-5 h-5"
              width={120}
              height={40}
            />

            <Link href="/">
              <Image
                src="/assets/lws-logo-black.svg"
                alt="menu"
                className="h-10"
                width={120}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
          <Image
            src="/assets/svg/avatar.svg"
            alt="login acount avatar"
            className="hidden lg:block w-[18px] h-[18px]"
            width={300}
            height={300}
          />

          <Image
            src="/assets/svg/shopping-Cart.svg"
            alt="shopping cart icon"
            className="block w-5 h-5"
            width={300}
            height={300}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
