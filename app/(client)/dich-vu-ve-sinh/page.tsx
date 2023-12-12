import HomeService from "@components/client/Home/HomeService";
import Services from "@components/client/Services/Services";
import ServicesCategory from "@components/client/Services/ServicesCategory";
import { getDataByTypeProps } from "@lib/get-data";

import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Dịch Vụ Vệ Sinh | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const NewsPage = async () => {
  return (
    <div className="">
      <Services />
    </div>
  );
};

export default NewsPage;
