import React from "react";

import Darkmode from '../darkmode'
import darkmode from '../App'



const RecentSearches = ({ data, removeItem }) => {
  return (
    <section className="w-1/2">
      <h2 className="text-2xl font-bold text-center	 mb-5">Recent Searches</h2>
      <ul className="space-y-3 overflow-auto h-60">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 ml-10 bg-white bg-gray-800 rounded-lg"
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 text-xl font-bold"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentSearches;
