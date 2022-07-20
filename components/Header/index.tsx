import React from "react";
import router from "next/router";

type Props = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Props> = ({ title, subtitle }) => {
  const handleGoToHome = () => {
    router.push("/");
  };

  return (
    <div className="shadow-lg justify-between flex items-center bg-white p-4 mt-4 w-full">
      <div
        className="text-zinc-500 text-xl md:text-3xl font-medium text-center cursor-pointer"
        onClick={handleGoToHome}
      >
        Upayments Store
      </div>
      <div className="text-zinc-500 font-normal text-l md:text-2xl text-center">
        {title}
      </div>
      <div className="text-zinc-500 font-normal text-l md:text-2xl text-center ">
        {subtitle}
      </div>
    </div>
  );
};

export default Header;
