import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Area3WebSiteItem = ({ texto1, texto2, leftorhight, align }) => {
  return (
    <div data-aos={`${leftorhight}`} className={`mb-8  ${align}`}>


      <div className="border-solid rounded-3xl m-4 border-4 border-blue-500 border-opacity-70 ">
        <p className="font-light mt-6 text-black dark:text-zinc-300">
          {texto1}
        </p>
        <p className="font-medium m-6 text-black dark:text-zinc-300">
          {texto2}
        </p>
        <div>
        </div>
      </div>



      


    </div>
  );
};

export default Area3WebSiteItem;
