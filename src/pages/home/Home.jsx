import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <Banner></Banner>
      <Categories></Categories>
      <SpecialDishes></SpecialDishes>
    </div>
  );
};

export default Home;
