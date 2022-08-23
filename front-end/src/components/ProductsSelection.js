import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from "../redux/actions/productActions.js"
import { Link } from "react-router-dom"
import Loading from '../componentsWarning/Loading.js'
import '../styles/Header.css';

//Grab all products from Back-end
const ProductsSelection = () => {
    const dispatch = useDispatch()
    const productListState = useSelector((state) => state.productListState)
    const {loading, error, product} = productListState;

    useEffect(() => {dispatch(listProduct())}, [dispatch]);
        return (
                <div>
                        {
                            loading ? (
                                    <div className="flex h-screen justify-center items-center"><Loading/></div>
                            ) : error ? (
                                    <p className="flex h-screen justify-center items-center">Error: {error}</p>
                            ) : (
                            <>
                            {/*HERO*/}
                            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                                <p class="mt-1 text-lg font-semibold"></p>
                                <div class="flex flex-wrap m-auto">
                                <div class="flex flex-wrap w-1/2">
                                    <div class="md:p-2 p-1 w-auto">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt49a56293b389791b/62b49ff4d466000f8c789a5a/Nike_Air_Force_1_Mid_Off-White_assetsPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"/>
                                    </div>
                                    <div class="md:p-2 p-1 w-auto">
                                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/vendor-stories/2022/new-balance/2022_june_fl_onl_new_balance_collective_xc72_homepage_banner/2022_June_FL_ONL_New_Balance_collective_XC72_homepage_banner_800x300.jpg"/>
                                    </div>
                                </div>
                                <div class="flex flex-wrap w-auto">
                                    <div class="md:p-2 p-1 w-auto">
                                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/fl-campaign/2022/2022_06_21_fl_onl_trend_buttons_july_flow1/05_final_output_files/20220621_FL_ONL_Trend_buttons_July_flow1_Design_trend_4_630x630.jpg"/>
                                    </div>
                                </div>
                                </div>
                            </div> 
                            {/*PRODUCTS*/}  
                            <div class="container mx-auto">
                                <p class=" text-lg font-semibold">TRENDING PRODUCTS</p>
                                <div class="flex flex-wrap m-auto justify-center">
                                    {product.slice(0, 8).map((product) => (
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

export default ProductsSelection