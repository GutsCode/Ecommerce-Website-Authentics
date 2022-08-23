import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ORDER_PAY_RESET } from "../redux/constants/orderConstants";
import { orderDetailsAction, orderPayAction } from "../redux/actions/orderActions";
import {PayPalButton} from "react-paypal-button-v2"
import Header from "../components/Header"
import Loading from '../componentsWarning/Loading.js'
import moment from "moment"
import axios from "axios";


export const Order = ({match, history}) =>{

    const [sdkReady, setskdReady] = useState(false)
    const orderID = match.params.id;
    const dispatch = useDispatch()
    const orderDetailsState = useSelector((state) => state.orderDetailsState)
    const {orderData, loading} = orderDetailsState //error

    const orderPayState = useSelector((state) => state.orderPayState)
    const {loading: loadingPay, success: successPay} = orderPayState //error

    useEffect(() =>{

        const addPaypalScript = async() => {
            const {data:clientId} = await axios.get("/api/setting/paypal")
            const script = document.createElement("script")
            script.type = "text/javascript"
            script.src =`https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true;
            script.onload = () => {
                setskdReady(true)
            }
            document.body.appendChild(script)
        };

        if(!orderData || successPay)
        {
            dispatch({type: ORDER_PAY_RESET})
            dispatch(orderDetailsAction(orderID))
        }
        else if(!orderData.isPaid)
        {
            if(!window.paypal){
                addPaypalScript()
            }
            else{
                setskdReady(true)
            }
        }
    },[dispatch,orderID,successPay,orderData])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(orderPayAction(orderID,paymentResult))
        
    }

    return(
        <>
        <Header/>
        {
            loading ? ( <div className="flex h-screen justify-center items-center"><Loading/></div>
                            ) :(
                                <>
        {/* PLACER ORDER HEADER INFORMATION */}
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <p class="sm:text-3xl text-2xl font-medium title-font text-indigo-500">AUTHENTICS MADE YOUR ORDER</p>
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
                                <p class="leading-relaxed text-base ml-11"><strong>Name Account:</strong>{orderData.user.name} </p>
                                <p class="leading-relaxed text-base ml-11"><strong>Email:</strong>{orderData.user.email}</p>
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
                                <p class="leading-relaxed text-base ml-11"><strong>Shipping: </strong>{orderData.shippingSettings.country}</p>
                                <p class="leading-relaxed text-base ml-11 mt-1"><strong>Pay Method:</strong>{orderData.paymentMethod}</p>
                                {
                                    !orderData.isPaid ? (<p class="leading-relaxed text-base text-white bg-red-500 ml-11 mt-1"><strong>Not Payed</strong></p>) 
                                    : (<p class="leading-relaxed text-base bg-green-500 text-white ml-11 mt-1"><strong>Paid on {moment(orderData.paidAt).calendar()}</strong></p>)
                                }
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
                                <p class="leading-relaxed text-base ml-11"><strong>Address: </strong>{orderData.shippingSettings.address}</p>
                                <p class="leading-relaxed text-base ml-11"><strong>City: </strong>{orderData.shippingSettings.city}</p>
                                <p class="leading-relaxed text-base ml-11"><strong>Postal Code: </strong>{orderData.shippingSettings.postalcode}</p>                               
                            </div>
                            {
                                    !orderData.isDelivered ? (<p class="leading-relaxed text-base text-white bg-red-500 ml-11 mt-1 h-auto"><strong> Not Delivered</strong></p>) 
                                    : (<p class="leading-relaxed text-base bg-green-500 text-white ml-11 mt-1"><strong> Delivered on {moment(orderData.deliveredAt).calendar()}</strong></p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* PLACER ORDER LEFT - ITEMS / RIGTH - TABLE */}
                <div className="container px-5 py-10 mx-auto">
                    { orderData.orderItems.map((item,index) => (
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
                                    <p className=' text-black font-bold rounded-[0.3rem] items-center px-2 py-1 mt-10 float-right'>Price:</p>
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
                <table className="text-black white_Glass">
                        <tbody>
                            <tr>
                                <td className="">Table Price</td>
                             </tr>
                             <tr>
                                <td className="">Products Price: </td>
                                <td className="text-end">€ {orderData.itemsPrice}</td>
                             </tr>
                             <tr>
                                <td className="">Shipping:</td>
                                <td className="text-end">€ {orderData.shippingPrice}</td>
                             </tr>
                             <tr>
                                <td className="">Tax: </td>
                                <td className="text-end">€ {orderData.taxPrice}</td>
                             </tr>
                             <tr>
                                <td className="font-bold">Total Price: </td>
                                <td className="text-end">€ {orderData.totalPrice}</td>
                             </tr>
                        </tbody>
                    
                </table>
                <div>
                    <br/>
                    {loadingPay && <Loading/>}
                        {
                            !sdkReady ? (
                                <Loading/>
                            ) : (
                                <PayPalButton amount={orderData.totalPrice} onSuccess={successPaymentHandler}/>
                            )
                        }
                </div>
                
            </div>
        </>
        )}
        
    </>
    )   
}