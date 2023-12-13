"use client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { notification } from "antd";
import Input from "../Input";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { PriceItems } from "@assets/item";

const AddBranch: React.FC = () => {
  const [Title, setTitle] = useState<string>("");
  const [Price, setPrice] = useState<string>("");
  const [Unit, setUnit] = useState<string>("");
  const [Topic, setTopic] = useState<string>("");

  const { setIsRefetch, setDropDown } = useStateProvider();

  const handleDiscard = () => {};

  const HandleSubmit = () => {
    if (!Title || !Price || !Unit || !Topic) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập đầy đủ thông tin!",
      });
    } else {
      const data = {
        title: Title,
        price: Price,
        unit: Unit,
        topic: Topic,
      };
      addDocument("branches", data).then(() => {
        notification.success({
          message: "Thành công!",
          description: "Thông tin đã được CẬP NHẬT !",
        });
        setIsRefetch("CRUD branches");
        setDropDown("");
        handleDiscard();
      });
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full flex items-center justify-center 
       h-full
      z-50 absolute rounded-md duration-300 `}
    >
      <div className="w-[80vw] h-[75vh] relative bg-white flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="items-center justify-center  w-full flex  ">
          <div className="flex w-[56vw]  justify-center gap-4 flex-col items-center ">
            <p className="text-2xl font-bold text-center mb-5 uppercase">
              Thêm bảng giá
            </p>

            <div className="flex gap-5 justify-center w-[50vw] mx-auto">
              <div className="flex-1">
                <Input
                  text={`Tiêu đề bảng giá`}
                  Value={Title}
                  setValue={setTitle}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Giá `}
                  Value={Price}
                  setValue={setPrice}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Đơn vị`}
                  Value={Unit}
                  setValue={setUnit}
                  Input={true}
                  PlaceHolder=""
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-2">
                  <label className="text-md font-medium ">Mục 1:</label>
                  <select
                    className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
                    onChange={(e) => setTopic(e.target.value)}
                  >
                    <option> -- Chọn mục 1 --</option>

                    {PriceItems.map((item, idx) => (
                      <option
                        key={idx}
                        className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                        value={item.label}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => handleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                onClick={() => HandleSubmit()}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setDropDown("");
          }}
        />
      </div>
    </div>
  );
};

export default AddBranch;
