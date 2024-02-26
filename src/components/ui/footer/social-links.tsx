import { FacebookIcon, Mail, TwitterIcon } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: <TwitterIcon size={16} className="fill-white" />,
    href: "https://twitter.com",
  },
  {
    icon: <FacebookIcon size={16} className="fill-white" />,
    href: "https://facebook.com",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:info@example.com",
  },
];

const renderSocialLinks = socialLinks.map((link, index) => (
  <Link key={index} className="text-white" href={link.href}>
    {link.icon}
  </Link>
));

const SocialLinks = () => {
  return (
    <div>
      {renderSocialLinks && (
        <div className="mt-4 flex justify-end gap-4">{renderSocialLinks}</div>
      )}
    </div>
  );
};

export default SocialLinks;
