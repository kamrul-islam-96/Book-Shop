import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import BookList from "./Components/BookList";
import Footer from "./Components/Footer";
import { useState } from "react";
import React from 'react';


function App() {
  const [cart, setCart] = React.useState([]);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const books = [
    { id: 1, name: "Physics 1st Paper", subject: "Physics", board: "Dhaka", class: "HSC", price: 300, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Chemistry 2nd Paper", subject: "Chemistry", board: "Chittagong", class: "HSC", price: 250, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Honours Mathematics", subject: "Mathematics", board: "Dhaka", class: "Honours", price: 400, image: "https://via.placeholder.com/150" },
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <HeroBanner />
      <BookList books={books} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;

