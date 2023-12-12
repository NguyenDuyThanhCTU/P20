import HomeNews from "@components/client/Home/HomeNews";
import HomePhoto from "@components/client/Home/HomePhoto";
import HomeService from "@components/client/Home/HomeService";
import HomeService1 from "@components/client/Home/HomeService1";
import HomeService2 from "@components/client/Home/HomeService2";
import HomeSlide from "@components/client/Home/HomeSlide";
import ShortIntro from "@components/client/Home/ShortIntro";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Trang Chủ | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const HomePage = async () => {
  const Data = await getDataByTypeProps("posts", "topic", "Tin tức");

  return (
    <div>
      <HomeSlide />
      <div className="p:w-auto d:w-[1200px] p:mx-2 d:mx-auto hi">
        <ShortIntro />
      </div>
      <HomeService />
      <HomeService1 />
      <HomeService2 />
      <HomeNews Data={Data} />
      <HomePhoto />
    </div>
  );
};

export default HomePage;
