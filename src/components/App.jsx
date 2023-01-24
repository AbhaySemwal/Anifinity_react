import React from "react";
import Navbar from "./Navbar";
import Spotlights from "./Spotlights";
import Trending from "./Trending";
import Category from "./Category";
import Upcoming_genres from "./Upcoming_genres";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Spotlights/>
      <Trending/>
      <Category/>
      <Upcoming_genres/>
      <Footer/>
    </div>
  );
}

export default App;
