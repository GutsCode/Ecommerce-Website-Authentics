import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { saveShippingSettingsAction } from '../redux/actions/cartActions'
import '../styles/Entry.css'

export const ShippingSettings = ({history}) => {


    
    const cartState = useSelector((state) => state.cartState)
    const {shippingSettings, cartItems } = cartState;

    const [address, setAddress] = useState(shippingSettings.address)
    const [country, setCountry] = useState(shippingSettings.country)
    const [city, setCity] = useState(shippingSettings.city)
    const [postalcode, setPostalcode] = useState(shippingSettings.postalcode)
    const [paymentMethod,setPaymentMethod] = useState("Paypal")

    const dispatch = useDispatch()

    if(cartItems.length === 0)
    {
        history.push("/Cart")
    }

    const  submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingSettingsAction({address,country,city,postalcode,paymentMethod}))
        history.push("/PlaceOrder")
    }


    return(
        <>
        <Header/>
        <div className="backgroundLogin">
            <div className="containerLogin md:flex-row flex-1 lg:max-w-[800px]">
                <div className="rightContainerRegister md:flex-1">
                    <p className="rightText-1">DELIVERY </p>
                    <form  className="rightFrom" onSubmit={submitHandler}>
                    {/*Name*/}
                    <div className="containerInput">
                        <label for="text" className="text-sm font-semibold text-gray-500">Enter Address</label>
                        <input className="inputOverALL" type="text" id="Address" 
                        value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    </div>
                    {/*Email*/}
                    <div className="containerInput">
                        <label for="text" className="text-sm font-semibold text-gray-500">Enter Country</label>
                        <input className="inputOverALL" type="text" id="Country" 
                        value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                    {/*Password*/}
                    <div className="containerInput">
                        <label for="text" class="text-sm font-semibold text-gray-500">Enter City</label>
                        <input className="inputOverALL" type="text" id="Country" 
                        value={city} onChange={(e) => setCity(e.target.value)} required/>
                    </div>
                    <div className="containerInput">
                        <label for="text" class="text-sm font-semibold text-gray-500">Enter Postal Code</label>
                        <input className="inputOverALL" type="text" id="Postal Code" 
                        value={postalcode} onChange={(e) => setPostalcode(e.target.value)} required/>
                    </div>
                    <div>
                    <label for="radio" class="text-sm font-semibold text-gray-500">Select Payment Method</label><br/>
                        <input className="inputOverALL " type="radio" id="payment" checked="checked"
                        value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required/>
                        <label for="radio" class="text-sm font-semibold text-gray-500"> Paypal or Credit Card</label>
                    </div>
                    <div>
                        <button type="submit" className="buttonContinuar bg-blue-500 md: mt-6 ">PLACE ORDER</button>
                    </div>
                    </form>
                </div>
                {/*Left Container*/}
                <div className="leftContainerLogin md:w-80 flex-shrink-0 flex flex-col items-center justify-evenly">
                        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}