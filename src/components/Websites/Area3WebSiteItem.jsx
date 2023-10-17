import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Area3WebSiteItem = ({ title, text, per }) => {
  return (
    <div className="mb-10 text-center">
      <div className="relative w-40 h-40 mx-auto scale-50">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="progress-ring__circle_a stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
          <circle className="progress-ring__circle stroke-current" strokeWidth="8" strokeLinecap="square" cx="50" cy="50" r="40" fill="transparent"
            strokeDashoffset={`calc(400 - (400 * ${per/1.62}) / 100)`}></circle>
        </svg>
      </div>
      <h6 className="text-black dark:text-zinc-100  text-2xl font-semibold">
        {title}
      </h6>
      <p className="font-light text-black dark:text-zinc-300">
        {text}
      </p>
    </div>
  );
};

export default Area3WebSiteItem;
