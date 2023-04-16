import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Category = ({ data }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 h-auto container mx-auto gap-1">
        {data.map((c) => (
          <div
            key={c.idMeal}
            className="relative h-auto w-full sm:w-auto overflow-hidden border-solid border-2 drop-shadow-2xl border-black  text-black mt-4 rounded-lg"
          >
            <Image
              src={c.strMealThumb}
              width={500}
              height={400}
              alt={c.strMeal}
            />
            <h3 className="text-md font-semibold h-[100px] my-3 ml-2 font-monos">
              {c.strMeal}
            </h3>
            <button
              onClick={() => router.push(`/meal/${c.idMeal}`)}
              class="absolute bottom-0 mb-2 ml-1 py-2 px-4 bg-lime-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Watch resipe
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.back()}
        className=" mt-12 py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Go Back
      </button>
    </div>
  );
};

export default Category;
