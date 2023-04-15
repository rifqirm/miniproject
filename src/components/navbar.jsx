import React, { Component } from "react"
import { Link } from "react-router-dom"
import Styles from "./styles/navbar.module.css"
import Logo from "../assets/logo.png"
import {FaShoppingCart} from "react-icons/fa"

class Navbar extends Component{
    render() {
        return(
            <div className={Styles.header}>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className={Styles.topmenu}>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/transaction">Transaction</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/">Homepage</Link></li> */}
                </ul>
                <div className={Styles.cart}>
                    <Link to="/cart"><FaShoppingCart /></Link>
                    
                </div>
            </div>
        )
    }
}

export default Navbar