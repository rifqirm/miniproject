import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css'
import { FaCity } from 'react-icons/fa'
import { Link } from 'react-router-dom'


class CheckOutPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container}>
                        <form className={Styles.form}>
                            <h2 className={Styles.color_primary}>Fill in The Form For Payment Method</h2>

                            <div className={Styles.form_2_grid}>
                                <div className={Styles.grid_form_2}>
                                    <input type="text" className={Styles.input_style} placeholder="First Name" />
                                    <input type="email" className={Styles.input_style} placeholder="Email" />
                                    <div className={Styles.payment_method}>
                                        <h4 className={Styles.color_primary}>Metode Payment</h4>
                                        <div className={Styles.row_bank}>
                                            <FaCity /> <span>Bank Transfer</span>
                                        </div>
                                        <p>Bank BCA an. Demeter No. 12344564</p>
                                    </div>
                                </div>
                                <div className={Styles.grid_form_2}>
                                    <input type="text" className={Styles.input_style} placeholder="Last Name" />
                                    <textarea className={`${Styles.input_style} ${Styles.input_textarea}`} placeholder="Address"></textarea>
                                    <input type="text" className={Styles.input_style} placeholder="Phone" />
                                </div>

                            </div>
                            <Link to='/transaction' className={Styles.btn_primary}>Payment Process</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CheckOutPage