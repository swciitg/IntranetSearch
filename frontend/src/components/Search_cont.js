import React, { useEffect , useState } from "react";
import '../App.css';
import cross from '../images_2/cross.png';
const visited_searches = [
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  }
]

const recent_searches=[
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  },
  {
    des: 'It is a long established fact that a reader will be distractIt is a long established fact that a reader will be distractIt is a long established'
  }
]
const Search_cont = () => {

  const [visitedArray,setVisitedArray]=useState(visited_searches);
  const [recentArray,setRecentArray]=useState(recent_searches);

  const handleRemove=(id,type)=>{
    if(type==='visited'){
    const updatedarray=[...visitedArray];
    updatedarray.splice(id,1);
    setVisitedArray(updatedarray);
    }
    else if(type==='recent'){
      const updatedarray=[...recentArray];
      updatedarray.splice(id,1);
      setRecentArray(updatedarray);
    }
  }
  
  return (
    <div class="main-container w-full  flex flex-col  lg:flex-row  lg:justify-center mt-20 h-fit" id="search-section">
      <div class="most-visited-container lg:w-6/12 lg:ml-3 text-center h-full">
        <h1 class="mb-4 h-fit text-4xl text-secondarycolor dark:text-primarycolor">Most Visited</h1>
        {visitedArray.map((search, id) => (
          <div class="mx-auto bg-white relative hover:bg-[#00AC91] w-11/12 h-16 rounded-xl my-2 inline-block align-middle flex items-center">
            <p class=" h-fit text-black w-5/6">{search.des.slice(0,80)+'...'}</p>
            <img src={cross} class="absolute right-4 hover:cursor-pointer"  onClick={()=>handleRemove(id,'visited')} ></img>
          </div>
        ))}
        
      </div>

      <div class="recent-searches-container lg:w-6/12 mt-8 lg:mr-3 lg:mt-0 text-center h-full  ">
        <h1 class="mb-4 h-fit text-4xl text-secondarycolor dark:text-primarycolor">Recent Searches</h1>
        {recentArray.map((search, id) => (
          <div class="mx-auto bg-white relative hover:bg-[#00AC91] w-11/12 h-16 rounded-xl my-2 inline-block align-middle flex items-center">
          <p class="bg-inherit h-fit text-black w-5/6">{search.des.slice(0,80)+'...'}</p>
          <img src={cross} class="absolute right-4 hover:cursor-pointer"  onClick={()=>handleRemove(id,'recent')} ></img>
        </div>
        ))}
      </div>
    </div>
  )
}
export default Search_cont;