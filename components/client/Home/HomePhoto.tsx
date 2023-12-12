"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
const HomePhoto = () => {
  const Photos = [
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/a372ff61aeca5c9405db-1024x768-1.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/b8b18a7e9d7a6e24376b-e1613831618351-768x1024-1.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/d60478b0011bf345aa0a-768x1024.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/34d214810e22fb7ca233-1024x768.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/82dfb217a9b45cea05a5-1024x768.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/7b7cf9efcdeb3eb567fa-1024x768-1.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/du-day-ve-sinh-kinh2.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/3bb8bc5820a6d4f88db7.jpg.webp",
    },
    {
      image:
        "https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/07/8dcffe3a63c4979aced5.jpg.webp",
    },
  ];
  return (
    <>
      <div className="pt-10">
        <div className="bg-center bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
          HÌNH ẢNH THI CÔNG
        </div>
        <div className=" gap-6 w-[1200px] mx-auto py-5">
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div>
              {Photos.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div key={index} className="w-[360px] h-[270px] ">
                      <img
                        src={item.image}
                        alt="phot"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomePhoto;
