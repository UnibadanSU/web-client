import React from "react";
import Carousel from "framer-motion-carousel";

export default function NewsCarousel() {
  const colors = ["#f90", "#ef0", "#e0f"];

  return (
    <div>
      <Carousel>
        {colors.map((item, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: colors[i],
            }}
          ></div>
        ))}
      </Carousel>
    </div>
  );
}
