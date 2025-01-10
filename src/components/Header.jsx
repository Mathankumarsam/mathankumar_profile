import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <ul className=" w-[60%] border border-x-0  mt-12 border-[#ebd185] text-black  mx-auto  flex space-x-6 justify-center items-center h-[60px]  ">
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/"}> Home </Link>
      </li>
      <span>|</span>
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/work"}> Work </Link>
      </li>
      <span>|</span>
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/servies"}> Services </Link>
      </li>
      <span>|</span>
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/blog"}> Blog </Link>
      </li>
      <span>|</span>
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/contact"}> Contact </Link>
      </li>
      <span>|</span>
      <li className="hover:text-[#8a6d16] transition">
        <Link href={"/about"}> About </Link>
      </li>
    </ul>
  );
};
