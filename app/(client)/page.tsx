import HomeService from "@components/client/Home/HomeService";
import HomeSlide from "@components/client/Home/HomeSlide";
import ShortIntro from "@components/client/Home/ShortIntro";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Trang Chủ | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const HomePage = () => {
  return (
    <div>
      <HomeSlide />
      <div className="w-[1200px] mx-auto hi">
        <ShortIntro />
      </div>
      <HomeService />
    </div>
  );
};

export default HomePage;
