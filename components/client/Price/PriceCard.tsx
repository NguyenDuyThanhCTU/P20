import { Tooltip } from "antd";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const PriceCard = ({ Data }: any) => {
  return (
    <div className="w-full shadow-xl text-center border-2 border-gray-400 rounded-xl">
      <h2 className="py-2 border-b bg-slate-500 text-white text-[18px] font-normal">
        {Data.title}
      </h2>
      <div className="flex flex-col py-5 gap-3 items-center px-8">
        <div className="text-[30px] font-light ">
          <h2>{Data.price}</h2>
          <h2>{Data.unit}</h2>
        </div>
        <div className="text-[14px] italic">
          (Giá điều chỉnh đối với khách hàng thân thiết)
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 border-b w-full justify-center py-3">
            <p>Đội trưởng 1 - 2 người</p>
            <Tooltip title="Tùy theo tình hình thực tế, Công Ty sẽ bố trí nhân lực phù hợp nhất">
              <FaQuestionCircle />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 border-b w-full justify-center py-3">
            <p>Tổ đội 4 - 6 người</p>
            <Tooltip title="Tùy theo tình hình thực tế, Công Ty sẽ bố trí nhân lực phù hợp nhất">
              <FaQuestionCircle />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 border-b w-full justify-center py-3">
            <p>Máy móc thiết bị</p>
            <Tooltip title="Đầy đủ">
              <FaQuestionCircle />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 border-b w-full justify-center py-3">
            <p>Trang thiết bị</p>
            <Tooltip title="Đầy đủ">
              <FaQuestionCircle />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
