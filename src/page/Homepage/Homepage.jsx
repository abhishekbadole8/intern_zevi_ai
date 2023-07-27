import { useRef, useState } from "react";
import Style from "./Homepage.module.css"
import girl from "../../assets/girl.svg"
function Homepage() {
    const [inputValue, setInputValue] = useState('')
    const [isSuggestion, setIsSuggestion] = useState(false)
    const closeSuggestionBox = useRef()

    const CloseSuggestionBox = (e) => {
        if (e.target == closeSuggestionBox.current) setIsSuggestion(false)
    }

    return (
        <div className={Style.homepage}>

            <img src="" alt="" />

            <div className={Style.searchContainer}
                ref={closeSuggestionBox} onClick={CloseSuggestionBox}>

                <input type="text" placeholder="Search"
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setIsSuggestion(true)}
                />

                {/* Suggestion Box */}
                {isSuggestion &&
                    <div className={Style.suggestionContainer} >

                        <div className={Style.suggInnerInnerContainer}>
                            <h5><b>Latest Trends</b> </h5>

                            <div className={Style.trendingProductShow}>

                                {/* 1st  */}
                                <div className={Style.trendingSingleProduct}>
                                    <img src={girl} alt="" />

                                    <p>Shirt with puffed sleeves</p>
                                </div>

                                {/* 2nd */}
                                <div className={Style.trendingSingleProduct}>
                                    <img src={girl} alt="" />

                                    <p>Shirt with puffed sleeves</p>
                                </div>

                            </div>
                        </div>

                        <div className={Style.suggInnerInnerContainer}>
                            <h5><b>Popular Suggestions</b> </h5>

                            <ul>
                                <li>Striped shirt dress</li>
                                <li>Satin shirts</li>
                                <li>Striped shirt dress</li>
                                <li>Striped shirt dress</li>
                            </ul>
                        </div>

                    </div>
                }
            </div>

        </div>
    )
}

export default Homepage;