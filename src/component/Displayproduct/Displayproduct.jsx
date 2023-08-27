import Style from "./Displayproduct.module.css"
import girl from "../../assets/girl.svg"
import { BsSuitHeart } from "react-icons/bs";
import { useContext, useState } from "react";
import { UserContext } from "../../App"
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

function DisplayProduct({ filteredProducts }) {
    const { products } = useContext(UserContext)

    const [wishlist, setWishlist] = useState({});

    const toggleWishlist = (productId) => {
        setWishlist((prevWishlist) => ({
            ...prevWishlist,
            [productId]: !prevWishlist[productId],
        }));
    };

    return (
        <div className={Style.DisplayProductContainer}>

            {filteredProducts.map((product) => {

                const { id, title, price, category, image } = product
                const isWishlist = wishlist[id] || false;
                return (

                    <div className={Style.productBase} key={id}>

                        <div className={Style.productBaseImg}>

                            <img src={image} alt="product-img" />

                            <div className={Style.wishlist} onClick={() => toggleWishlist(id)}>
                                {isWishlist ?
                                    <AiTwotoneHeart size={20} color="ff0000" />
                                    : <AiOutlineHeart size={20} />}
                            </div>

                        </div>

                        <div className={Style.productBaseDetail}>

                            <p className={Style.productName}>{title}</p>

                            <p><span className={Style.mrpCut}> Rs. <del>599</del>  </span> <b>Rs. {price}</b> </p>

                            <p className={Style.raiting}>
                                <AiTwotoneStar color="#FDD33D" />
                                <AiTwotoneStar color="#FDD33D" />
                                <AiTwotoneStar color="#FDD33D" />
                                <span>({product.rating.count})</span>
                            </p>

                        </div>
                    </div>

                )
            })}



        </div>
    )
}

export default DisplayProduct;