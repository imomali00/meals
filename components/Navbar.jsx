import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-orange-600 flex items-center justify-between  py-4 lg:px-12 shadow border-solid  ">
      <div>
        <span className="text-white text-3xl font-bold">
          <Link href={"/"}>Meals</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
