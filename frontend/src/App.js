import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import Bookmarks from './bookmarks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Darkmode from './darkmode'
import Result from './components/Result';
import Header from './components/Header';
import Search_cont from './components/Search_cont';


function App() {
    //search functionality
    const [showSearchCont, setShowSearchCont] = useState(true);

  const handleSearch = (searchText) => {
    // You can add additional logic here based on user input if needed
    setShowSearchCont(searchText === ''); // Hide Search_cont when searchText is not empty
  };
  
    // darkmode
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    // bookmarks
    const [isVisible, setIsVisible] = useState(true);
    const [statea, setStatea] = useState(false);
    const [stateb, setStateb] = useState(false);

    useEffect(() => {
        setShowNewComponent(statea || stateb);
    }, [statea, stateb]);

    const handleMouseEnter = () => {
        setStatea(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setStatea(false);
        }, 500);
    };

    const handleBookmarkEnter = () => {
        setStateb(true);
    };

    const handleBookmarkLeave = () => {
        setTimeout(() => {
            setStateb(false);
        }, 500);
    };

    const [showNewComponent, setShowNewComponent] = useState(false);

    return (
        <>
            <div className={darkMode ? 'dark' : ''}>
                <div className="flex flex-col justify-between items-center h-screen w-screen bg-primarycolor dark:bg-secondarycolor">
                    <div className="w-11/12 h-3/4 flex flex-col items-center justify-between">
                        <Navbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} showNewComponent={showNewComponent} />
                        <Darkmode onToggle={toggleDarkMode} />
                        <Content />
                    </div>
                    <div>
                        {showNewComponent && <Bookmarks onMouseEnter={handleBookmarkEnter} onMouseLeave={handleBookmarkLeave} />}
                    </div>
                   

                </div>
            </div>

            <div class="App w-screen h-screen relative bg-[#FFE875]">
            {/*Header-section start*/}
            <Header onSearch={handleSearch} />
            {/*Header-section Ends*/}
      
            {/*Main-container section starts*/}
      
            {showSearchCont ? <Search_cont /> : <div class="w-9/12 h-fit mx-auto mt-10 mb-20">
              <h1 class="text-3xl h-fit">Top results</h1>
              <Result />
            </div>}
      
            {/*Main-container section ends*/}
      
      
      
      
            {/*Footer section starts*/}
      
            <Footer /> 
            {/*Footer section ends*/}
          </div>


        </>


    );
}

export default App;
