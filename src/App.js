// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import CakeCategories from './components/CakeCategories';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/categories" element={<CakeCategories />} />
                <Route path="/cake/:id" element={<CakeDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

