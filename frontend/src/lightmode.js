const Lightmode = () => {
    return ( 

        <div class="absolute w-16 h-11  bg-primarycolor right-16 top-20 rounded-3xl">
            <div class="w-11 h-11 bg-primarycolor rounded-3xl">
                <div class="w-7 h-7 bg-secondarycolor rounded-3xl absolute left-1 top-2 flex justify-center items-center">
                    <button onClick = {toggleDarkMode}>
        <img src={Darkicon} class="w-4 h-4"  >

        </img>
        </button>
        </div>
        </div>
        </div>
     );
}
 
export default Lightmode;