import React, { createContext, useEffect, useState } from "react";
import Homepage from "./page/Homepage/Homepage";
import Style from "./App.module.css";
import ResultPage from "./page/Resultpage/Resultpage";

export const UserContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const fetchProduct = () => {
    try {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log("error fetching product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className={Style.App}>
      <UserContext.Provider value={{ products }}>
        {/* <Homepage /> */}

        <ResultPage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
