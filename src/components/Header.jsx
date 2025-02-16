import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#202020] h-16 w-full flex justify-between ">
      <h1 className="text-2xl md:text-3xl ">WorldAtlas</h1>
      <ul className="flex gap-5">
        <li>
          {" "}
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/country"}>Country</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
