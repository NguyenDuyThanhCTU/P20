import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-no-repeat bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2F3.jpg?alt=media&token=acb7a4ee-4160-4678-ba1a-cae20089ebf1)] min-h-screen">
      <div className="bg-[rgba(255,255,255,0.8)] min-h-screen">
        <div className=" p:py-2 d:py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
