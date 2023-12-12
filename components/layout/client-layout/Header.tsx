import { HeaderItems } from "@assets/item";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="h-[85px] w-[1200px] mx-auto flex justify-between items-center">
        <Link href={`/`} className=" ">
          <img
            src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2023/03/z4199512708783_6eece53a20d1c9d62eeba5c54693bb0b.jpg.webp"
            alt="logo"
            className="h-[85px] p-4"
          />
        </Link>
        <div className="flex gap-3 font-normal text-[18px] ">
          {HeaderItems.map((item, index) => (
            <Link
              href={`/${item.value}`}
              key={index}
              className="hover:bg-mainorange duration-300 py-1 px-3 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="text-[20px] bg-mainorange p-2 text-white rounded-full">
            <IoSearchOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
