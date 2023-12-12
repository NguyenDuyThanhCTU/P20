import { ServiceItems, ServiceItems1 } from "@assets/item";
import ServicesCategory from "@components/client/Services/ServicesCategory";
import { getDataByTypeProps } from "@lib/get-data";

import moment from "moment";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Nội Thất | Sửa Nhà Cần Thơ",
  description: "Sửa Nhà Cần Thơ - An Lành Cho Gia Đình Việt",
};

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  const Data = await getDataByTypeProps("posts", "topicUrl", params.slug);
  const Topic = ServiceItems1.filter((item) => item.value === params.slug)[0];
  return (
    <>
      <div className="border h-max border-gray-400 d:block p:hidden col-span-2">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <ServicesCategory Data={Data} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className="font-LexendDeca font-extralight ">
          {Data.length > 0 ? (
            <>
              {" "}
              <h1 className="text-[28px] font-semibold">
                Danh sách tất cả dịch vụ {Topic?.label}
              </h1>
            </>
          ) : (
            <h1 className="text-[28px] font-semibold">
              Không tìm thấy tin tức về {Topic?.label}
            </h1>
          )}
          <div className="flex flex-col gap-8">
            {Data.map((item: any, idx: number) => {
              const DetailPostDate = moment
                .unix(item?.createdAt.seconds)
                .format("MMMM DD, YYYY");
              const content = item?.content;
              const maxLength = 200;

              const truncatedContent = content
                ? content.substring(0, maxLength)
                : "";

              const markup = { __html: truncatedContent };
              return (
                <div key={idx} className="hover:bg-gray-100 duration-300">
                  <div className="grid grid-cols-3 gap-5 p-2">
                    <Link href={`/bai-viet/${item.url}`}>
                      <div className="w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt="news"
                          className="w-full h-full hover:scale-110 duration-300"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2">
                      <Link href={`/bai-viet/${item.url}`}>
                        <h2 className="font-normal hover:text-blue-400 duration-300">
                          {item.title}
                        </h2>
                        <p className="text[15px] text-gray-400">
                          {DetailPostDate}
                        </p>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={markup}
                        className="truncate2 text-[14px] mt-2"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <ServicesCategory Data={Data} />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
