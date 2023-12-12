import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const UTMFleur = localFont({
  src: "../../../assets/fonts/UTMFleur.ttf",
  display: "swap",
});

const UTMAmerican = localFont({
  src: "../../../assets/fonts/UTMAmericanSans.ttf",
  display: "swap",
});

const ShortIntro = () => {
  return (
    <div>
      {" "}
      <div className="flex gap-2 py-5 p:px-0 d:px-5 d:flex-row p:flex-col">
        <div className=" flex-[45%] h-[500px]">
          <img
            src="https://vesinhcongnghiepcantho.com/wp-content/uploads/2021/06/c363e3920bfff9a1a0ee_photos_v2_x2_colored_toned-1024x683-1.jpg.webp"
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" flex-[55%] p:px-0 d:px-10">
          <h3 className={`font-UTMFleur text-[40px] ${UTMFleur.className}`}>
            Giới thiệu
          </h3>
          <h3
            className={`font-UTMAmerican font-bold text-mainblue text-center text-[30px] leading-7 uppercase ${UTMAmerican.className}`}
          >
            Tại sao chọn Sửa Nhà Cần Thơ?
          </h3>
          <div className="indent-3 mt-5">
            <p>
              Sửa Nhà Cần Thơ là một trong những đơn vị hàng đầu về lĩnh vực vệ
              sinh công nghiệp chuyên cung cấp các dịch vụ vệ sinh sau xây dựng,
              vệ sinh công nghiệp, vệ sinh nhà xưởng, cung ứng tạp vụ,… trên
              phạm vi TP. Cần Thơ và các tỉnh Miền Tây. <br />
              Trên tinh thần phát triển bền vững và chuyên nghiệp. Sửa Nhà Cần
              Thơ luôn đặt tiêu chí lên hàng đầu đó là sự UY TÍN và CHẤT LƯỢNG
              DỊCH VỤ nhằm mang đến cho Khách hàng trải nghiệm một dịch vụ hoàn
              hảo và hài lòng nhất.
            </p>
          </div>
          <Link href={`/gioi-thieu`}>
            <div className="text-redPrimmary mt-5 hover:text-red-700 cursor-pointer">
              Đọc thêm _
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
