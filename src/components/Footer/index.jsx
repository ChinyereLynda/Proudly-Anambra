import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      title: "About Proudly Anambra",
      links: ["Contact Us", "About Us", "Terms & Conditions"],
    },
    {
      title: "Buying Product",
      links: ["FAQ", "Return Policy", "Arbitration Policy", "Report Abuse"],
    },
    {
      title: "More Links",
      links: [
        "Privacy Policy",
        "Place Special Order",
        "Become A Seller",
        "Become A Logistics Partner",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook size={34} />,
      href: "#",
    },
    {
      icon: <FaTwitter size={34} />,
      href: "#",
    },
    {
      icon: <FaInstagram size={34} />,
      href: "#",
    },
  ];

  return (
    <footer className="bg-footer text-white ">
      <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerLinks.map((column, index) => (
          <div key={index}>
            <h4 className="font-bold mb-4">{column.title}</h4>
            <ul className="space-y-2">
              {column.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-bold mb-4">Stay Connected</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-gray-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#282c2f] w-full py-4 text-center text-sm">
        2023@FIO Technologies Limited. All Right Reserved.
      </div>
    </footer>
  );
}
