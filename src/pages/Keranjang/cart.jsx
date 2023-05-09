import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Hasil, ListCategories, Menus } from "../../components";
import Hasil from "../../components/HasilKeranjang/Hasil"
import ListCategories from "../../components/ListCategories/ListCategories"
import Menus from "../../components/DaftarProduk/Menus"
import { API_URL } from '../../utils/constants'
import axios from 'axios'
import swal from 'sweetalert'



export default class CartPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: 'Aglonema',
      keranjangs: []
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriYangDipilih)
      .then((res) => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error ya", error)
      })

    this.getListKeranjang();
  }

//   componentDidUpdate(prevState) {
//     if(this.state.keranjangs !== prevState.keranjangs) {
//       axios
//       .get(API_URL + "keranjangs")
//       .then((res) => {
//         console.log("Cek")
//         const keranjangs = res.data
//         this.setState({ keranjangs })
//       })
//       .catch((error) => {
//         console.log("Error yaa ", error)
//       })
//     }
//   }

  getListKeranjang = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        // console.log("Response : ", res);
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch(error => {
        console.log("Error ya", error)
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: [],
    })

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error ya", error)
      })

  }

  masukKeranjang = (value) => {

    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        // console.log("Response : ", res);
        if (res.data.length === 0) {
          const isiKeranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value
          }

          axios
            .post(API_URL + "keranjangs", isiKeranjang)
            .then((res) => {
              // console.log("Response : ", res);
              this.getListKeranjang();
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + isiKeranjang.product.nama,
                icon: "success",
                button: "OKE",
                timer: false,
              })
            })
            .catch(error => {
              console.log("Error ya", error)
            })
        }
        else {
          const isiKeranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value
          }

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, isiKeranjang)
            .then(res => {
              // console.log("Response : ", res);
              swal({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang " + isiKeranjang.product.nama,
                icon: "success",
                button: "OKE",
                timer: false,
              })
            })
            .catch(error => {
              console.log("Error ya", error)
            })

        }
      })
      .catch(error => {
        console.log("Error ya", error)
      })
  }

  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state
    return (
    <div className="mt-3">
      <Container fluid>
        <Row>
            <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
            <Col className='mt-3'>
            <h4><strong>Daftar Produk</strong></h4>
            <hr />
            <Row>
                {menus && menus.map((menu) => (
                <Menus
                    key={menu.id}
                    menu={menu}
                    masukKeranjang={this.masukKeranjang}
                />
                ))}
            </Row>
            </Col>
            <Hasil keranjangs={keranjangs} {...this.props} getListKeranjang={this.getListKeranjang}/>
        </Row>
      </Container>
    </div>
    )
  }
}