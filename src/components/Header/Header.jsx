import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import name from "../../assets/name.png";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-bold"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-200}
          duration={700}
          className="flex cursor-pointer items-center"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-bold"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-200}
          duration={700}
          className="flex cursor-pointer items-center"
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-base font-bold"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-200}
          duration={700}
          className="flex cursor-pointer items-center"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="fixed top z-10 h-max max-w-full rounded-none py-2 px-2 lg:px-24 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="">
            <img height={20} width={400} src={name} alt="" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
};

export default Header;
