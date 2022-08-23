import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header"
import { createOrderAction } from "../redux/actions/orderActions";
import {ORDER_CREATE_RESET } from "../redux/constants/orderConstants";
export const PlaceOrder = ({history}) =>{

    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartState);
    const userLoginState = useSelector((state) => state.userLoginState)
    const { userData } = userLoginState

    //Calculate Price Table
    const addDecimals = (x) => { return (Math.round(x * 100)/100).toFixed(2)}

    cartState.itemsPrice = addDecimals(cartState.cartItems.reduce((x, item) => x + item.price * item.qty, 0))
    cartState.shippingPrice = addDecimals(cartState.itemsPrice > 100 ? 0 : 25)
    cartState.taxPrice = addDecimals(Number((0.23 * cartState.itemsPrice).toFixed(2)))
    cartState.totalPrice = (Number(cartState.itemsPrice)+Number(cartState.shippingPrice)+Number(cartState.taxPrice)).toFixed(2)

    const orderCreateState = useSelector((state) => state.orderCreateState)
    const {orderData,success} = orderCreateState; //error

    useEffect(() => {
        if(success){
            history.push(`/Order/${orderData._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [history,dispatch,success,orderData])

    const createOrderHandler = (e) => {
        e.preventDefault();

        //CREATE ORDER IN MONGO DB
        dispatch(createOrderAction({
            orderItems: cartState.cartItems,
            shippingSettings: cartState.shippingSettings,
            paymentMethod: cartState.shippingSettings.paymentMethod,
            itemsPrice: cartState.itemsPrice,
            shippingPrice: cartState.shippingPrice,
            taxPrice: cartState.taxPrice,
            totalPrice: cartState.totalPrice
        }))

    }

    return(
        <>
        
        <Header/>
        {/* PLACER ORDER HEADER INFORMATION */}
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                <p class="sm:text-3xl text-2xl font-medium title-font text-indigo-500">AUTHENTICS IS MAKING YOUR ORDER</p>
                <p class="text-xs text-gray-900 tracking-widest font-medium title-font mb-1">Check that all your sneakers are correct, if necessary correct them<br/>Your dream sneaker is one step away!</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-6 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                </div>
                                <h2 class="text-indigo-900 text-lg title-font font-bold">CUSTOMER INFORMATION:</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base ml-11"><strong>Name Account: </strong>{userData.name}</p>
                                <p class="leading-relaxed text-base ml-11"><strong>Email: </strong>{userData.email}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                                </div>
                                <h2 class="text-indigo-900 text-lg title-font font-bold">ORDER INFORMATION:</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base ml-11"><strong>Shipping: </strong>{cartState.shippingSettings.country}</p>
                                <p class="leading-relaxed text-base ml-11 mt-1"><strong>Pay Method: </strong>{cartState.shippingSettings.paymentMethod}</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                                </div>
                                <h2 class="text-indigo-900 text-lg title-font font-bold">DELIVER TO:</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base ml-11"><strong>Address: </strong>{cartState.shippingSettings.address}</p>
                                <p class="leading-relaxed text-base ml-11"><strong>City: </strong>{cartState.shippingSettings.city}</p>
                                <p class="leading-relaxed text-base ml-11"><strong>Postal Code: </strong>{cartState.shippingSettings.postalcode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PLACER ORDER LEFT - ITEMS / RIGTH - TABLE */}
                <div className="container px-5 py-10 mx-auto">
                    { cartState.cartItems.map((item,index) => (
                    <>
                        <div class="-my-8 divide-y-2 divide-gray-100">
                            <div class="py-10 flex flex-wrap md:flex-nowrap">
                                <div class="block h-52 rounded overflow-hidden">
                                    <img alt="item" className='object-cover object-center w-full h-full block' src={item.thumbnailUrl}/>
                                </div>
                                <div class="md:flex-grow mt-10 ml-5">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.name}</h2>
                                    <p class="leading-relaxed mb-2">{item.modelName}</p>
                                    <p class="text-sm text-gray-900 title-font mb-1"><strong>Size:</strong> {item.size}</p>
                                    <p class="bg-blue-500 text-white rounded-[0.3rem] items-center px-2 py-1 mt-10 float-right">€ {item.price}</p>
                                    <p className=' text-black font-bold rounded-[0.3rem] items-center px-2 py-1 mt-10 float-right'>Price: </p>
                                </div>
                            </div>
                            <div class=" h-2 bg-gray-200 rounded overflow-hidden"> 
                                <div class="w-24 h-full bg-blue-500"></div>
                            </div>
                        </div>
                    </>
                    ))
                    }
                </div>
            {/*Checkout*/}
            <div class="mt-2 float-right mr-40">
                <table className="text-black white_Glass float-right">
                        <tbody>
                            <tr>
                                <td className="">Table Price</td>
                             </tr>
                             <tr>
                                <td className="">Products Price: </td>
                                <td className="text-end">€ {cartState.itemsPrice}</td>
                             </tr>
                             <tr>
                                <td className="">Shipping:</td>
                                <td className="text-end">€ {cartState.shippingPrice}</td>
                             </tr>
                             <tr>
                                <td className="">Tax: </td>
                                <td className="text-end">€ {cartState.taxPrice}</td>
                             </tr>
                             <tr>
                                <td className="font-bold">Total Price: </td>
                                <td className="text-end">€ {cartState.totalPrice}</td>
                             </tr>
                        </tbody>
                    
                </table>
                <div>
                <Link onClick={createOrderHandler} className="mt-3 ml-[240px] bg-blue-500 text-white inline-flex items-center rounded-[0.3rem] px-4 py-2 ">CREATE ORDER</Link>
                </div>
            </div>
        </>
        
    )   
}