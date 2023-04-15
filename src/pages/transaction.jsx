import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css'
import { FaCheckSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class TransactionPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container}>
                        <div className={`${Styles.transaksi_container} ${Styles.text_center}`}>
                            <FaCheckSquare />
                            <div className={Styles.space}></div>
                            <h2>Successful Payment</h2>
                            <p>With Transaction No: TRS-3897393863876</p>
                            <div className={Styles.space}></div>
                            <Link to="/" className={Styles.btn_primary}>Back To Home</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TransactionPage