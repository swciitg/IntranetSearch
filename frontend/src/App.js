import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Content from './Components/content'
import Bookmarks from './Components/bookmarks'
import Layout from './pages/Layout'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Darkmode from './darkmode'
import MostVisited from './Components/mostVisited'
import RecentSearches from './Components/recentSearches'
import ReactDOM from "react-dom/client";
function App() {
    // darkmode

    return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/> }>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    
       
    );
}

export default App;

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

