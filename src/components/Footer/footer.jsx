import React from 'react'
import Styles from "../../styles/global.module.css"
import footerLogo from "../../assets/logo-demeter-footer.png"

const Footer = () => {
  return (
    <div className={`${Styles.row2} ${Styles.bg_primary2} ${Styles.footer}`}>
        <img src={footerLogo} alt="logo" />
        <h4>DEMETER</h4>
        <p>@Copyright DEMETER 2023</p>
    </div>
  )
}

export default Footer