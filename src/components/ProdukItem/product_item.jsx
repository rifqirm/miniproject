import React, { Component } from "react"
import { Link } from "react-router-dom"
import Styles from  '../../styles/global.module.css'


const ProductItem = (props) => {
    return (
        <div className={Styles.item_product}>
            <div>
                <img src={props.image} alt={props.title} />
                <h4>{props.title}</h4>
                <h5>{props.price}</h5>
                <Link to='/keranjang'>BELI</Link>
                {/* <Link to={'cart/' + props.action}>BELI</Link> */}
            </div>
        </div>
    )
}

export default ProductItem