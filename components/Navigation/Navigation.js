import React from 'react'
import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';
import { CgMenuLeftAlt } from 'react-icons/cg';

export default function Navigation() {
    return (
        <div className="fixed flex items-center justify-between top-0 w-full h-16 px-3 bg-black">
            <div>
                <Image width="132" height="39" src="/ui-su-logo.png" alt="ui-su-logo" className="items-center" />
            </div>
            <div>
                <button className="text-white flex">
                    <CgMenuLeftAlt className="text-white w-10 h-7" />
                    <HiOutlineSearch className="text-white w-8 h-5 relative right-4" />
                </button>
            </div>
        </div>
    )
}
