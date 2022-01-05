import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative"


// import Swiper core and required modules
import SwiperCore, {EffectCreative} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCreative]);


export default function App() {


  return (
    <>


      <Swiper grabCursor={true} effect={'creative'} creativeEffect={{
        "prev": {
          "shadow": true,
          "translate": [
            0,
            0,
            -400
          ]
        },
        "next": {
          "translate": [
            "100%",
            0,
            0
          ]
        }
      }} className="mySwiper">
        <SwiperSlide><Headline/></SwiperSlide><SwiperSlide><Headline/></SwiperSlide><SwiperSlide><Headline /></SwiperSlide><SwiperSlide><Headline/></SwiperSlide><SwiperSlide><Headline/></SwiperSlide>
      </Swiper>
    </>
  )
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
