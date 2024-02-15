import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import Bookmarks from './bookmarks'
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import showNewComponent from './navbar'
import Darkmode from './darkmode'



function App() {

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      return(darkMode)
      }
  console.log(darkMode)

  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleIconClick = () => {
    setShowNewComponent(!showNewComponent);

  };
  
console.log(showNewComponent)



  return (
    
   <div className = {darkMode && "dark"}>
    <div class="flex flex-col justify-between items-center  h-screen w-screen bg-primarycolor dark:bg-secondarycolor">
      
    
<div class="w-11/12  h-3/4 flex flex-col items-center justify-between">


<Navbar onIconClick={handleIconClick} />





<Darkmode onToggle={toggleDarkMode} />




<Content    />









</div >


<div>
{showNewComponent && <Bookmarks />}
</div>
<Footer/>
    </div>
    </div>
  );
}

export default App;
