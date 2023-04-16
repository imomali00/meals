import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Meal from "../../components/Meal";

const Meals = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <Navbar />
      <Meal data={data} />
      <Footer />
    </div>
  );
};

export default Meals;

export async function getServerSideProps({ query }) {
  const idMeal = query.id;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await res.json();

  return {
    props: {
      data: data.meals,
    },
  };
}
