import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActionDetails } from '../redux/actions/userActions';
import Header from '../components/Header'
import ProfileUpdate from '../components/ProfileUpdate';
import moment from "moment"
import OrdersUser from '../components/OrdersUser';
import '../styles/profile.css'
import Footer from '../components/Footer';


export const Profile = ({location}) => {
    window.scrollTo(0,0);
    const [pageUpdate, setPageUpdate] = React.useState(false)
    const [pageOrders, setPageOrders] = React.useState(false)
    const onClickUpdate = () => {setPageUpdate(true); setPageOrders(false)}
    const onClickOrder = () => {setPageUpdate(false); setPageOrders(true)}


    const dispatch = useDispatch()

    const userLoginState = useSelector((state) => state.userLoginState);
    const { userData } = userLoginState;
    

    useEffect(() =>{
        dispatch(userActionDetails("profile"))
    },[dispatch])

    return(
            <>
            <Header/>
            <div className="backgroundLogin">
                <div className='containerProfile md:flex-row flex-1 lg:max-w-[1200px]'>
                    <div className='leftContainerProfile'>
                        <div className=" md:w-96 flex-shrink-0 flex flex-col items-center justify-evenly pt-24">
                            <img className="profileImage" alt="ecommerce" src="https://dummyimage.com/200x200/ffffff/000000"/>
                            <div className='profileName'>  {userData.name}  </div>
                            <div className='profileCreated'> JOINNED {moment(userData.createdAt).format('LL')}</div>
                        </div>
                        <div className='cursor-pointer'>
                            <div className='profileSettings' onClick={onClickUpdate}>  PROFILE SETTINGS </div>
                            <div className='profileOrderList' onClick={onClickOrder}>  ORDERS LIST </div>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="rightContainerProfile md:flex-1">
                        {pageUpdate ? (<ProfileUpdate/>) : pageOrders? (<OrdersUser/>) : null} 
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
}