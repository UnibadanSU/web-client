import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center py-4 mt-auto">
      <div>
        <Image src="/ui-su-logo.png" width="132" height="39" alt="UI SU" />
      </div>
      <div className="mt-4 text-sm">
        © 2022 STUDENT&apos;S UNION UNIVERSITY OF IBADAN
      </div>
    </div>
  );
}
