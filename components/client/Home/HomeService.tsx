import { HomeServiceItems } from "@assets/item";
import Link from "next/link";
import React from "react";

const HomeService = () => {
  return (
    <>
      <div>
        <div className="bg-center bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
          DỊCH VỤ NỔI BẬT CỦA SỬA NHÀ CẦN THƠ
        </div>
        <div className="grid  gap-6 d:grid-cols-2 p:grid-cols-1 p:w-auto d:w-[1200px] p:mx-2 d:mx-auto">
          {HomeServiceItems.map((item, index) => (
            <Link
              href={`/${item.url}`}
              key={index}
              className="grid grid-cols-5 items-start justify-start hover:bg-gray-100 duration-300"
            >
              <div className="overflow-hidden col-span-2 rounded-lg">
                <img
                  src={item.image}
                  alt="service"
                  className="w-full h-[200px] object-contain hover:scale-110 duration-300 rounded-lg"
                />
              </div>
              <div className="col-span-3 text-center mt-5 mr-2">
                <h2 className="text-orange-700 font-semibold">{item.title}</h2>
                <p className="font-light">{item.content} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeService;
