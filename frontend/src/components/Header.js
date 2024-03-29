import React,{useState} from "react";
import img1 from "../images_2/swc.svg"
import img2 from "../images_2/iitg.svg"
const Header=({ onSearch })=>{
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    onSearch(inputText);
  };
    return(
        <div class="flex h-20 w-full  items-center justify-evenly mt-4 pl-2 pr-2">

        <div class="flex w-fit h-20 items-center">
          <img class="mx-2 w-12 xsm:w-16 sm:w-20 h-20 rounded-full  " src={img1} alt="swc image"></img>
          <img class="mx-2 w-12 xsm:w-16 sm:w-20 h-20 rounded-full  " src={img2}></img>
        </div>


        <div class="ml-8 w-9/12 h-28 flex items-center justify-center lg:justify-start">
          <input class="h-1/2 w-10/12 xsm:w-3/4 px-5 bg-[#FFE875]  shadow-md hover:shadow-yellow-200/50 searchBar " type="text" placeholder='Search'  onChange={handleInputChange}></input>
        </div>


        <h3 class="mr-2 font-bold text-xl xsm:text-xl w-1/12 h-auto hover:cursor-pointer">d.aditya</h3>


      </div>
    )
}
export default Header;