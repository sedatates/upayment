import React from "react";
import Image from "next/image";
import Logo from "../../public/vercel.svg";

//import styles from "../RiseTechHeader/styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="shadow-lg justify-between flex items-center bg-white p-4 mt-4 w-full md:w-11/12 ">
      <div className="text-zinc-500 text-xl md:text-3xl font-medium text-center">
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
