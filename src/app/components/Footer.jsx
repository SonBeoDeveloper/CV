import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-top-[#33353F] border-l-transparent border-r-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"}>LOGO</Link>

        <p className="text-slate-700">Cảm ơn vì đã ghé thăm</p>
      </div>
    </footer>
  );
};

export default Footer;
