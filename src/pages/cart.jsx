import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css'
import DummyImage from '../assets/product/1aglonemaAyunindi.jpg'
import { FiX } from "react-icons/fi"
import { Link } from 'react-router-dom'

class CartPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={StyleSheet.row}>
                    <div className={Styles.cart_container}>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={Styles.text_center}>
                                        <button className={Styles.delete_cart}><FiX /></button>
                                    </td>
                                    <td>
                                        <div className={Styles.item_cart}>
                                            <img src={DummyImage} />
                                            <h4>Product Name</h4>
                                        </div>
                                    </td>
                                    <td className={Styles.text_right}>10.000</td>
                                    <td className={Styles.text_center}>2</td>
                                    <td className={Styles.text_right}>20.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={Styles.row}>
                    <div className={Styles.total_cart}>
                        <div>
                            <table className={Styles.table_total_cart}>
                                <tr>
                                    <td>TOTAL</td>
                                    <td className={Styles.text_right}>IDR 20.000</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Link to='/checkout' >Pay Now</Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CartPage