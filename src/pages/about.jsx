import React, { Component } from 'react'
import Styles from '../components/styles/global.module.css';
import ImgAbout from '../assets/about.png'


class AboutPage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className={Styles.row}>
                    <div className={Styles.container}>
                        <h2 className={Styles.text_center}>About Us</h2>
                        <p>What is Lorem Ipsum?<br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className={Styles.space}></div>
                        <div className={Styles.flex}>
                            <img src={ImgAbout} style={{ width: '500px', height: '400px' }} alt="Gambar Tentang Kami" />
                            <p className={Styles.margin_left}>What is Lorem Ipsum?<br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className={Styles.space}></div>
                        <p>What is Lorem Ipsum?<br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage