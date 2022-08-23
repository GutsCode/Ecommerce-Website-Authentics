import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { addToCartAction, removeFromCardAction } from '../redux/actions/cartActions';

export const Cart = ({match,location, history}) => {

  const productId = match.params.id;
  const qty = localStorage.search ? Number(location.search.split("=")[1]) : 1
  const size = localStorage.search ? Number(location.search.split("=")[1]) : 40

  const userLoginState = useSelector((state) => state.userLoginState)
  const { userData } = userLoginState

  const cartState = useSelector((state) => state.cartState)
  const { cartItems } = cartState
  const dispatch = useDispatch();

  const totalPrice =cartItems.reduce((a,i) => a + i.qty * i.price, 0).toFixed(2)
  const removeItemFromCartHandler = (id) => {
    dispatch(removeFromCardAction(id))
  }
  
  console.log(userData)

  useEffect(() =>{
    if(productId)
      dispatch(addToCartAction(productId,qty,size))
  },[dispatch,productId,qty,size])

  const checkOutHandler = (e) => {
    if(!userData)
    {
      history.push("/Login");
    }
    else
    {
      history.push("/ShippingSettings");
    }
  }

  return (
    <>
    <Header/>
    <div class="container px-5 py-24 mx-auto">
        {
          cartItems.length === 0 ? (
           <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
              <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">HEYYYY, YOUR CART IS EMPTY !</h1>
                <p class="mb-8 leading-relaxed">What are you waiting for to buy your dream sneakers?<br/><strong>Psss... </strong>A tip if you want to explore all our Sneakers click on the button below to be faster!!</p> 
                <div class="flex w-full justify-center items-end">
                 <Link to="/"><button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">Explore Sneakers</button></Link>
                </div>
              </div>
            </div>
          ) 
          : 
          (
            <>
            <div class="container mx-auto px-5 py-6">
                  <div class="w-full md:w-2/3 flex flex-col ">
                    <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900">Your cart:</h1>
                  </div>
            </div>
            { cartItems.map((item) => (
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
                        <button onClick={() => removeItemFromCartHandler(item.product)} class="bg-red-400 inline-flex text-white rounded-[0.3rem] items-center mt-4 px-2 py-2">Remove Sneaker</button>
                        <p class="bg-blue-500  text-white rounded-[0.3rem] items-center px-2 py-1 mt-10 float-right">€ {item.price}</p>
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
            {/*Checkout*/}
            <div class="py-24 mx-auto flex flex-wrap justify-end">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/1">
                  <div class="flex border-2 rounded-lg border-[#7272727e] border-opacity-50 p-4 ">
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-[44px]">Still want to explore more of our website ?</h2>
                      <Link to="/" className="mt-3 bg-blue-500 text-white inline-flex items-center rounded-[0.3rem] px-2 py-2">CONTINUE SHOPPING</Link>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/2 md:w-full">
                  <div class="flex border-2 rounded-lg border-[#7272727e] border-opacity-50 p-5 ">
                    <div class="flex-grow">
                      <h1 class="text-gray-900 text-lg title-font font-medium mb-2">TOTAL: <strong>€ {totalPrice}</strong></h1>
                      <p class="leading-relaxed text-base">We hope you are happy with your choices.</p>
                      <Link  onClick={checkOutHandler} className="mt-3 ml-[240px] bg-blue-500 text-white inline-flex items-center rounded-[0.3rem] px-4 py-2">CHECKOUT</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )
        }
    </div>
    </>
    
  )
}

