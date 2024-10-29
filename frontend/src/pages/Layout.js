import React, { useState, useEffect } from 'react'


import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Content from '../Components/content'
import Bookmarks from '../Components/bookmarks'
import Darkmode from '../darkmode'
import MostVisited from '../Components/mostVisited'
import RecentSearches from '../Components/recentSearches'
function Layout() {

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


  //recent and most visited
  const [mostVisited, setMostVisited] = useState([
      "Home Page",
      "Profile",
      "Settings",
      "Dashboard",
      "Notifications",
    ]);
  
    const [recentSearches, setRecentSearches] = useState([
      "React documentation",
      "Node.js tutorials",
      "Best practices in CSS",
      "JavaScript async/await",
    ]);
    const removeMostVisited = (index) => {
      setMostVisited(mostVisited.filter((_, i) => i !== index));
    };
  
    const removeRecentSearch = (index) => {
      setRecentSearches(recentSearches.filter((_, i) => i !== index));
    };
  

    return (
      <>

<div className={darkMode ? 'dark' : ''}>
            <div className="flex flex-col justify-between items-center h-screen w-screen bg-primarycolor dark:bg-secondarycolor">
                <div className="w-11/12 h-1/5 flex flex-col items-center ">
                    <Navbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  showNewComponent={showNewComponent} />
                </div>
                <main className="flex justify-content-space-between mt- p-1/12 w-11/12 pl-1/6 pr-1/6 bg-primarycolor text-secondarycolor dark:text-primarycolor dark:bg-secondarycolor">
        <MostVisited data={mostVisited} removeItem={removeMostVisited} />
        <RecentSearches data={recentSearches} removeItem={removeRecentSearch} />
      </main>
      <Darkmode onToggle={toggleDarkMode} />


                <Footer />
            </div>
        </div>
        </>
  )
};

export default Layout;
