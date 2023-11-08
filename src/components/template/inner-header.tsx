import Image from "next/image";
import Link from "next/link";

const InnerHeader = () => {
  return (
    <header className="mt-4 flex h-12 w-full items-center justify-between">
      <nav>
        <ul className="flex items-center gap-6 text-sm font-semibold">
          <li>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={48} height={48} />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-80">
              Men
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-80">
              Women
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-80">
              Kids
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-80">
              Customize
            </Link>
          </li>
          <li className="relative">
            <span className="absolute -right-5 -top-5 flex items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[0.5rem] text-zinc-50">
              20%
            </span>
            <Link href="#" className="hover:opacity-80">
              Sale
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-80">
              Shipping
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-4">
        <button>
          <Image src="/search-icon.svg" alt="search" width={20} height={20} />
        </button>
        <button>
          <Image src="/bag-icon.svg" alt="cart" width={24} height={20} />
        </button>
      </div>
    </header>
  );
};

export default InnerHeader;
