import '../styles/Entry.css'
import '../styles/Loading.css'
import Loading from '../componentsWarning/Loading.js'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userActionRegister } from '../redux/actions/userActions'
import Footer from '../components/Footer'

export const Register = ({ location, history}) => {
  window.scrollTo(0,0);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegisterState = useSelector((state) => state.userRegisterState);
  const {loading,error,userData} = userRegisterState;

  useEffect(() =>{
    if(userData) {
      history.push(redirect)
    }
  },[userData,history,redirect])

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(userActionRegister(name,email,password))
  } 
  
  return (
    <>
      <Header/>
          <div className="backgroundLogin">
            <div className="containerLogin md:flex-row flex-1 lg:max-w-[800px]">
               {/*Left Container*/}
              <div className="leftContainerLogin md:w-80 flex-shrink-0 flex flex-col items-center justify-evenly" >
                <div className="leftLogoText">
                  <span>Authentics</span>
                </div>
                <p className="leftContent md:mt-6">
                  Bem-vindo à Authentics <br/>onde pode encontrar os seus sneakers de sonho
                </p>
                <p className="signUp">
                  <span>Já Tem uma conta?</span>
                  <Link to={redirect ? `/Login?redirect=${redirect}` : "/Login"}><span className="underline cursor-pointer">Clique aqui!</span></Link>
                </p>
                <p class="termsAndConditions ">
                  Read our <span  className="underline cursor-pointer">terms</span> and <span  class="underline cursor-pointer">conditions</span>
                </p>
              </div>
              {/*Right Container*/}
              <div className="rightContainerRegister md:flex-1">
                <h3 className="rightText-1">Bem-vindo(a) <br/>Authentics</h3>
                {error && (<div className="bg-[#ffe6e6] text-lg font-semibold text-red-500 mb-4 text-center  border-red-500 border-2 rounded-[0.3rem]">{error}</div>)}
                <form  className="rightFrom" onSubmit={submitHandler}>
                  {/*Name*/}
                  <div className="containerInput">
                    <label for="text" className="text-sm font-semibold text-gray-500">Name</label>
                    <input className="inputOverALL" type="text" id="name" value={name} 
                    onChange={(e) => setName(e.target.value)} required/>
                  </div>
                  {/*Email*/}
                  <div className="containerInput">
                    <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                    <input className="inputOverALL" type="email" id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  {/*Password*/}
                  <div className="containerInput">
                    <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                    <input className="inputOverALL" type="password" id="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <div>
                    {loading? (<Loading/>) : ( <button type="submit" className="buttonContinuar bg-blue-500 md: mt-6 ">Continuar</button>)}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer/>
      </>
  );
}