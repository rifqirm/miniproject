import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { numberWithCommas } from '../../utils/utils';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { API_URL } from '../../utils/constants'
import { Link } from 'react-router-dom'

export default class TotalBayar extends Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL + "pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })
    };

    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <>
            {/* Web */ }
            < div className = "fixed-bottom d-none d-md-block" >
                <Row>
                    <Col className="ms-3 mt-3 bayar">
                        <center><h5>Total Harga : {" "}<strong >Rp. {numberWithCommas(totalBayar)}</strong></h5></center>
                        <Button variant="secondary" className="mb-3 mt-3 mr-3 buttonBayar" size="md"
                            onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to='/sukses'>
                            <FontAwesomeIcon icon={faShoppingCart} className="ms--5 me-2" /> <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div >

            {/* Mobile */ }
            < div className = "d-sm-block d-md-none" >
                <Row>
                    <Col className="ms-3 mt-3 bayar">
                        <h5>Total Harga : {" "}<strong className="float-right px-5">Rp. {numberWithCommas(totalBayar)}</strong></h5>
                        <Button variant="secondary" className="mb-3 mt-3 mr-3 buttonBayar" size="md"
                            onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to='/sukses'>
                            <FontAwesomeIcon icon={faShoppingCart} className="ms--5 me-2" /> <strong>BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div >
            </>
        )
    }
}
