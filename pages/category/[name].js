import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Category from "../../components/Category";

const Categori = ({ data }) => {
  return (
    <div className=" ">
      <Navbar />
      <Category data={data} />
      <Footer />
    </div>
  );
};

export default Categori;

export async function getServerSideProps({ query }) {
  const name = query.name; // get the name parameter from the query object

  // Fetch data from external API based on the dynamic name parameter
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data: data.meals,
    },
  };
}
