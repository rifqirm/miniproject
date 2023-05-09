// import logo from '../../assets/Bootstrap_logo.svg.png'; // with import
import  logo from '../../assets/logo.svg.svg'
import HeaderBody from '../../elements/HeaderBody/HeaderBody';
import HeaderTitle from '../../elements/HeaderTitle/HeaderTitle';
import Button from '../../elements/Button/Button';
import { useState } from 'react';

const Header = () => {

    const article = {
        title: {
          id: "Permintaan Produk",
          en: "Product Request"
        },
        description: {
          id: "Di bawah ini adalah formulir yang dibuat untuk menambahkan produk. Setiap orang boleh mengasih saran atau masukan produk melalui menu tambah produk ini dengan mengisi form ini. Semua saran atau request penambahan produk akan kami seleksi seecara menyeluruh, terima kasih.",
          en: "Below is the form created to add a product. Everyone is welcome to provide product suggestions or input via the add product menu by filling out this form. All suggestions or requests for additional products will be selected thoroughly, thank you."
        }
    };

    const [title, setTitle] = useState(article.title.en)
    const [desc, setDesc] = useState(article.description.en)

    const changeLanguage = () => {
        setTitle(title === article.title.en ? article.title.id : article.title.en);
        setDesc(desc === article.description.en ? article.description.id : article.description.en);
    }


    return (
        <div className="container text-center mt-5">
            <img
            style={{ height: 200, width: "200px" }}
            src= {logo}
            alt="Hero Logo"
            />
            <div className="container mt-4">
                <HeaderTitle 
                    label={title}
                />
                <HeaderBody
                    label={desc}
                />
            </div>
        <Button
            className="btn btn-primary"
            label="Ganti Bahasa"
            onClick={() => changeLanguage()}
        />
        </div>
    );
}

export default Header;