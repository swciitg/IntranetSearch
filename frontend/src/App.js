import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import Bookmarks from './bookmarks';
import Darkmode from './darkmode';
import MainContent from './components/MainContent';

function App() {
    // darkmode
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

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
        <Router>
            <div className={darkMode ? 'dark' : ''}>
                <div className="flex flex-col justify-between items-center h-screen w-screen bg-primarycolor dark:bg-secondarycolor">
                    <div className="w-11/12 h-3/4 flex flex-col items-center justify-between">
                        {/* Always display Navbar and Darkmode toggle */}
                        <Navbar onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} showNewComponent={showNewComponent} />
                        <Darkmode onToggle={toggleDarkMode} />

                        {/* Routing Setup */}
                        <Switch>
                            {/* Route for Home (/) */}
                            <Route exact path="/">
                                <Content />
                            </Route>

                            {/* Route for Search (/search) */}
                            <Route path="/search">
                                <MainContent isDark={darkMode} />
                            </Route>
                        </Switch>
                    </div>

                    {/* Bookmarks show on both routes */}
                    <div>
                        {showNewComponent && (
                            <Bookmarks onMouseEnter={handleBookmarkEnter} onMouseLeave={handleBookmarkLeave} />
                        )}
                    </div>

                    {/* Always display Footer */}
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
