import Catergories from "../components/Catergories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  return (
    <div className="">
      <Navbar />

      <Catergories data={data} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      data: data.categories,
    },
  };
}
