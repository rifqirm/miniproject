import React, { Component } from 'react'
// import Styles from  '../../styles/global.module.css'
// import ProductItem from '../../components/ProdukItem/product_item'
import { GetSearchProductList } from "../../helpers/gqlHasura"
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client"
import Input from '../../elements/Input/Input';
import { useState } from 'react';
import Button from '../../elements/Button/Button';
import Card from "../../components/Card/Card";
import './product.css'
import  logo from '../../assets/logo2.svg.svg'

// import product1 from "../../assets/product/1aglonemaAyunindi.jpg"
// import product2 from "../../assets/product/2aglonemaBigroy.jpg"
// import product3 from "../../assets/product/3aglonemaKhocin.jpg"
// import product4 from "../../assets/product/4aglonemaRedAnjamaniDewasa.jpg"
// import product5 from "../../assets/product/5aglonemaRedChocin.jpg"
// import product6 from "../../assets/product/6aglonemaRedMajesty.jpg"
// import product7 from "../../assets/product/7aglonemaRoDudAnjamani.jpg"
// import product8 from "../../assets/product/8aglonemaRotundumAceh.jpg"


// import product9 from "../assets/product/9aglonemaSnowWhiteRemaja.jpg"
// import product10 from "../assets/product/10aglonemaSuksom.jpg"
// import product11 from "../assets/product/11aglonemaSuperWhite.jpg"
// import product12 from "../assets/product/12aglonemaVenus.jpg"

// import product_1 from "../assets/product_blank_href/aglonemaAyunindi.jpg"
// import product_2 from "../assets/product_blank_href/aglonemaBigroy.jpg"
// import product_3 from "../assets/product_blank_href/aglonemaKhocin.jpg"
// import product_4 from "../assets/product_blank_href/aglonemaRedAnjamaniDewasa.jpg"
// import product_5 from "../assets/product_blank_href/aglonemaRedChocin.jpg"
// import product_6 from "../assets/product_blank_href/aglonemaRedMajesty.jpg"
// import product_7 from "../assets/product_blank_href/aglonemaRoDudAnjamani.jpg"
// import product_8 from "../assets/product_blank_href/aglonemaRotundumAceh.jpg"
// import product_9 from "../assets/product_blank_href/aglonemaSnowWhiteRemaja.jpg"
// import product_10 from "../assets/product_blank_href/aglonemaSuksom.jpg"
// import product_11 from "../assets/product_blank_href/aglonemaSuperWhite.jpg"
// import product_12 from "../assets/product_blank_href/aglonemaVenus.jpg"
// import { FaShippingFast, FaFunnelDollar, FaUserShield  } from "react-icons/fa"
// import search from "../assets/search.png"
// import home_banner3 from "../assets/home_banner3.jpg"
// import home_banner4 from "../assets/home_banner4-removebg.png"
// import LogoFooter from "../assets/logo-demeter-footer.png"



const ProductList = () => {
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(3)

    const { data, loading, error } = useQuery(GetSearchProductList, {
        variables: { name: `%${search}%`, limit: limit }
    })


    if (error) {
        console.log(error)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleLoadMore = () => {
        setLimit(limit + 3)
    }

    return (
        <>
            <center>
                <div className="container text-center mt-5">
                    <img
                        style={{ height: 300, width: "300px" }}
                        src={logo}
                        alt="Hero Logo" />
                </div>
                    <section className="productlist mt-3 mb-5">
                        <div className='produkList'>
                            <h3>Product List</h3>
                            <p>
                                <center>Berisi daftar produk yang telah di buat di halaman permintaan produk.</center>
                            </p>

                            <div className="mb-3 w-25">
                                <label className="form-label mt-5 "><strong>Masukan Pencarian : </strong></label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    value={search}
                                    onChange={handleSearch} />
                            </div>
                            <div className="container mx-auto">
                                <div className="mycard row w-100 justify-content-center">
                                    {/* <div className="col-sm-4"> */}
                                    {data?.Product.map((card) => (
                                        <Card key={card.id} card={card} />
                                    ))
                                    }
                                    {/* </div> */}
                                </div>
                            </div>
                            <Button
                                type="button"
                                className="btn btn-secondary2"
                                label="Load More"
                                onClick={handleLoadMore} />
                        </div>
                    </section></center>
        </>
    );
}

export default ProductList
