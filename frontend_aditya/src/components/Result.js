import React, { useState } from 'react';

const searches = [
  {
    topic: 'Lorem Ipsum-1',
    description: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    topic: 'Lorem Ipsum-2',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    topic: 'Lorem Ipsum-3',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    topic: 'Lorem Ipsum-4',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    topic: 'Lorem Ipsum-5',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
];

const Result = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredDiv(id);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    searches.map((search, id) => (
      <div
        key={id}
        className={` w-full h-20 pb-4 border border-[#FFE875] px-4 pt-4 my-6 rounded-lg relative overflow-hidden`}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
        style={{
          height: hoveredDiv === id ? '30vh' : '',
          border: hoveredDiv === id ? '2px solid' : '1px solid',
          transitionDuration: '0.4s',
          transitionProperty: 'all',
        }}
      >
        <p className="w-9/12 h-1/4 text-2xl">{search.topic}</p>
        <p className="mt-2 w-8/12 h-fit font-thin pt-4">{search.description}</p>
        <iframe
          src="https://tailwindcss.com/docs/border-radius"
          style={{
            opacity: hoveredDiv === id ? 1 : 0,
            transitionDuration: '0.4s',
          }}
          className="w-3/12 h-3/4 absolute top-4 right-0 mr-2"
          scrolling="no"
        />
      </div>
    ))
  );
};

export default Result;
