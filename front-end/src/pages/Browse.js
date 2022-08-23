import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from "../redux/actions/productActions.js"
import { Link } from "react-router-dom"
import Loading from '../componentsWarning/Loading.js'
import '../styles/Header.css';
import Header from "../components/Header.js";

//Grab all products from Back-end
export const Browse = () => {
    const dispatch = useDispatch()
    const productListState = useSelector((state) => state.productListState)
    const {loading, error, product} = productListState;

    useEffect(() => {dispatch(listProduct())}, [dispatch]);
        return (
                <div>
                    <Header/>
                        {
                            loading ? (
                                    <div className="flex h-screen justify-center items-center"><Loading/></div>
                            ) : error ? (
                                    <p className="flex h-screen justify-center items-center">Error: {error}</p>
                            ) : (
                            <>
                            {/*HERO*/}
                            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                                <div class="flex flex-wrap m-auto">
                                    <div class="md:p-2 p-1 w-auto">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://casacunhaleal.gnlfialho.pt/wp-content/uploads/2022/06/mario.jpg
"/>
                                    </div>
                                </div>
                            </div>
                            {/*PRODUCTS*/}  
                            <div class="container mx-auto">
                                <div class="flex flex-wrap m-auto justify-center">
                                    {product.map((product) => (
                                        <>
                                        <div class="lg:w-auto p-4">
                                            <Link to={`/SingleProduct/${product._id}`}>
                                            <div class=" block h-52 rounded overflow-hidden">
                                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product.thumbnailUrl}/>
                                            </div>
                                            <div class="mt-4">
                                                <h3 class="text-gray-500 text-ms tracking-widest title-font mb-1">{product.name}</h3>
                                                <h2 class="text-gray-900 title-font text-lg font-medium">{product.modelName}</h2>
                                                <p class="mt-1 text-lg font-semibold">€ {product.price}</p>
                                            </div>
                                            </Link>
                                        </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                            </>
                            )
                        }
                    
                </div>
        );
}