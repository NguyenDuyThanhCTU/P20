"use client";
import React from "react";
import ListPost from "./Section/ListPost";
import UploadPost from "./Section/UploadPost";

const Post = ({ type }: any) => {
  let url: any;
  if (type === "Dịch Vụ Vệ Sinh") {
    url = "dich-vu-ve-sinh";
  } else if (type === "Dịch Vụ") {
    url = "dich-vu";
  } else if (type === "Nội Thất") {
    url = "noi-that";
  } else if (type === "Xây Dựng") {
    url = "xay-dung";
  } else if (type === "Tin Tức") {
    url = "tin-tuc";
  }

  return (
    <div className="flex flex-col justify-between h-full w-full relative ">
      <div className="ml-3 mb-2 bg-[#353535] shadow-gray-700 p-5 rounded-xl">
        <h3 className=" text-[44px] text-center font-bold mb-2 uppercase">
          Danh sách các {type}
        </h3>

        <div className="flex p-4 gap-10">
          <ListPost type={type} url={url} />
          <UploadPost type={type} Url={url} />
        </div>
        <div className="w-full border"></div>
      </div>
    </div>
  );
};

export default Post;
