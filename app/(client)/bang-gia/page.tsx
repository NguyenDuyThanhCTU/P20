import Introduction from "@components/client/Introduction/Introduction";
import Price from "@components/client/Price/Price";
import { getDataByTypeProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới Thiệu | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const PricePage = async () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div className="border-b pb-2">
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
              BẢNG GIÁ DỊCH VỤ VỆ SINH
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Price />
        </div>
      </div>
    </div>
  );
};

export default PricePage;
