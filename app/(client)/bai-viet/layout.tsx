import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-no-repeat bg-contain bg-bottom bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2F4.jpg?alt=media&token=28fdc74f-2f48-4466-b8f8-5b0e3af81b2f)] ">
      <div className="bg-[rgba(255,255,255,0.8)] ">
        <div className=" p:py-2 d:py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
