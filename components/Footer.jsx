import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600	text-center dark:bg-neutral-700 lg:text-left mt-4">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Meals from us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
