import React from "react";
import img3 from "../images/footer.svg"
import insta from "../images/insta.svg"
import linkdien from "../images/Vector.svg"
import twitter from "../images/twitter.svg"
const Footer=()=>{
    return(
        <div class="w-full bg-[#FFE875] h-20 flex absolute bottom-0 mt-4 -mb-28">
        
        <div class="w-1/5 h-full bg-inherit flex flex-col justify-center mx-4" >
          <p class="text-[#000000] w-full h-fit bg-inherit text-sm">© 2024 SWC, IITG</p>
          <img class="bg-[#FFE875] w-1/2" src={img3} alt="swc-comittee"></img>
        </div>
        
        <div class="w-3/5 h-full bg-inherit flex items-center justify-center">
          <p class="text-[#000000] w-3/4 h-fit bg-inherit text-center">Crafted with care by Students' Web Committee, IITG</p>
        </div>
        <div class="w-1/5 h-full bg-inherit flex justify-end mr-6">
          <img class=" hover:cursor-pointer bg-[#FFE875] w-4 mx-1" src={insta} alt="social-media-icons"></img>
          <img class=" hover:cursor-pointer bg-[#FFE875] w-4 mx-1" src={linkdien} alt="social-media-icons"></img>
          <img class=" hover:cursor-pointer bg-[#FFE875] w-4 mx-1" src={twitter} alt="social-media-icons"></img>
        </div>
      </div>
    )
}
export default Footer;