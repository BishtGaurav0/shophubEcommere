import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import Slider from "../../Components/Slider/Slider";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <Slider />
      <ProductList />
    </div>
  );
};

export default Home;
