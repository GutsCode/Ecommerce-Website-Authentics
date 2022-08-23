import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderViewAction } from "../redux/actions/orderActions";
import { userActionDetails } from "../redux/actions/userActions";


const OrdersUser = () =>{

    const dispatch = useDispatch()
    
    
    const userOrdersState = useSelector((state) => state.userOrdersState)
    const { loading, error, ordersData } = userOrdersState;//Loading

    useEffect(() =>{
        dispatch(orderViewAction())
        dispatch(userActionDetails("profile"))
    },[dispatch])



    return(
    <table className="text-black white_Glass  w-full text-center">
        <thead >
            <tr>
                <th>ID</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>TOTAL</th>
            </tr>
        </thead>
        <tbody>
             {
                ordersData?.map((ordersData) => (
                    <>
                    <tr className={`${ordersData.isPaid ? "bg-green-400" : "bg-red-300"} border border-slate-600`} key={ordersData._id}>
                        <td><a href={`/order/${ordersData._id}`}>{ordersData._id}</a></td>
                        <td >{ordersData.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                        <td >{ordersData.paidAt}</td>
                        <td>€ {ordersData.totalPrice}</td>
                    </tr>
                    </>
                ))
             }
        </tbody>
    </table>
    )

}

export default OrdersUser