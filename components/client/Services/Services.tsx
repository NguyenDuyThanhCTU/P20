import { HomeServiceItems } from "@assets/item";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className=" w-max">
      <div className="border-b pb-2">
        <div className="uppercase font-bold text-[1.5rem] ">
          <div className="hover:text-mainblue text-redPrimmary before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 text-center cursor-default">
            Dịch Vụ Nổi Bật Của Sửa Nhà Cần Thơ
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 w-[1200px] mx-auto mt-10">
        {HomeServiceItems.map((item, index) => (
          <Link
            href={`/${item.url}`}
            key={index}
            className=" hover:bg-[rgba(255,255,255,0.8)] duration-300"
          >
            <div className="grid grid-cols-5 items-start justify-start p-3">
              <div className="overflow-hidden col-span-2 rounded-full">
                <img
                  src={item.image}
                  alt="service"
                  className="w-[200px] h-[200px] hover:scale-110 duration-300 rounded-full"
                />
              </div>
              <div className="col-span-3 text-center mt-5 mr-2">
                <h2 className="text-orange-700 font-semibold">{item.title}</h2>
                <p className="font-light">{item.content} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
