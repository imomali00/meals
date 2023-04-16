import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Meal = ({ data }) => {
  const router = useRouter();
  return (
    <div className="bg-white container mx-auto mt-3">
      {data.map((c) => (
        <div className="w-auto h-auto mx-1">
          <Image src={c.strMealThumb} width={400} height={300} />
          <h1 className="mt-4 text-3xl font-bold w-auto font-mono">
            {c.strMeal}
          </h1>
          <h3 className="mt-5 text-xl font-semibold">
            Category: {c.strCategory}
          </h3>
          <h3 className="mt-1 text-xl font-semibold">Area: {c.strArea}</h3>
          <p className="my-4 pb-4 w-auto h-auto">
            <b>Instructions:</b> {c.strInstructions}
          </p>
          <div>
            <h5 className="text-2xl font-bold mb-2">Video Recipe:</h5>
            <iframe
              src={`https://www.youtube.com/embed/${c.strYoutube.slice(-11)}`}
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={() => router.back()}
            className=" mt-12 py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Go Back
          </button>
        </div>
      ))}
    </div>
  );
};

export default Meal;
