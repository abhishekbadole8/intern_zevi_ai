import { useRef, useState } from "react";
import Style from "./Homepage.module.css"

import SuggestionBox from "../../component/Suggestionbox/Suggestionbox";
function Homepage() {

    const [inputValue, setInputValue] = useState('') // Input Value Store Here
    const [isSuggestion, setIsSuggestion] = useState(false) // Suggestion Box Check
    const closeSuggestionBox = useRef()

    const CloseSuggestionBox = (e) => {
        if (e.target == closeSuggestionBox.current) setIsSuggestion(false)
    }

    return (
        <div className={Style.homepage}>

            <div className={Style.searchContainer}
                ref={closeSuggestionBox} onClick={CloseSuggestionBox}>

                <input type="text" placeholder="Search"
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setIsSuggestion(true)}
                />

                {isSuggestion && <SuggestionBox />}

            </div>

        </div>
    )
}

export default Homepage;