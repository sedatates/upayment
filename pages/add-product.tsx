import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, Header, InputArea } from "../components";
import { addProductService } from "../redux/features/productsSlice";
import { useAppDispatch } from "../redux/hooks";

const AddProduct = () => {
  const [params, setParams] = useState({
    name: "",
    price: 0,
    description: "",
    category: "Electronics",
    avatar: "",
    developerEmail: "123@gmail.com",
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {

    if (params.name.length === 0) {
      alert("Name is required");
      return;
    }
    if (params.price === 0) {
      alert("Price is required");
      return;
    }
    if (params.description.length === 0) {
      alert("Description is required");
      return;
    }
    if (params.category.length === 0) {
      alert("Category is required");
      return;
    }
    if (params.avatar.length === 0) {
      alert("Avatar is required");
      return;
    }
    if (typeof params.price !== "number") {
      setParams({ ...params, price: parseInt(params.price) });
      return;
    }
    dispatch(addProductService(params));
    setTimeout(() => {
      router.push("/");
    }, 1000);

    console.log(params);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="container justify-center items-center flex flex-col">
        <Header subtitle="React-task" title="Add Product"  />
        <div className="w-full max-w-3xl flex flex-col gap-5">
          <form className="w-full max-w-3xl mt-10 shadow-2xl p-4 rounded-2xl flex flex-col">
            <InputArea title="name" onChange={handleChange} />
            <InputArea type="number" title="price" onChange={handleChange} />
            <InputArea title="description" onChange={handleChange} />
            <Dropdown title="category" onChange={handleChange} />
            <InputArea title="avatar" onChange={handleChange} />
          </form>
          <button
            className="bg-black text-white rounded-full p-4 "
            onClick={handleSubmit}
          >
            <p className="text-white text-2xl">Add Product</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
