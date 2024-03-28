import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Header from './components/Header';
import Search_cont from './components/Search_cont';
import Footer from './components/Footer';

function App() {

  const [showSearchCont, setShowSearchCont] = useState(true);

  const handleSearch = (searchText) => {
    // You can add additional logic here based on user input if needed
    setShowSearchCont(searchText === ''); // Hide Search_cont when searchText is not empty
  };



  return (
    <div class="App w-screen h-screen relative">
      {/*Header-section start*/}
      <Header onSearch={handleSearch} />
      {/*Header-section Ends*/}

      {/*Main-container section starts*/}

      {showSearchCont ? <Search_cont /> : <div class="w-9/12 h-fit mx-auto mt-10">
        <h1 class="text-3xl h-fit">Top results</h1>
        <Result />
      </div>}

      {/*Main-container section ends*/}




      {/*Footer section starts*/}

      <Footer />
      {/*Footer section ends*/}
    </div>
  );
}

export default App;
