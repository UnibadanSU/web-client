import React from "react";

export default function PageIntro({ text }) {
  return (
    <div className="flex flex-col align-middle justify-center text-center mt-[32px] mb-[12px]">
      <img
        src="/ui-su-logo-2.png"
        alt="UI SU"
        className="mx-auto w-[131px] h-[155px]"
      />
      <h1 className="max-w-[280px] text-[24px] mx-auto tracking-[0.3em] leading-[29px] font-bold uppercase">
        {text}
      </h1>
    </div>
  );
}
