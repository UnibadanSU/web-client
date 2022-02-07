import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

export default function Header({ openNavMenu }) {
  return (
    <div className="fixed flex items-center justify-between top-0 w-full h-14 pt-1 pl-3 pr-0 bg-black z-50">
      <div>
        <Link href="/">
          <a>
            <Image src="/ui-su-logo.png" width="132" height="39" alt="UI SU" />
          </a>
        </Link>
      </div>
      <div>
        <button
          onClick={openNavMenu}
          className="text-white flex relative left-2 bottom-1"
        >
          <div className="relative right-2 top-2">
            <div
              style={{ height: "2px", width: "14px" }}
              className="bg-white"
            ></div>
            <div
              style={{ height: "2px", marginTop: "3px", width: "14px" }}
              className="bg-white"
            ></div>
            <div
              style={{ height: "2px", marginTop: "3px" }}
              className="w-5 bg-white"
            ></div>
          </div>
          <HiOutlineSearch
            style={{ top: "3px", right: "19px", width: "30px", height: "18px" }}
            className="text-white relative"
          />
        </button>
      </div>
    </div>
  );
}
