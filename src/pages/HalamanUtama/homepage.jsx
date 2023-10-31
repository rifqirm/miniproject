import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Styles from '../../styles/global.module.css'
import ProductItem from '../../components/ProdukItem/product_item'

import product1 from "../../assets/product/1aglonemaAyunindi.jpg"
import product2 from "../../assets/product/2aglonemaBigroy.jpg"
import product3 from "../../assets/product/3aglonemaKhocin.jpg"
import product4 from "../../assets/product/4aglonemaRedAnjamaniDewasa.jpg"
import product5 from "../../assets/product/5aglonemaRedChocin.jpg"
import product6 from "../../assets/product/6aglonemaRedMajesty.jpg"
import product7 from "../../assets/product/7aglonemaRoDudAnjamani.jpg"
import product8 from "../../assets/product/8aglonemaRotundumAceh.jpg"
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
import { FaShippingFast, FaFunnelDollar, FaUserShield } from "react-icons/fa"
// import search from "../assets/search.png"
import home_banner3 from "../../assets/home_banner3.jpg"
import home_banner4 from "../../assets/home_banner4-removebg.png"
// import LogoFooter from "../assets/logo-demeter-footer.png"
// import axios from 'axios'
// import { ROOT_URL } from '../config/config'


class Homepage extends Component {
    // constructor (props) {
    //     super (props);

    //     this.state = {
    //         product:[]
    //     }
    // }

    // componentDidMount() {
    //     axios.get(config.ROOT_URL + 'frontend/productHome')
    //         .then(result => {
    //             console.log('PRODUCT >> ', result)
    //             const product = result.data;
    //             this.setState({product});
    //         });
    // }

    render() {
        return (
            <>
                <div class={`${Styles.wrapper} ${Styles.banner1}`}></div>
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
                            {/* {this.state.product.map(product => )} */}
                            <ProductItem image={product1} title="Aglonema Ayunindi" price="IDR 35.000" as={Link} to="/cart" />
                            <ProductItem image={product2} title="Aglonema Bigroy" price="IDR 60.000" action="product2/" />
                            <ProductItem image={product3} title="Aglonema Khocin" price="IDR 60.000" action="detail_link_sample3" />
                            <ProductItem image={product4} title="Aglonema Red Anjamani" price="IDR 80.000" action="detail_link_sample4" />
                            <ProductItem image={product5} title="Aglonema Red Chocin" price="IDR 80.000" action="detail_link_sample5" />
                            <ProductItem image={product6} title="Aglonema Super White" price="IDR 90.000" action="detail_link_sample6" />
                            <ProductItem image={product7} title="Aglonema Rodud Anjamani" price="IDR 65.000" action="detail_link_sample7" />
                            <ProductItem image={product8} title="Aglonema Snow White" price="IDR 27.500" action="detail_link_sample8" />

                        </div>
                    </div>

                    <div className={`${Styles.row} ${Styles.bg_primary} ${Styles.custom_banner}`}>
                        <div className={Styles.grid2}>
                            <div className={Styles.banner_link}>
                                <h1>Menciptakan ruang yang indah dengan "Demeter"</h1>
                                <p>Membawa keindahan alam ke rumah Anda dan Rasakan keajaiban alam dengan Demeter.</p>
                                <Link to='/keranjang'>BELANJA SEKARANG</Link>
                            </div>

                            <div>
                                <img src={home_banner4} className={Styles.image_custom_banner} alt="Home Banner 4" />
                            </div>

                        </div>
                    </div>

                    <div className={`${Styles.row}`}>
                        <div className={Styles.grid3}>
                            <div>
                                <div>
                                    <FaShippingFast />
                                    <h4>Bebas Biaya Kirim</h4>
                                    <p>Nikmati pengiriman gratis untuk pembelian tanaman hias di Demeter. Tambahkan keindahan alam ke dalam rumah Anda tanpa biaya pengiriman tambahan. Segera berbelanja dan raih keuntungan ini sekarang!</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <FaFunnelDollar />
                                    <h4>100% PENGEMBALIAN DANA</h4>
                                    <p>Kepuasan pelanggan adalah prioritas utama kami. Jika Anda tidak puas dengan pembelian tanaman hias Anda dari Demeter, kami akan memberikan pengembalian uang penuh tanpa syarat dalam waktu 30 hari. Tanaman hias kami dijamin tumbuh dengan baik dan sehat atau uang Anda kembali.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <FaUserShield />
                                    <h4>DUKUNGAN 24/7</h4>
                                    <p>Kami siap memberikan dukungan kapan saja selama 24 jam sehari, 7 hari seminggu untuk membantu Anda dengan segala pertanyaan atau masalah yang Anda miliki terkait dengan produk tanaman hias kami. Silakan hubungi kami melalui email atau media sosial, dan kami akan dengan senang hati membantu Anda secepat mungkin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Homepage