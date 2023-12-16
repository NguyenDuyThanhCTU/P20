"use client";
import { HomeServiceItems1 } from "@assets/item";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const HomeService2 = () => {
  const [open, setOpen] = React.useState(0);
  const { ContactData } = useData();
  const LeftService = [
    {
      title: "Vệ sinh công nghiệp",
    },
    {
      title: "Vệ sinh nhà ở/ biệt thự/ văn phòng",
    },
    {
      title: "Vệ sinh nhà xưởng",
    },
    {
      title: "Giúp việc theo giờ/ tạp vụ hằng ngày",
    },
    {
      title: "Vệ sinh giặt thảm/ nệm/ sofa",
    },
    {
      title: "Vệ sinh kính/ đánh bóng sàn đá",
    },
    {
      title: "Vệ sinh khách sạn, trường học, bệnh viện",
    },
  ];
  const RightService = [
    {
      title: "Địa chỉ vệ sinh công nghiệp Sửa Nhà Cần Thơ",
    },
    {
      title: "Thời gian làm việc của Sửa Nhà Cần Thơ",
    },
    {
      title: "Tôi cần báo giá dịch vụ mới nhất",
    },
    {
      title: "Vệ sinh công nghiệp là gì?",
    },
  ];

  const HandleOpen = (index: number) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      <div className="pt-10">
        <div className="bg-center bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2FUntitled.png?alt=media&token=bdd28cc7-79bf-453a-b24e-9d0ec902a960)] py-10 text-center text-[25px]  font-normal text-blue-800">
          TẠI SAO BẠN NÊN CHỌN SỬA NHÀ CẦN THƠ
        </div>
        <div className="grid  gap-6  d:grid-cols-2 p:grid-cols-1 p:w-auto d:w-[1200px] p:mx-2 d:mx-auto">
          <div className="font-light flex flex-col gap-2">
            {LeftService.map((item, index) => (
              <div key={index}>
                <li className="flex items-center">
                  <span className="mr-2 text-[20px]">&#8226;</span>

                  <p>{item.title}</p>
                </li>
              </div>
            ))}
            <Link href={`/dich-vu`}>
              <li className="flex items-center">
                <span className="mr-2 text-[20px]">&#8226;</span>

                <p className="text-redPrimmary">…..Xem tiếp….</p>
              </li>
            </Link>
          </div>
          <div>
            {RightService.map((item, index) => (
              <>
                <div
                  key={index}
                  className={`${
                    open === index && "bg-gray-100"
                  }  py-2 border-t cursor-pointer`}
                  onClick={() => HandleOpen(index)}
                >
                  <div className="px-2 flex items-center gap-3">
                    <div className="text-[22px] text-maingreen">
                      <FaChevronDown />
                    </div>
                    <div className="text-[18px] font-light">{item.title}</div>
                  </div>
                </div>
                <div>
                  {open === index && (
                    <div>
                      {open === 0 ? (
                        <div className="flex flex-col gap-2 my-2 ml-8">
                          <h2 className="font-semibold text-[20px] ">
                            Sửa Nhà Cần Thơ
                          </h2>
                          <p>Hotline: {ContactData.phone}</p>
                        </div>
                      ) : open === 1 ? (
                        <div className="flex flex-col gap-2 my-2 ml-8">
                          Sửa Nhà Cần Thơ là một trong những công ty rất chú
                          trọng đến sự phục vụ, chăm sóc quý khách hàng phục{" "}
                          <br />
                          Vì vậy chúng tôi sẵng sàng phục vụ quý khách bất kể
                          khi nào bạn cần 24/24, kể cả các ngày lễ, chủ nhật
                        </div>
                      ) : open === 2 ? (
                        <div className="flex flex-col gap-2 my-2 ml-8">
                          Quý khách vui lòng tham khảo{" "}
                          <strong>
                            {" "}
                            báo giá dịch vụ vệ sinh công nghiệp » TẠI ĐÂY
                          </strong>{" "}
                          <br />
                          Hoặc Quý khách liên hệ trực tiếp hotline{" "}
                          <strong
                            className="text-mainblue hover:text-redPrimmary duration-300"
                            onClick={() =>
                              window.open(`tel:${ContactData.phone}`, "_self")
                            }
                          >
                            {ContactData.phone}
                          </strong>{" "}
                          để được tư vấn/ khảo sát và báo giá nhanh nhất. Xin
                          cảm ơn!
                        </div>
                      ) : open === 3 ? (
                        <div className="flex flex-col gap-2 my-2 ml-8">
                          <p>
                            <span>
                              <strong>
                                Vệ sinh c&ocirc;ng nghiệp l&agrave; g&igrave;?
                              </strong>
                            </span>
                          </p>
                          <ul>
                            <li>
                              <span>
                                Vệ sinh c&ocirc;ng nghiệp xuất hiện từ những năm
                                đầu 80 của thế kỷ 20. Du nhập v&agrave;o Việt
                                Nam từ những năm 90 bắt đầu bằng c&ocirc;ng việc
                                vệ sinh hệ thống c&aacute;c nh&agrave;
                                h&agrave;ng kh&aacute;ch sạn. Qua hơn 20 năm
                                ho&agrave;n thiện v&agrave; ph&aacute;t triển,
                                vệ sinh c&ocirc;ng nghiệp Việt Nam đ&atilde;
                                khẳng định được vai tr&ograve; của m&igrave;nh
                                đối với cuộc sống v&agrave; sự ph&aacute;t triển
                                của x&atilde; hội.
                              </span>
                            </li>
                            <li>
                              <span>
                                Đ&oacute; l&agrave; h&igrave;nh thức vệ sinh
                                truyền thống kết hợp với m&aacute;y m&oacute;c
                                hiện đại, c&ocirc;ng nh&acirc;n chuy&ecirc;n
                                nghiệp, h&oacute;a chất chuy&ecirc;n dụng
                                c&ugrave;ng những phương ph&aacute;p tối ưu, quy
                                tr&igrave;nh xử l&yacute; khoa học đem lại hiệu
                                quả l&agrave;m sạch cao nhất, tiết kiệm thời
                                gian v&agrave; chi ph&iacute;.
                              </span>
                            </li>
                            <li>
                              <span>
                                Vệ sinh c&ocirc;ng nghiệp mang đến m&ocirc;i
                                trường sống v&agrave; l&agrave;m việc tiện nghi,
                                sạch sẽ, đảm bảo an to&agrave;n cho sức khỏe.
                                Tạo điều kiện thuận tiện nhất để bạn
                                chuy&ecirc;n t&acirc;m v&agrave;o c&aacute;c
                                hoạt động sống, chăm s&oacute;c gia đ&igrave;nh
                                v&agrave; bản th&acirc;n, mang lại những lợi
                                &iacute;ch cho ch&iacute;nh m&igrave;nh
                                v&agrave; x&atilde; hội.
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              <strong>
                                Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ
                              </strong>
                            </span>
                          </p>
                          <ul>
                            <li>
                              <span>
                                Với t&acirc;m huyết, học hỏi kinh nghiệm trong
                                hơn 8 năm l&agrave;m việc với nghề vệ sinh
                                c&ocirc;ng nghiệp &ndash;{" "}
                                <strong>
                                  C&ocirc;ng ty dịch vệ sinh c&ocirc;ng nghiệp
                                  Cần Thơ &ndash; Không Gian Xanh
                                </strong>{" "}
                                ch&uacute;ng t&ocirc;i kh&ocirc;ng ngừng nỗ lực
                                để dần dần đ&aacute;nh dấu thương hiệu, tham
                                vọng sẽ &nbsp;trở th&agrave;nh một trong những
                                đơn vị đứng đầu trong lĩnh vực vệ sinh
                                c&ocirc;ng nghiệp uy t&iacute;n &ndash; chất
                                lượng.
                              </span>
                            </li>
                            <li>
                              <span>
                                Phương ch&acirc;m chất lượng l&agrave; danh dự,
                                l&agrave; điểm tựa l&agrave; uy t&iacute;n cho
                                sự ph&aacute;t triển l&acirc;u d&agrave;i.
                                <strong>
                                  &nbsp;Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần
                                  Thơ
                                </strong>{" "}
                                &ndash; <strong>Không Gian Xanh</strong> xin hứa
                                sẽ cung cấp dịch vụ đ&uacute;ng chất lượng như
                                cam kết trong hợp đồng, lu&ocirc;n
                                &nbsp;lu&ocirc;n lắng nghe v&agrave; thấu hiểu
                                &yacute; kiến đ&oacute;ng g&oacute;p, phản
                                &aacute;nh của kh&aacute;ch h&agrave;ng để
                                x&acirc;y dựng niềm tin cũng như sự qu&yacute;
                                mến của kh&aacute;ch h&agrave;ng.
                              </span>
                            </li>
                            <li>
                              <span>
                                <strong>
                                  Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ
                                  &ndash; Không Gian Xanh&nbsp;
                                </strong>
                                lu&ocirc;n nỗ lực tiếp thu c&aacute;c kiến thức
                                mới để phục vụ qu&yacute; kh&aacute;ch
                                h&agrave;ng tốt nhất, k&egrave;m theo sự tự tin,
                                tr&igrave;nh độ, năng lực l&agrave;m việc mang
                                đến chất lượng c&ocirc;ng tr&igrave;nh vệ sinh
                                c&ocirc;ng nghiệp tốt nhất, đa dạng nhất xứng
                                đ&aacute;ng l&agrave; nh&agrave; cung cấp
                                h&agrave;ng đầu{" "}
                                <strong>
                                  dịch vụ vệ sinh c&ocirc;ng nghiệp&nbsp;Cần Thơ
                                </strong>{" "}
                                uy t&iacute;n, chất lượng nhất
                              </span>
                            </li>
                          </ul>
                          <p>
                            <span>
                              <strong>
                                Tại sao n&ecirc;n lựa chọn dịch vụ vệ sinh
                                c&ocirc;ng nghiệp Cần Thơ của Không Gian Xanh
                              </strong>
                            </span>
                          </p>
                          <ul>
                            <li>
                              <span>
                                M&aacute;y m&oacute;c vệ sinh c&ocirc;ng nghiệp
                                Cần Thơ Sử dụng c&ocirc;ng nghệ v&agrave;
                                m&aacute;y m&oacute;c t&acirc;n tiến nhất hiện
                                nay. Thiết bị vệ sinh: m&aacute;y h&uacute;t bụi
                                , m&aacute;y ch&agrave; s&agrave;n, m&aacute;y
                                phun rửa &aacute;p lực, m&aacute;y thổi
                                kh&ocirc;&hellip;
                              </span>
                            </li>
                            <li>
                              <span>
                                Dụng cụ vệ sinh c&ocirc;ng nghiệp Cần Thơ đầy đủ
                                chuy&ecirc;n nghiệp: dụng cụ d&acirc;y đu lau
                                k&iacute;nh, dụng cụ lau k&iacute;nh, xe vắt
                                nước 1 ngăn, xe vắt nước 2 ngăn, xe l&agrave;m
                                ph&ograve;ng, c&acirc;y đẩy bụi, c&acirc;y đẩy
                                nước&hellip;
                              </span>
                            </li>
                            <li>
                              <span>
                                Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ sử
                                dụng h&oacute;a chất vệ sinh tẩy rửa
                                chuy&ecirc;n dụng, an to&agrave;n, th&acirc;n
                                thiện với m&ocirc;i trường, sức khỏe:
                              </span>
                            </li>
                            <li>
                              <span>
                                Quy tr&igrave;nh của dịch vụ vệ sinh c&ocirc;ng
                                nghiệp Cần Thơ &ndash; Không Gian Xanh chuẩn
                                quốc tế
                              </span>
                            </li>
                            <li>
                              <span>
                                Cam kết về chất lượng vệ sinh:&nbsp;Dịch vụ vệ
                                sinh c&ocirc;ng nghiệp Cần Thơ&nbsp;&ndash;
                                Không Gian Xanh với khẩu hiệu chất lượng
                                l&agrave; danh dự &ndash; h&agrave;i l&ograve;ng
                                mới thanh to&aacute;n sẽ kh&ocirc;ng phụ
                                l&ograve;ng qu&yacute; kh&aacute;ch h&agrave;ng
                                đẫ tin tưởng
                              </span>
                            </li>
                            <li>
                              <span>
                                Chi ph&iacute; hợp l&yacute;, dọn vệ sinh
                                c&ocirc;ng nghiệp theo định kỳ sẽ được khuyến
                                m&atilde;i giảm chi ph&iacute;:
                                Gi&aacute;&nbsp;dịch vụ vệ sinh c&ocirc;ng
                                nghiệp Cần Thơ&nbsp;của Không Gian Xanh chỉ
                                ngang bằng, thậm ch&iacute; c&ograve;n rẻ hơn so
                                với c&aacute;c c&ocirc;ng ty vệ sinh c&oacute;
                                c&ugrave;ng dịch vụ tr&ecirc;n thị trường hiện
                                nay.
                              </span>
                            </li>
                            <li>
                              <span>
                                Đội ngũ nh&acirc;n vi&ecirc;n vệ sinh c&ocirc;ng
                                nghiệp Cần Thơ được đ&agrave;o tạo b&agrave;i
                                bản, chuy&ecirc;n nghiệp, gi&agrave;u kinh
                                nghiệm, nhiệt t&igrave;nh v&agrave; tận
                                t&acirc;m: Đội ngũ vệ sinh c&ocirc;ng nghiệp Cần
                                Thơ nh&acirc;n vi&ecirc;n c&oacute; t&acirc;m
                                với nghề, chuy&ecirc;n nghiệp, với những
                                m&aacute;y m&oacute;c, thiết bị hiện đại từ
                                m&aacute;y giặt, m&aacute;y ch&agrave;
                                s&agrave;n đến m&aacute;y h&uacute;t bụi, xịt
                                rửa c&ocirc;ng nghiệp&hellip; cam kết
                                ho&agrave;n th&agrave;nh qu&aacute; tr&igrave;nh
                                dọn vệ sinh trong thời gian dự kiến(c&oacute;
                                thể c&ograve;n sớm hơn).
                              </span>
                            </li>
                            <li>
                              <span>
                                Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ Sẵn
                                s&agrave;ng đ&aacute;p ứng mọi nhu cầu của
                                qu&yacute; kh&aacute;ch mọi l&uacute;c,mọi nơi.
                              </span>
                            </li>
                            <li>
                              <span>
                                Dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ đa
                                dạng, qu&yacute; kh&aacute;ch c&oacute; thể chọn
                                t&ugrave;y theo nhu cầu hoặc dựa v&agrave;o điều
                                kiện kinh tế
                              </span>
                            </li>
                            <li>
                              <span>
                                Q&uacute;y kh&aacute;ch sẽ nhận được sự chăm
                                s&oacute;c, tư vấn nhiệt t&igrave;nh từ đội ngũ
                                nh&acirc;n vi&ecirc;n của vệ sinh c&ocirc;ng
                                nghiệp Cần Thơ. Mọi thắc mắc, y&ecirc;u cầu của
                                qu&yacute; kh&aacute;ch h&agrave;ng sẽ được
                                c&ocirc;ng ty vệ sinh c&ocirc;ng nghiệp Cần Thơ
                                giải đ&aacute;p, hỗ trợ ngay cả khi đ&atilde;
                                kết th&uacute;c hợp đồng.Thậm ch&iacute;
                                c&oacute; những dịch vụ c&ograve;n được khuyến
                                mại kh&ocirc;ng t&iacute;nh tiền.
                              </span>
                            </li>
                            <li>
                              <span>
                                C&ocirc;ng ty vệ sinh c&ocirc;ng nghiệp Cần Thơ
                                nhận cung cấp dịch vụ 24/24h, kể cả thứ 7, chủ
                                nhật v&agrave; ng&agrave;y lễ phục vụ hết sức
                                chu đ&aacute;o kh&ocirc;ng t&iacute;nh
                                th&ecirc;m gi&aacute; th&agrave;nh.
                              </span>
                            </li>
                            <li>
                              <span>
                                Với mong muốn lấy chất lượng v&agrave; uy
                                t&iacute;n l&agrave;m kim chỉ nang, cũng như
                                l&agrave;m mục ti&ecirc;u để phấn đấu, chỉ cần
                                kh&aacute;ch h&agrave;ng gọi điện v&agrave;
                                y&ecirc;u cầu, ch&uacute;ng t&ocirc;i vệ sinh
                                c&ocirc;ng nghiệp Cần Thơ sẽ sẵn s&agrave;ng
                                đ&aacute;p ứng v&agrave; thực hiện d&ugrave;
                                l&agrave; dịch vụ nhỏ nhất với chi ph&iacute;
                                hết sức phải chăng.
                              </span>
                            </li>
                            <li>
                              <span>
                                C&ocirc;ng ty vệ sinh c&ocirc;ng nghiệp Cần Thơ
                                ch&uacute;ng t&ocirc;i kh&ocirc;ng chỉ cung cấp
                                dịch vụ vệ sinh c&ocirc;ng nghiệp Cần Thơ,
                                m&agrave; c&ograve;n nhận cung cấp dịch vụ tại
                                tất cả c&aacute;c tỉnh th&agrave;nh tr&ecirc;n
                                cả nước với mức gi&aacute; hấp dẫn.
                              </span>
                            </li>
                            <li>
                              <span>
                                Đặc biệt, chỉ khi kh&aacute;ch h&agrave;ng
                                nghiệm thu v&agrave; ho&agrave;n to&agrave;n
                                h&agrave;i l&ograve;ng th&igrave; b&ecirc;n
                                ph&iacute;a c&ocirc;ng ty vệ sinh c&ocirc;ng
                                nghiệp Cần Thơ mới nhận thanh to&aacute;n.
                                Đ&acirc;y l&agrave; một trong số những ưu điểm
                                m&agrave; &iacute;t c&oacute; thể t&igrave;m
                                thấy được ở c&ocirc;ng ty n&agrave;o tr&ecirc;n
                                thị trường hiện nay.
                              </span>
                            </li>
                          </ul>
                        </div>
                      ) : open === 4 ? (
                        <></>
                      ) : null}
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeService2;
