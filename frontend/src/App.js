import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import Bookmarks from './bookmarks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Darkmode from './darkmode'
import MainContent from './components/MainContent'

function App() {
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
        <div className={darkMode ? 'dark' : ''}>
            <div className="flex flex-col justify-between items-center h-screen w-screen bg-primarycolor dark:bg-secondarycolor">
                <div className="w-11/12 h-3/4 flex flex-col items-center justify-between">
                    <Navbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  showNewComponent={showNewComponent} />
                    <Darkmode onToggle={toggleDarkMode} />
                    <Content />
                </div>
                <div>
                    {showNewComponent && <Bookmarks onMouseEnter={handleBookmarkEnter} onMouseLeave={handleBookmarkLeave} />}
                </div>
                <MainContent isDark={darkMode} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
