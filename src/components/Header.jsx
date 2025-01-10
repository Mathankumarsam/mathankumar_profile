import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <ul className=" w-[60%] border border-x-0  mt-12 border-[#ebd185] text-black  mx-auto  flex space-x-6 justify-center items-center h-[60px]  ">
      {[
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "Services", href: "/servies" },
        { text: "Blog", href: "/blog" },
        { text: "Work", href: "/work" },
      ].map((item, id) => (
        <>
          <li key={id} className="hover:text-[#8a6d16] transition">
            <Link href={item.href}>{item.text}</Link>
          </li>
          {id < 5 && <span>|</span>}
        </>
      ))}
    </ul>
  );
};
