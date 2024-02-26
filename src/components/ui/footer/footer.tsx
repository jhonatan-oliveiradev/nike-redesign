import FooterLinks from "./footer-links";
import DefaultContainer from "../general/default-container";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="flex h-[340px] w-full items-center bg-black">
      <DefaultContainer>
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-16">
            <FooterLinks
              title="MENU"
              links={[
                { label: "FIND A STORE", href: "#" },
                { label: "BECOME A MEMBER", href: "#" },
                { label: "SIGN UP FOR EMAIL", href: "#" },
                { label: "STUDENT DISCOUNTS", href: "#" },
                { label: "SEND US FEEDBACK", href: "#" },
              ]}
            />
            <FooterLinks
              title="HELPDESK"
              links={[
                { label: "ORDER STATUS", href: "#" },
                { label: "DELIVERY", href: "#" },
                { label: "RETURNS", href: "#" },
                { label: "PAYMENT OPTIONS", href: "#" },
                { label: "CONTACT US", href: "#" },
              ]}
            />
            <FooterLinks
              title="ABOUT NIKE"
              links={[
                { label: "NEWS", href: "#" },
                { label: "CAREERS", href: "#" },
                { label: "INVESTORS", href: "#" },
                { label: "SUSTAINABILITY", href: "#" },
              ]}
            />
          </div>
          <div className="flex max-w-[260px] flex-col items-end justify-between space-y-6 text-sm">
            <p className="flex flex-col text-right text-white">
              <span className="font-semibold">Primary Address</span> One
              Bowerman Drive Beaverton, OR 97005-6453 USA
            </p>
            <SocialLinks />
            <p className="text-right text-white">
              © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </DefaultContainer>
    </footer>
  );
};

export default Footer;
