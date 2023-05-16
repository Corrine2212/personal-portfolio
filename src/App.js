// import logo from './logo.svg';
import './App.css';
import React from 'react';
import PortfolioContainer from './containers/PortfolioContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import PopUp from './components/PopUp';



function App() {
  return (
    <div className="App">
      
      {/* <PopUp /> */}
      <NavBar />
      <PortfolioContainer />
      <Footer />

    </div>
  );
}

export default App;

