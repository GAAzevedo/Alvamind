import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Area3WebSiteItem = ({ texto1, texto2, texto3, texto4, align }) => {
  return (
    <div data-aos="fade-up" className={`mb-8 columns-2  ${align}`}>


      <div className="">
        <p className="bg-red-500 font-light mb-4 text-black dark:text-zinc-300">
          {texto1}
        </p>
        <p className="bg-blue-500 font-medium mb-4 text-black dark:text-zinc-300">
          {texto2}
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium text-black hover:text-cyan-500 dark:text-zinc-300"
          >
            Ler Mais
            <FaChevronRight />
          </a>
        </div>
      </div>



      <div className="">
        <p className="bg-purple-500 font-light mb-4 text-black dark:text-zinc-300">
          {texto3}
        </p>
        <p className=" bg-amber-700 font-medium mb-4 text-black dark:text-zinc-300">
          {texto4}
        </p>
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium text-black hover:text-cyan-500 dark:text-zinc-300"
          >
            Ler Mais
            <FaChevronRight />
          </a>
        </div>
      </div>


    </div>
  );
};

export default Area3WebSiteItem;
