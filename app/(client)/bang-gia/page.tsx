import { PriceItems } from "@assets/item";
import Introduction from "@components/client/Introduction/Introduction";
import Price from "@components/client/Price/Price";
import PriceCard from "@components/client/Price/PriceCard";
import { getAllDataProps } from "@lib/get-data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bảng Giá | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const PricePage = async () => {
  const Data = await getAllDataProps("branches");
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
          {PriceItems.map((item, index) => {
            const data = Data.filter(
              (items: any) => items.topic === item.label
            );
            return (
              <div key={index}>
                <div className="flex justify-center gap-3 items-center">
                  <div className="h-[2px] w-full bg-gray-400"></div>
                  <div className="text-mainblue font-semibold text-[22px]">
                    <h2 className="w-max"> {item.label}</h2>
                  </div>
                  <div className="h-[2px]  w-full bg-gray-400"></div>
                </div>
                <div className="grid grid-cols-3 gap-7 py-4">
                  {data.map((items: any, idx: number) => (
                    <div key={idx} className="w-full justify-center flex">
                      <PriceCard Data={items} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricePage;
