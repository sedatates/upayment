import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../components";
import { deleteProductService } from "../redux/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const DetailsPage: NextPage = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const deleteProduct = (id: number) => {
    dispatch(deleteProductService(id));
    console.log("deleteProductService", id);
    router.push("/");
  };

  const { id } = router.query;
  const { data } = useAppSelector((reducer: any) => ({
    data: reducer.products.items.find((item: any) => item.id === id),
  }));
  return (
    <div className="flex justify-center">
      <div className="container">
        <Header title="Details" subtitle="Register" />

        <div className="flex flex-col md:flex-row rounded-lg shadow-lg shadow-slate-400 drop-shadow-lg mt-10">
          <div key={data?.id} className=" bg-white max-w-7xl flex flex-row ">
            {data?.avatar && (
              <Image
                className="rounded-t-lg"
                src={`${data?.avatar}`}
                alt=""
                width={600}
                height={600}
                objectFit="contain"
                unoptimized={true}
              />
            )}
          </div>
          <div className="flex flex-col w-full bg-slate-100 justify-between  p-4 text-center md:text-left">
            <div className="flex bg-slate-100 justify-between items-center">
              <h1 className="font-medium text-xl md:text-6xl text-gray-900">
                {data?.name}
              </h1>
              <button
                onClick={() => deleteProduct(data.id)}
                className="h-12 w-fit bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
              >
                Delete
              </button>
            </div>

            <div className="">
              <h2 className="font-medium text-xl md:text-3xl text-gray-500">
                Category
              </h2>
              <h2 className="text-gray-900 font-thin text-2xl md:text-3xl">
                {data?.category}
              </h2>
            </div>

            <div className="">
              <h2 className="font-medium text-xl md:text-3xl text-gray-500">
                Description
              </h2>
              <p className="text-gray-900 font-thin text-2xl md:text-3xl">
                {data?.description}
              </p>
            </div>

            <div className="">
              <p className="my-4 font-semibold leading-6 text-5xl text-gray-400">
                {`${data?.price} $`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
