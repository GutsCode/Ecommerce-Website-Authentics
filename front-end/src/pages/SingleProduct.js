import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { singleProduct } from '../redux/actions/productActions'
import Loading from '../componentsWarning/Loading.js'

export const SingleProduct = ({ match, history }) => {
    window.scrollTo(0,0);

    const productDetailsState = useSelector((state) => state.productDetailsState)
    const {loading, error, product} = productDetailsState

    const [qty] = useState(1)
    const [size,setsize] = useState()
    const productID = match.params.id;
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(singleProduct(productID))
    }, [dispatch, productID])

    const addCardHandler = (e) => {
        e.preventDefault();
        history.push(`/Cart/${productID}?qty=${qty}?size=${size}`)
    }

  return (
    <>
    <Header/>
        <div>
            {           
                loading ? (
                        <div className="flex h-screen justify-center items-center"><Loading/></div>
                ) : error ? (
                        <p className="flex h-screen justify-center items-center">Error: {error}</p>
                ) : (
                    <div class="container px-5 py-[150px] mx-auto">
                        <div className='pl-[20px] py-10 font-semibold'><Link to="/">Home</Link> / {product.name} / {product.modelName}</div>
                            <div class="lg:w-auto mx-auto flex flex-wrap">
                                <img alt="ecommerce" class="lg:h-auto w-[600px]  object-center rounded" src={product.thumbnailUrl}/>
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">{product.name}</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.modelName}</h1>
                                <div class="flex mb-4">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">{product.numReviews} Reviews</span>
                                </span>
                                </div>
                                <p class="leading-relaxed">{product.description}</p>
                                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div class="flex items-center">
                                        <span class="mr-3">Size</span>
                                        <div class="relative">
                                        <select value={size} onChange={(e) => setsize(e.target.value)} class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option value={36}>36</option>
                                            <option value={37}>37</option>
                                            <option value={38}>38</option>
                                            <option value={40}>40</option>
                                            <option value={41}>41</option>
                                            <option value={42}>42</option>
                                            <option value={43}>43</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-900">€ {product.price}</span>
                                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addCardHandler} >ADD TO CARD</button>
                                </div>
                                <p className='ml-[645px] mt-2 font-semibold'> Stock {product.countInStock}</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </>
    )
}
