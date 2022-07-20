import React from "react";
import InputArea from "../InputArea";
import Dropdown from "../Dropdown";

type Props = {
  onChangeText: (text: string) => void;
  onChangeDropdown: (text: string) => void;
};

const Search: React.FC<Props> = ({
  onChangeText,
  onChangeDropdown,
}) => {
  return (
    <div className="shadow-lg justify-between flex bg-white p-0 mt-5 ">
      <div className="flex flex-col justify-center items-center">
        <InputArea
          type="text"
          onChange={(e) => onChangeText(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <Dropdown onChange={(e) => onChangeDropdown(e.target.value)} />
      </div>
    </div>
  );
};

export default Search;
