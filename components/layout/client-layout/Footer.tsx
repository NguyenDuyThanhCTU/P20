"use client";
import { TypePostItems } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const { ContactData } = useData();
  return (
    <div className="bg-[#ada8a8]">
      <div className="bg-[rgba(0,0,0,.5)]">
        <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1  d:grid-cols-4 py-10 gap-5">
          <div className=" flex flex-col items-center text-white gap-5">
            <div>
              <img
                src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2023/01/SSSS.png"
                alt="logo"
                className="h-[56px] "
              />
            </div>
            <div className="font-normal text-[15px]">
              Vệ Sinh Công Nghiệp Cần Thơ - SỬA NHÀ CẦN THƠ là thương hiệu uy
              tín trong ngành vệ sinh công nghiệp tại Cần Thơ và Miền Tây của
              Công ty SỬA NHÀ CẦN THƠ. Chúng tôi cam kết mang đến khách hàng giá
              trị đích thực và trải nghiệm dịch vụ vệ sinh tuyệt vời nhất.
            </div>
            <div className="flex gap-5 ">
              <div className="border-2 border-gray-500 hover:border-blue-700 hover:bg-blue-700 hover:text-white duration-300 text-[30px] p-2 rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="border-2 border-gray-500 hover:border-redPrimmary hover:bg-redPrimmary hover:text-white duration-300 text-[30px] p-2 rounded-full cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-2">
            <h2 className="font-semibold text-mainorange text-[20px] uppercase">
              CÔNG TY TNHH SỬA NHÀ CẦN THƠ
            </h2>
            <div className="mt-4">
              <div className="text-white">
                <li className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>

                  <p>
                    {" "}
                    <strong className="font-normal text-mainorange">
                      Địa chỉ:
                    </strong>{" "}
                    {ContactData?.address}
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>
                  <p>
                    <strong className="font-normal text-mainorange">
                      Website:
                    </strong>{" "}
                    {ContactData?.website}
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>
                  <p>
                    {" "}
                    <strong className="font-normal text-mainorange">
                      Email:
                    </strong>{" "}
                    {ContactData?.gmail}
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>
                  <p>
                    {" "}
                    <strong className="font-normal text-mainorange">
                      Hotline:
                    </strong>{" "}
                    {ContactData?.phone}
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="font-semibold text-mainorange text-[20px] uppercase">
              THÔNG TIN CẦN BIẾT
            </h2>
            <div className="mt-4">
              <div className="text-white">
                <Link href={`/tin-tuc`} className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>
                  <p>Tin tức</p>
                </Link>
                <Link href={`/lien-he`} className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>
                  <p>Liên hệ</p>
                </Link>
                {TypePostItems.slice(1, TypePostItems.length).map(
                  (item, index) => (
                    <Link
                      href={`/bai-viet/${item.value}`}
                      key={index}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-[20px]">&#8226;</span>
                      <p>{item.label}</p>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
