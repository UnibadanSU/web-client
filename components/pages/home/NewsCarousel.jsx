import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Pagination, Navigation } from "swiper";
import NewsBadge from "../../ui/NewsBadge";
import styles from "./style.module.css";

// install Swiper modules
SwiperCore.use([EffectCreative, Pagination, Navigation]);

export default function App({articles}) {

  const swipe = articles || []
  return (
    <div className={styles.SliderWrapper}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        grabCursor={true}
        navigation={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
      >
        {swipe.map(item=>(
          <SwiperSlide>
          <Headline />
        </SwiperSlide>
        ))}
        

        {/* <SwiperSlide>
          <Headline />
        </SwiperSlide>

        <SwiperSlide>
          <Headline />
        </SwiperSlide>

        <SwiperSlide>
          <Headline />
        </SwiperSlide>

        <SwiperSlide>
          <Headline />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

const Headline = ({image, body}) => {
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
        <div className="space-y-2 lg:ml-5 mt-3 relative top-3 sm:top-0">
          <div className="space-x-2 relative top-2 sm:top-0">
            <NewsBadge title="News" />
            <span className="text-xs font-semibold">November 19, 2021</span>
          </div>
          <div>
            <p className="font-semibold text-[15px]">
              “Free Food will be given to all Indy and Zik Hall residents” -
              Naira Marley
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
