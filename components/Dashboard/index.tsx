import Image from "next/image";
import React from "react";

type Props = {
  data: Array<any>;
};

const Dashboard: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {data?.map((item: any) => (
        <div
          key={item.id}
          className="rounded-lg shadow-lg bg-white max-w-7xl flex flex-col"
        >
          <Image
            className="rounded-t-lg"
            src={`${item.avatar}`}
            alt=""
            width={300}
            height={300}
            objectFit="cover"
            objectPosition={"top"}
            unoptimized={true}
          />
          <div className="flex-1 p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium leading-6 text-gray-900">
                {item.name}
              </h3>
              <p className="mt-2 font-bold leading-6 text-gray-400">
                {`${item.price} $`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Dashboard.defaultProps = {
  data: [],
};

export default Dashboard;
