import { useContext, useState } from "react";
import Button from "../../elements/Button/Button";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from "../../elements/Input/Input";
import uuid from 'react-uuid';
// import ProductsContext from "../../context/ProductsContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebaseConfig";

import { gql, useQuery, useMutation } from "@apollo/client";
import { InsertProduct, GetProductList } from "../../helpers/gqlHasura";

const Form = ({ product }) => {
    // const { dataSQL, loading, errorSQL } = useQuery(GetProductList);
    const [insertProduct] = useMutation(InsertProduct, {
        refetchQueries: [{ query: GetProductList }],
    });


    const [percent, setPercent] = useState(0)

    const formData = {
        productId: uuid(),
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    }

    const formErrors = {
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    }

    const [data, setData] = useState(formData)
    const [errors, setErrors] = useState(formErrors)
    // const [errorMessage, setErrorMessage] = useState('');
    const error = {};

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "productImage") {
            setData((prev) => ({
                ...prev,
                [name]: e.target.files[0]
            }))
        }

        else {
            setData((prev) => ({
                ...prev,
                [name]: value
            }))
        }



        if (name === "productName") {
            if (value.length > 30) {
                error.productName = "Please input a valid product name";
            }
            else {
                error.productName = ""
            }
            setErrors(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!data.productName) {
            error.productName = "Harap Isi Nama Produk !";
        }
        if (!data.productCathegory) {
            error.productCathegory = "Harap Pilih Kategori Produk !";
        }
        if (!data.productImage) {
            error.productImage = "Harap Input Gambar Produk !";
        }
        if (!data.productCathegory) {
            error.productCathegory = "Harap Pilih Jenis Produk !";
        }
        if (!data.productDesc) {
            error.productDesc = "Harap Isi Deskripsi Tambahan !";
        }
        if (!data.productPrice) {
            error.productPrice = "Harap Isi Banyaknya Produk !";
        }

        setErrors(error);

        if (Object.keys(error).length === 0) {
            console.log(data)
            // setTable((prev) => ([...prev, data]))
            // setData(prev => ({...prev, productId: uuid()}))

            handleUploadFile()

        }
    }

    const handleUploadFile = () => {
        // handle file ref 
        const storageRef = ref(storage, `/files/${data.productImage.name}`)

        // handle file upload progess
        const uploadTask = uploadBytesResumable(storageRef, data.productImage)

        // handle file upload
        uploadTask.on(
            "state_changed",

            // callback ketika upload progress
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                //update progress
                setPercent(percent)
                console.log(`Progress >>> ${percent}%`)
            },

            // callback ketika upload gagal
            (err) => {
                console.log('error upload file', err)
            },

            //callback ketika selesai upload
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {

                        setData(prev => ({ ...prev, productId: uuid(), productImage: url }));
                        const newValues = { ...data, productId: uuid(), productImage: url };

                        console.log('url download file', url)
                        insertProduct({
                            variables: {
                                object: {
                                    id: uuid(),
                                    name: data.productName,
                                    price: data.productPrice,
                                    description: data.productDesc,
                                    freshness: data.productFreshness,
                                    category: data.productCathegory,
                                    image: url
                                },
                            },
                        });
                    })
            }
        )
    }


    return (
        <form onSubmit={handleSubmit} className="container mt-5 w-50" id="productForm">
            <h2>Detil Produk</h2>
            <div className="mb-4 mt-4 w-50">
                <label className="form-label has-success" htmlFor="productName">
                    Nama Produk
                </label>
                <input
                    type="text"
                    name="productName"
                    // className={`form-control ${validClass}`}
                    // className="form-control"
                    minLength={6}
                    maxLength={50}
                    className={`form-control ${errors.productName ? "is-invalid" : ""}`}
                    value={data.productName}
                    onChange={handleInput}
                />
                <small id="nameError" className="text-danger">
                    {errors.productName}
                </small>
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productCathegory">
                    Kategori Produk Tanaman Hias
                </label>
                <select
                    name="productCathegory"
                    value={data.productCathegory}
                    className={`form-select ${errors.productCathegory ? "is-invalid" : ""}`}
                    aria-label="Default select example"
                    onChange={handleInput}
                >
                    <option disable="" value="" hidden="">
                        Plih...
                    </option>
                    <option name="category" value="Alognema">
                        Alognema
                    </option>
                    <option name="category" value="Homalomena">
                        Homalomena
                    </option>
                    <option name="category" value="Alocasia">
                        Alocasia
                    </option>
                    <option name="category" value="Lainnya">
                        Lainnya
                    </option>
                </select>
                <small id="cathegoryError" className="text-danger">
                    {errors.productCathegory}
                </small>
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productImage">
                    Gambar Produk
                </label>
                <input
                    className={`form-control ${errors.productCathegory ? "is-invalid" : ""}`}
                    name="productImage"
                    // value={data.productImage} 
                    type="file"
                    onChange={handleInput}
                    accept="image/*"
                />
                <small id="imageError" className="text-danger">
                    {errors.productImage}
                </small>
                <p>{percent}%</p>
            </div>
            <div className="mb-4">
                <label className="form-label" htmlFor="productFreshness">
                    Jenis Produk
                </label>
                <div className="form-check">
                    <input
                        id="new"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        defaultValue="Bibit"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="new">Bibit</label>
                </div>
                <div className="form-check">
                    <input
                        id="second"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        defaultValue="Tanaman Hias"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="second">Tanaman Hias</label>
                </div>
                <div className="form-check">
                    <input
                        id="refurbished"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        defaultValue="Lainnya"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="refurbished">Lainnya</label>
                </div>
                <small id="new,second,refurbished" className="text-danger">
                    {errors.productCathegory}
                </small>
            </div>
            <div className="mb-4">
                <label className="form-label" htmlFor="productDesc">
                    Deskripsi Tambahan
                </label>
                <textarea
                    rows={5}
                    className={`form-control ${errors.productDesc ? "is-invalid" : ""}`}
                    name="productDesc"
                    value={data.productDesc}
                    onChange={handleInput}
                />
                <small id="descError" className="text-danger">
                    {errors.productDesc}
                </small>
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productPrice">
                    Jumlah Produk Yang Ingin Ditambahkan
                </label>
                <input
                    type="number"
                    className={`form-control ${errors.productPrice ? "is-invalid" : ""}`}
                    name="productPrice"
                    value={data.productPrice}
                    onChange={handleInput}
                />
                <small id="priceError" className="text-danger" >
                    {errors.productPrice}
                </small>
            </div>
            <Button
                type="submit"
                className="btn btn-primary w-100 mt-5"
                label="Submit"
            />
        </form>
    );
}

export default Form;