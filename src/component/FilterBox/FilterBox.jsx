import { useContext, useRef } from "react";
import { UserContext } from "../../App"
import Style from "./Filterbox.module.css"
import { GoChevronDown } from "react-icons/go";
import { AiTwotoneStar } from "react-icons/ai";

function FilterBox({ selectedCategories, setSelectedCategories,setSelectedPrices }) {

    const { products } = useContext(UserContext)
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    const closeCategoryFilter = useRef()
    const closePriceFilter = useRef()
    const closeRatingFilter = useRef()

    function capitalizeFirstAndAfterSpace(str) {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    function handleCategorySelection(category) {
        
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter((selectedCategory) => selectedCategory !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    }

    function handlePriceSelection(price) {
      setSelectedPrices((prevSelectedPrices)=>{
        
      })
    }
    
    // Hide Clicked filter header
    function hideClickedFilter(filterType) {
        if (filterType == "category") closeCategoryFilter.current.style.display = closeCategoryFilter.current.style.display === "none" ? "block" : "none";
        if (filterType == "price") closePriceFilter.current.style.display = closePriceFilter.current.style.display === "none" ? "block" : "none";
        if (filterType == "rating") closeRatingFilter.current.style.display = closeRatingFilter.current.style.display === "none" ? "block" : "none";
    }

    return (
        < div className={Style.filterContainer}>

            {/* Category */}
            <div className={Style.brandFilter}>

                <div className={Style.filterTop} onClick={() => hideClickedFilter("category")} >
                    <span className={Style.filterHeading}>CATEGORY</span>
                    <span><GoChevronDown /></span>
                </div>

                <ul className={Style.brandList} ref={closeCategoryFilter}>
                    {uniqueCategories.map((category, i) => {
                        return (
                            <li className={Style.brandListSingle} key={i}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategorySelection(category)}>
                                <label >
                                    <input type="checkbox" />
                                    <p>{capitalizeFirstAndAfterSpace(category)}</p>
                                </label>
                            </li>)
                    })}
                </ul>

            </div>

            {/* Price */}
            <div className={Style.brandFilter}>

                <div className={Style.filterTop} onClick={() => hideClickedFilter("price")}>

                    <span className={Style.filterHeading}>
                        Price range</span>

                    <span><GoChevronDown /></span>

                </div>

                <ul className={Style.brandList} ref={closePriceFilter}>

                    <li className={Style.brandListSingle} onClick={()=>handlePriceSelection("upto_500")}>
                        <label >
                            <input type="checkbox" />
                            <p>upto 500</p>
                        </label>
                    </li>

                    <li className={Style.brandListSingle} onClick={()=>handlePriceSelection("1000_to_3000")}>
                        <label >
                            <input type="checkbox" />
                            <p>1000 to 3000</p>
                        </label>
                    </li>

                </ul>

            </div>

            {/* Rating */}
            <div className={Style.brandFilter}>

                <div className={Style.filterTop} onClick={() => hideClickedFilter('rating')}>

                    <span className={Style.filterHeading}>
                        Raiting</span>

                    <span><GoChevronDown /></span>

                </div>

                <ul className={Style.brandList} ref={closeRatingFilter}>

                    <li className={Style.brandListSingle}>
                        <label >
                            <input type="checkbox" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />

                        </label>
                    </li>

                    <li className={Style.brandListSingle}>
                        <label >
                            <input type="checkbox" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#CDCCC8" />
                        </label>
                    </li>
                    <li className={Style.brandListSingle}>
                        <label >
                            <input type="checkbox" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />

                        </label>
                    </li>
                    <li className={Style.brandListSingle}>
                        <label >
                            <input type="checkbox" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />
                        </label>
                    </li>
                    <li className={Style.brandListSingle}>
                        <label >
                            <input type="checkbox" />
                            <AiTwotoneStar color="#FDD33D" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />
                            <AiTwotoneStar color="#CDCCC8" />
                        </label>
                    </li>



                </ul>

            </div>

        </div>
    )
}

export default FilterBox;