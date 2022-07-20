import { type } from "os";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  title: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Dropdown: React.FC<Props> = ({ title, onChange }) => {
  useEffect(() => {}, []);

  const { options } = useAppSelector((reducer) => ({
    options: reducer.categories.items,
  }));

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {title}
        </label>
      </div>
      <div className="md:w-2/3">
        <select
          onChange={onChange}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          name={title}
        >
          {options?.map((option) => (
            <option key={option.createdAt} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  id: "selectId",
  disabled: false,
  noneItem: true,
  defaultLabel: undefined,
};

export default Dropdown;