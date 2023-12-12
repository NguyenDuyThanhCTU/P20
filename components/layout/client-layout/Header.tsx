"use client";
import {
  HeaderItems,
  HomeServiceItems,
  ServiceItems,
  ServiceItems1,
  ServiceItems2,
  ServiceItems4,
} from "@assets/item";
import { RxCross2 } from "react-icons/rx";

import { useData } from "@context/DataProviders";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [openTypeMB, setOpenTypeMB] = useState(0);
  const { ContactData, Products, productTypes } = useData();
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sort = Products?.filter((product: any) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRs(sort);
  }, [Products, search]);

  const router = useRouter();
  const HandleNavigate = (url: any) => {
    setOpen(false);
    router.push(url);
  };
  return (
    <>
      <div className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="h-[85px] w-[1200px] mx-auto flex justify-between items-center">
          <Link href={`/`} className=" ">
            <img
              src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2023/03/z4199512708783_6eece53a20d1c9d62eeba5c54693bb0b.jpg.webp"
              alt="logo"
              className="h-[85px] p-4"
            />
          </Link>
          <div className="flex gap-1 font-normal text-[18px] z-50">
            {HeaderItems.map((item, index) => (
              <div className="relative group/main " key={index}>
                <Link
                  href={`/${item.value}`}
                  className="w-max hover:bg-mainorange duration-300 py-1 px-3 hover:text-white flex items-center gap-1"
                >
                  {item.label}
                  {(item.label === "Dịch Vụ Vệ Sinh" ||
                    item.label === "Dịch Vụ" ||
                    item.label === "Nội Thất" ||
                    item.label === "Xây Dựng" ||
                    item.label === "Tin Tức") && (
                    <AiOutlineDown className="text-[10px] text-black" />
                  )}
                </Link>

                {item.label === "Dịch Vụ Vệ Sinh" && (
                  <div className="flex flex-col top-8 absolute z-[999px]">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                        {HomeServiceItems.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/${items.url}`}
                            className="full "
                          >
                            <p className="py-2 px-4 hover:bg-slate-100 duration-300 text-black truncate text-[15px] font-light">
                              {" "}
                              {items.title}
                            </p>
                          </Link>
                        ))}

                        {}
                      </div>
                    </div>
                  </div>
                )}
                {item.label === "Dịch Vụ" && (
                  <div className="flex flex-col top-8 absolute z-[999px]">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                        {ServiceItems.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/dich-vu/${items.value}`}
                            className="full "
                          >
                            <p className="py-2 px-4 hover:bg-slate-100 duration-300 text-black truncate text-[15px] font-light">
                              {" "}
                              {items.label}
                            </p>
                          </Link>
                        ))}

                        {}
                      </div>
                    </div>
                  </div>
                )}
                {item.label === "Nội Thất" && (
                  <div className="flex flex-col top-8 absolute z-[999px]">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                        {ServiceItems1.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/noi-that/${items.value}`}
                            className="full "
                          >
                            <p className="py-2 px-4 hover:bg-slate-100 duration-300 text-black truncate text-[15px] font-light">
                              {" "}
                              {items.label}
                            </p>
                          </Link>
                        ))}

                        {}
                      </div>
                    </div>
                  </div>
                )}
                {item.label === "Xây Dựng" && (
                  <div className="flex flex-col top-8 absolute z-[999px]">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                        {ServiceItems4.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/xay-dung/${items.value}`}
                            className="full "
                          >
                            <p className="py-2 px-4 hover:bg-slate-100 duration-300 text-black truncate text-[15px] font-light">
                              {" "}
                              {items.label}
                            </p>
                          </Link>
                        ))}

                        {}
                      </div>
                    </div>
                  </div>
                )}
                {item.label === "Tin Tức" && (
                  <div className="flex flex-col top-8 absolute z-[999px]">
                    <div className="bg-none w-full h-4"></div>
                    <div className=" top-9 hidden group-hover/main:block duration-300">
                      <div className=" flex flex-col bg-white shadow-md border-t-2 w-full border-gray-500 ">
                        {ServiceItems2.map((items: any, idx: number) => (
                          <Link
                            key={idx}
                            href={`/tin-tuc/${items.value}`}
                            className="full "
                          >
                            <p className="py-2 px-4 hover:bg-slate-100 duration-300 text-black truncate text-[15px] font-light">
                              {" "}
                              {items.label}
                            </p>
                          </Link>
                        ))}

                        {}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className="text-[20px] bg-mainorange p-2 text-white rounded-full">
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-gradient-to-bl from-mainblue via-blue-400 to-mainNormalBlue  text-white shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px]">
              <img
                src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2023/03/z4199512708783_6eece53a20d1c9d62eeba5c54693bb0b.jpg.webp"
                alt="Logo"
                className="w-full h-full p-2"
              />
            </Link>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div>
                    <div
                      className={`${
                        search ? "block" : "hidden"
                      }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                      onClick={() => setSearch("")}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
                  <FaSearch />
                </div>
              </div>
              {search && (
                <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                  <div className=" flex flex-col">
                    {searchRs.map((product: any, idx: number) => (
                      <Link
                        href={`$chi-tiet-san-pham/${product.url}`}
                        key={idx}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div onClick={() => HandleNavigate("/")} className="p-5">
                <img
                  src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2023/03/z4199512708783_6eece53a20d1c9d62eeba5c54693bb0b.jpg.webp"
                  alt="logo"
                />
              </div>

              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <div
                      onClick={() => HandleNavigate(`/${item.value}`)}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
};

export default Header;
