import { useContext, useState, useEffect } from "react";
import DisplayProduct from "../../component/Displayproduct/Displayproduct";
import FilterBox from "../../component/FilterBox/FilterBox";
import Style from "./Resultpage.module.css"
import { UserContext } from "../../App";

function ResultPage() {
    const { products } = useContext(UserContext)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [inputValue, setInputValue] = useState('')

    // Filter products based on selected categories and prices
    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        
        return categoryMatch 
    });

    return (
        <div className={Style.resultPage}>
            <div className={Style.searchHead}>

                <input type="text" placeholder="Search" onChange={(e) => setInputValue(e.target.value)} />

            </div>

            <div className={Style.showResultContainer}>

                <h2> Search Results</h2>

                <div className={Style.showResultInnerCont}>

                    <FilterBox selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} selectedPrices={selectedPrices} setSelectedPrices={setSelectedPrices} />
                    <DisplayProduct filteredProducts={filteredProducts} />

                </div>

            </div>
        </div>
    )
}

export default ResultPage;