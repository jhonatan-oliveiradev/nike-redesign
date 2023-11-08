import Link from "next/link";
import DefaultContainer from "./default-container";

const Header = () => {
  return (
    <DefaultContainer>
      <header className="flex items-center justify-between py-2 text-sm">
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#" className="transition-all hover:text-cyan-700">
                Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all hover:text-cyan-700">
                Terms of Sale
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all hover:text-cyan-700">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all hover:text-cyan-700">
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <Link href="#" className="hover:underline">
            Login
          </Link>
          <span>/</span>
          <Link href="#" className="hover:underline">
            Register
          </Link>
        </div>
      </header>
    </DefaultContainer>
  );
};

export default Header;
