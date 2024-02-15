import React, { useState } from 'react';
import icon from './Vector.png';

const Bookmarks = () => {
    const [startIndex, setStartIndex] = useState(0);

    
    const components = [
        { id: 1, name: ' 1' },
        { id: 4, name: ' 4' },
        { id: 3, name: ' 3' },
        { id: 2, name: ' 2' },
        { id: 5, name: ' 5' },
        { id: 6, name: ' 6' },
        { id: 7, name: ' 7' },
        { id: 8, name: ' 8' },
        { id: 9, name: ' 9' },
        { id: 10, name: ' 10' },
       
    ];

    const showComponents = () => {
        return components.slice(startIndex, startIndex + 9).map(component => (
            <div key={component.id} className="bg-white dark:bg-secondarycolor light:white w-32 h-32 rounded-2xl mb-3 relative">
                <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24 " class=" dark:stroke-white stroke-secondarycolor fill-white dark:fill-none absolute right-1"><path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
              </a>
               {}
                <p>{component.name}</p>
            </div>
        ));
    };

    const handleNext = () => {
        if (startIndex + 9 < components.length) {
            setStartIndex(startIndex + 9);
        }
    };

    const handlePrevious = () => {
        if (startIndex - 9 >= 0) {
            setStartIndex(startIndex - 9);
        }
    };

    return (
        <div className="w-560 aspect-square z-20 absolute top-20 right-12 bg-secondarycolor dark:bg-primarycolor rounded-2xl">
            <div className="flex items-center justify-center font-semibold text-4xl h-20 text-white dark:text-secondarycolor">
                Bookmarked
            </div>
            <div className="grid grid-cols-3 pl-10">
                {showComponents()}
            </div>
            {startIndex > 0 && (
                <button onClick={handlePrevious} class="absolute top-1/2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" class="fill-white dark:fill-secondarycolor "><path  d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg>
                </button>
            )}
             {startIndex + 9 < components.length && (
                <button onClick={handleNext} class="absolute top-1/2 right-0 ">
                <svg xmlns="http://www.w3.org/2000/svg"  class="fill-white dark:fill-secondarycolor" width="30" height="30" viewBox="0 0 20 20" ><path  d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/>
                </svg>
                </button>
             )}
            
        </div>
    );
};

export default Bookmarks;
