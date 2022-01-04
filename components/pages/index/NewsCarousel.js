import React from "react";
import Carousel from "framer-motion-carousel";

export default function NewsCarousel() {
  const count = [1, 2, 3, 4];

  return (
    <div>
      <Carousel>
        {count.map((item, index) => (
          <Headline key={index} />
        ))}
      </Carousel>
    </div>
  );
}

const Headline = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url("/unsplash_1.png")',
          borderBottomLeftRadius: "36px",
          borderBottomRightRadius: "36px",
        }}
        className="mix-blend-multiply bg-center bg-no-repeat bg-cover text-white flex flex-col justify-end pb-10 px-4"
      >
        <div className="space-y-2">
          <div className="space-x-2">
            <span className="bg-custom-red font-semibold text-xs px-2 rounded-sm">
              NEWS
            </span>
            <span className="text-xs font-semibold">November 19, 2021</span>
          </div>
          <div>
            <p className="font-semibold text-sm">
              “Free Food will be given to all Indy and Zik Hall residents” -
              Naira Marley
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
