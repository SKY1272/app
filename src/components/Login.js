import React,{useState}from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const navigate=useNavigate();
    const[value,setValue]=useState({
          username:" ",
          password:" "
    })


   const changeHandler=(e)=>{
    setValue({
        ...value,[e.target.name]:e.target.value
    })
   }


  const submitHandler=(e)=>
  {

if(value.username==="shiv"&& value.password==="1272")
 {
    navigate("/home")

}
else
{

alert("Invalid password or Username");
}

 }

    return(
        <div id="container">
            <form onSubmit={submitHandler}>
                    <h1>Login Page</h1>
                <div>
                <label htmlFor='username'>UserName:</label>

               <input type="text" name="username" 
                value={value.name} onChange={changeHandler}
                placeholder="Enter Your Name"/>
                </div><br/>

                <div>
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" 
                value={value.name} onChange={changeHandler}
                placeholder="Enter Your Password"/>
                </div><br/>

                <button type="submit" onClick={submitHandler}>Login</button>
            </form>
        </div>
    )
}
export default Login;