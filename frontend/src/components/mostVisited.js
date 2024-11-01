import React from "react";

import Darkmode from '../darkmode'
import darkmode from '../App'



const MostVisited = ({ data, removeItem }) => {
  return (
    <section className="w-1/2  h-1/2 ">
      <h2 className="text-2xl font-bold text-center dark:bg-secondarycolor bg-primarycolor pr-15 text-yellow  mb-5">Most Visited</h2>
      <ul className="space-y-3 overflow-auto h-60">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-black dark:text-black mr-10 items-center p-4 m-1/13 bg-gray-800 rounded-lg bg-white"
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              className=" text-xl font-bold"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MostVisited;
