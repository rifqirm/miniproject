import React, { Component } from 'react'
import  { Link } from "react-router-dom"
import Styles from  '../components/styles/global.module.css'
import ProductItem from '../components/product_item'

import product1 from "../assets/product/1aglonemaAyunindi.jpg"
import product2 from "../assets/product/2aglonemaBigroy.jpg"
import product3 from "../assets/product/3aglonemaKhocin.jpg"
import product4 from "../assets/product/4aglonemaRedAnjamaniDewasa.jpg"
import product5 from "../assets/product/5aglonemaRedChocin.jpg"
import product6 from "../assets/product/6aglonemaRedMajesty.jpg"
import product7 from "../assets/product/7aglonemaRoDudAnjamani.jpg"
import product8 from "../assets/product/8aglonemaRotundumAceh.jpg"
import product9 from "../assets/product/9aglonemaSnowWhiteRemaja.jpg"
import product10 from "../assets/product/10aglonemaSuksom.jpg"
import product11 from "../assets/product/11aglonemaSuperWhite.jpg"
import product12 from "../assets/product/12aglonemaVenus.jpg"

import product_1 from "../assets/product_blank_href/aglonemaAyunindi.jpg"
import product_2 from "../assets/product_blank_href/aglonemaBigroy.jpg"
import product_3 from "../assets/product_blank_href/aglonemaKhocin.jpg"
import product_4 from "../assets/product_blank_href/aglonemaRedAnjamaniDewasa.jpg"
import product_5 from "../assets/product_blank_href/aglonemaRedChocin.jpg"
import product_6 from "../assets/product_blank_href/aglonemaRedMajesty.jpg"
import product_7 from "../assets/product_blank_href/aglonemaRoDudAnjamani.jpg"
import product_8 from "../assets/product_blank_href/aglonemaRotundumAceh.jpg"
import product_9 from "../assets/product_blank_href/aglonemaSnowWhiteRemaja.jpg"
import product_10 from "../assets/product_blank_href/aglonemaSuksom.jpg"
import product_11 from "../assets/product_blank_href/aglonemaSuperWhite.jpg"
import product_12 from "../assets/product_blank_href/aglonemaVenus.jpg"
import { FaShippingFast, FaFunnelDollar, FaUserShield  } from "react-icons/fa"
import search from "../assets/search.png"
import home_banner3 from "../assets/home_banner3.jpg"
import home_banner4 from "../assets/home_banner4-removebg.png"
import LogoFooter from "../assets/logo-demeter-footer.png"


class ProductPage extends Component {
    render() {
        return(
           <>
               <div className={Styles.wrapper}>
                   <div className={Styles.row}>
                       <div className={Styles.cart}>
                           <div className={Styles.input_group1}>
                                <input type="search" placeholder="🔍 Search Product..." />
                                <button>Search</button>
                            </div>
                       </div>
                   </div>
                   <div className={Styles.row}>
                       <div className={Styles.grid_product}>
                           <ProductItem image={product1} title="Aglonema Ayunindi" price="IDR 35.000" action="detail_link_sample1" />
                           <ProductItem image={product2} title="Aglonema Bigroy" price="IDR 60.000" action="detail_link_sample2" />
                           <ProductItem image={product3} title="Aglonema Khocin" price="IDR 60.000" action="detail_link_sample3" />
                           <ProductItem image={product4} title="Aglonema Red Anjamani" price="IDR 80.000" action="detail_link_sample4" />
                           <ProductItem image={product5} title="Aglonema Red Chocin" price="IDR 80.000" action="detail_link_sample5" />
                           <ProductItem image={product6} title="Aglonema Super White" price="IDR 90.000" action="detail_link_sample6" />
                           <ProductItem image={product7} title="Aglonema Rodud Anjamani" price="IDR 65.000" action="detail_link_sample7" />
                           <ProductItem image={product8} title="Aglonema Snow White" price="IDR 27.500" action="detail_link_sample8" />

                       </div>
                   </div>
               </div>
           </>
        )
    }
}

export default ProductPage