import Link from "next/link";

type FooterLinksProps = {
  title: string;
  links: { label: string; href?: string }[];
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col items-start justify-start py-16 text-left">
      <h2 className="mb-5 font-semibold uppercase text-white">{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-3">
            <Link
              className="
              text-white
              transition-colors
              duration-300
              ease-in-out
              hover:text-gray-300"
              href={link.href || ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
