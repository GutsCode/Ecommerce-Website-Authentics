import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActionUpdate } from '../redux/actions/userActions'
import Loading from '../componentsWarning/Loading'
import "../styles/profile.css"


const ProfileUpdate = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const dispatch = useDispatch();

  const userDetailsState = useSelector((state) => state.userDetailsState)
  const { userData} = userDetailsState;//Loading

  const userUpdateState = useSelector((state) => state.userDetailsState)
  const {loading: updateLoading } = userUpdateState;

  useEffect(() =>{
    if(userData)
    {
        setName(userData.name)
        setEmail(userData.email)
    }
  },[dispatch, userData])
    
  const submitHandler = (e) =>{
    e.preventDefault();
    if(password !== confirmPassword)
    {
        alert("Password do not Match !")
    }
    else{
        dispatch(userActionUpdate({id:userData._id,name,email,password}))
    }
  }

  return (
    <>    
        <div className='py-5 px-5'>
            <div className='updateTitle'>PROFILE SETTINGS</div>
            <form  className="updateFrom" onSubmit={submitHandler}>
                  {/*Name*/}
                  <div className="udpateInput">
                    <label for="text" className="text-sm font-semibold text-gray-500">Name</label>
                    <input className="updateInputOverALL" type="text" id="name" 
                    value={name}  onChange={(e) => setName(e.target.value)} required/>
                  </div>
                  {/*Email*/}
                  <div className="udpateInput">
                    <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                    <input className="updateInputOverALL"  type="email" id="email" 
                    value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  {/*Password*/}
                  <div className="udpateInput">
                    <label for="password" class="text-sm font-semibold text-gray-500">New Password</label>
                    <input className="updateInputOverALL"  type="password" id="password"
                    value={password}  onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  {/*Confirm Password*/}
                  <div className="udpateInput">
                    <label for="password" class="text-sm font-semibold text-gray-500">New Confirm Password</label>
                    <input className="updateInputOverALL"  type="password" id="password" 
                    value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
                  </div>
                  <div>
                    {updateLoading? (<Loading/>) : (<button type="submit" className="buttonUpdate bg-blue-500 lg:mt-6 ml-44 ">Update Account</button>)}
                  </div>
            </form>
        </div>
    </>

  )
}

export default ProfileUpdate;
