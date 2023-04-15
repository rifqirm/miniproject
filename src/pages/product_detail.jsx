import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css'
import sampleGambar from "../assets/product/9aglonemaSnowWhiteRemaja.jpg"
import { FaCartPlus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'


class ProductDetailPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container_detail_product}>
                        <div className={Styles.detail_product}>
                            <div className={Styles.item}>
                                <img src={sampleGambar} alt="Gambar Product" />
                            </div>
                            <div className={Styles.item}>
                                <div>
                                    <h2>Title Product</h2>
                                    <h4>Price</h4>
                                    <hr />
                                    <p>Kategori: ??</p>
                                    <p>Deskripsi Singkat: </p>
                                    <hr />
                                    <div className={Styles.input_group2}>
                                        <button>—</button>
                                        <input type="number" placeholder='0' />
                                        <button className={Styles.icon_plus}><FaPlus /></button>
                                    </div>
                                    
                                    <button className={Styles.tambah_keranjang}> 
                                    <div> <FaCartPlus /></div> 
                                    <div>Add To Cart </div> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className={Styles.row}>
                    <div className={Styles.container_detail_product}>
                        <div className={Styles.description_product} >
                            <h2>DESKRIPSI</h2>
                            <hr />
                            <p>
                            air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                            </p>
                            <br />
                            <p>
                            air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                            </p>
                            <br />
                            <p>
                            air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                            </p>
                        </div>    
    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductDetailPage