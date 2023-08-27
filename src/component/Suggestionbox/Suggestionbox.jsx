import Style from "./Suggestionbox.module.css"
import girl from "../../assets/girl.svg"

function SuggestionBox() {
    return (
        <>
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
        </>
    )
}

export default SuggestionBox;