import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";

const footerContact = [
  {
    icon: "MdPlace",
    title: "Find us",
    details: "Pune, Maharashtra",
  },
  {
    icon: "IoCallSharp",
    title: "Call us",
    details: "1234567890",
  },
  {
    icon: "TbMailPlus",
    title: "Mail us",
    details: "amanKumar@gamil.com",
  },
];
const footerIcon = {
  MdPlace: <MdPlace className="text-blue-700 text-2xl mr-3 lg:text-4xl" />,
  IoCallSharp: <IoCallSharp className="text-blue-700 text-2xl mr-3 lg:text-4xl" />,
  TbMailPlus: <TbMailPlus className="text-blue-700 text-2xl mr-3 lg:text-4xl" />,
};
const Footer = () => {
  return (
    <footer className="footer-section bottom-0 mt-10 lg:text-xl">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div
              className="footer-contact flex items-center mx-auto "
              key={index}
            >
              <div className="icon">{footerIcon[icon]}</div>
              <div className="flex md:flex-col items-center">
                <p className="text-gray-400">{title} &nbsp;</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center my-6">
        Copyright &copy; 2024, All Right Reserved &nbsp;
        <NavLink to="/" target="_blank" className="text-blue-600">
          AmanKumar
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
