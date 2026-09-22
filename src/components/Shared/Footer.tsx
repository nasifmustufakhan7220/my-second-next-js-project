
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white mt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Top Footer */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-6 sm:flex-row sm:items-center">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3">
            <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Hero.io Home"
          >
            <Image src={footerLogo} alt="footer" width={30} height={30} />

            <span className="text-sm font-bold tracking-tight">
              HERO.IO
            </span>
          </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <h3 className="text-sm font-medium">
              Social Links
            </h3>

            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <Link
                href="#"
                aria-label="X (Twitter)"
                className="transition-opacity hover:opacity-70"
              >
                <FaXTwitter size={14} />
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-opacity hover:opacity-70"
              >
                <FaLinkedinIn size={14} />
              </Link>

              {/* Facebook */}
              <Link
                href="#"
                aria-label="Facebook"
                className="transition-opacity hover:opacity-70"
              >
                <FaFacebook size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center py-5">
          <p className="text-center text-xs text-white/80">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;