import { HomeServiceItems, HomeServiceItems1 } from "@assets/item";
import React from "react";

const HomeService1 = () => {
  return (
    <>
      <div className="pt-10">
        <div className="bg-center bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
          TẠI SAO BẠN NÊN CHỌN DỊCH VỤ CỦA SỬA NHÀ CẦN THƠ
        </div>
        <div className="grid  gap-6  d:grid-cols-3 p:grid-cols-1 p:w-auto d:w-[1200px] p:mx-2 d:mx-auto">
          {HomeServiceItems1.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center h-[200px] justify-between mt-4"
            >
              <div className="max-h-[86px] w-[86px]">
                <img
                  src={item.image}
                  alt="service1"
                  className="w-full h-full"
                />
              </div>
              <div className="text-center mt-3">
                <h2 className="font-normal text-maingreen text-[18px]">
                  {item.title}
                </h2>
                <p className="mt-2 font-light">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeService1;
