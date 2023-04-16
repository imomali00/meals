import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Catergories = ({ data }) => {
  const router = useRouter();
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 h-auto container mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
      {data.map((c) => (
        <div
          key={c.idCategory}
          className="relative border-solid border-2 drop-shadow-2xl border-black  h-[500px] w-full sm:w-[400px] lg:w-auto  overflow-hidden   text-black mt-4 rounded-lg"
        >
          <Image
            src={c.strCategoryThumb}
            width={500}
            height={400}
            alt={c.strCategory}
          />
          <div className="w-auto- sm:w-[380px] mx-auto lg:w-auto ml-1">
            <h3 className="text-2xl font-semibold my-3 ml-2 font-mono text-center">
              {c.strCategory}
            </h3>
            <p className="text-sm sm:text-base">
              {c.strCategoryDescription.slice(0, 220)}...
            </p>
          </div>
          <button
            onClick={() => router.push(`/category/${c.strCategory}`)}
            className="absolute bottom-0 mb-2 ml-1 sm:ml-1 py-2 px-4 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Watch Catergory
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catergories;
