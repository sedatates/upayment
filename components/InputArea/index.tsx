import { NextPage } from "next";
import React from "react";

type Props = {
  title?: string;
  type?: string;
  style?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputArea: NextPage<Props> = ({
  title,
  onChange,
  type = "text",
  style,
  placeholder,
}) => {
  return (
    <div className={`md:flex md:items-center m-4  ${style}`}>
      {title && (
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            {title}
          </label>
        </div>
      )}

      <div className=" md:w-2/3">
        <input
          onChange={onChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type={type}
          name={title}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputArea;
