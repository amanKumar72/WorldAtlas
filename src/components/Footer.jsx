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
    details: "9876543211",
  },
  {
    icon: "TbMailPlus",
    title: "Mail us",
    details: "contact@kodyfier.com",
  },
];
const footerIcon = {
  MdPlace: <MdPlace />,
  IoCallSharp: <IoCallSharp />,
  TbMailPlus: <TbMailPlus />,
};
const Footer = () => {
  return (
    <footer className="footer-section mt-10">
      <div className="flex  justify-evenly ">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact flex items-center " key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://thapatechnical.shop/" target="_blank">
                  ThapaTechnical
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/thapatechnical/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://thapatechnical.shop/source-code"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
