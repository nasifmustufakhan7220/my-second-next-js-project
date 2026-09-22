"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathname === "/" ? "text-[#8149eb] border-b-2 border-b-[#8149eb] " : ""} text-[16px] font-semibold`}
        >
          Home
        </Link>
      </li>
    </>
  );
  return (
    <section className="bg-base-100 shadow-sm">
      <div className="navbar max-w-330 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-[#8149eb] font-bold text-[16px] ">HERO.IO</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#8a51ed] rounded-sm">
            <FaGithub /> contribute
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
