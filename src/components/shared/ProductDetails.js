import React, {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";

//Api
import {ContextProducts} from "../../context/ContextProductsProvider";

///Css
import "../../css/ProductDetails.scss";

const ProductDetails = () => {

    const products = useContext(ContextProducts)

    let params = useParams();
    let id = params.id;
    let data = products[id - 1];
    let {image, title, price, category, description} = data


    return (
        <div className="container-details">
            <img className="width-product" src={image} alt="product"/>
            <div className="container-t-de-ca">
                <h3 className="title-details">{title}</h3>
                <p className="description">{description}</p>
                <p className="category">Category: <span>{category}</span></p>
                <div className="price-link">
                    <span className="price-p-">{price} $</span>
                    <Link className="link-l-" to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;