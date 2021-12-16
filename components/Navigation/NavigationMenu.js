import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import * as styles from "./index.module.css";

export default function NavigationMenu({ shouldOpen, closeNavMenu }) {
  return (
    <div>
      <div
        style={{ zIndex: 99999 }}
        className={`fixed w-full h-full top-0 bg-red-gradient overflow-scroll ${
          !shouldOpen ? "hidden" : styles.animateNavMenu
        }`}
      >
        <button className="absolute right-4 top-2" onClick={closeNavMenu}>
          <MdClear className="text-white w-6 h-10" />
        </button>
        <div className="mx-6">
          <div className="flex w-full justify-center mt-10 mb-5">
            <Link passHref={true} href="/">
              <Image
                width="182"
                height="49"
                src="/ui-su-logo.png"
                alt="ui-su-logo"
                className="items-center"
              />
            </Link>
          </div>
          <div className="flex w-full justify-center relative">
            <input
              className="bg-transparent border border-custom-gray rounded-3xl text-white placeholder-custom-gray focus:border-white outline-none transition-colors text-lg pl-3 pr-12 py-2 w-full"
              type="text"
              placeholder="Search"
            />
            <HiOutlineSearch
              style={{
                height: "34px",
                width: "27px",
                right: "18px",
                top: "5px",
              }}
              className="text-white absolute"
            />
          </div>
          <div className="w-full flex flex-col mt-6 text-white">
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              Home
            </a>
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              Trending News and Events
            </a>
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              The Executive Corner
            </a>
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              The SU Representative Council
            </a>
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              Student Union Press Corner
            </a>
            <a className="text-lg py-2 border-b border-custom-gray" href="#">
              About UI Student Union
            </a>
          </div>
          <div className="text-white text-center my-10">
            <div>Connect with UI SU</div>
            <div className="flex flex-row justify-center items-center space-x-3 mt-3">
              <a href="#">
                <Image
                  src="/facebook.svg"
                  width="30px"
                  height="30px"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <Image
                  src="/instagram.svg"
                  width="30px"
                  height="30px"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <Image
                  src="/whatsapp.svg"
                  width="30px"
                  height="30px"
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
