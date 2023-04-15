import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css'
import { FaCity } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdContacts } from 'react-icons/io'


class ContactPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container}>
                            <div className={`${Styles.form_2_grid} ${Styles.shadow}`}>
                                <div className={`${Styles.grid_form_2} ${Styles.minPadding}`}>
                                    <div className={Styles.contact_left}>
                                        <h2>Contact Us</h2>
                                        <p>Email : demeterofficial@gmail.com</p>
                                        <p>Phone : (021) 123 9876</p>
                                        <p>Our Address : Jl Pajajaran Depok 1 Jawa Barat 16515</p>
                                    </div>
                                </div>
                                <div className={Styles.grid_form_2}>
                                  <form className={`${Styles.form} ${Styles.form_style2}`}>
                                    <div className={Styles.form_group}>
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Full Name" />

                                    </div>
                                    <div className={Styles.form_group}>
                                        <label>Email</label>
                                        <input type="email" placeholder="Email" />
                                    </div>

                                    <div className={Styles.form_group}>
                                        <label>Message</label>
                                        <textarea className={Styles.input_textarea} placeholder="Write Message Here"></textarea>
                                    </div>

                                    <button className={Styles.btn_primary}>Send</button>
                                  </form>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactPage