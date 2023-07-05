import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () =>{
    const navigate=useNavigate();
    const [data,setData] = useState({username:'', DOB:'', email:'', password:'',confirmpassword:''});
    const {username,DOB,email,password,confirmpassword} = data;
    const onchange = e =>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const submitHandler = e =>{
        e.preventDefault();
        if(username.length<5)
        {
            alert("username should have atleast 5 characters");
        }
        else if(password!==confirmpassword)
        {
            alert("passwords not matching")
        }
        else{
            axios.post('https://myportfolioproject-204ca-default-rtdb.firebaseio.com/details.json',data).then(()=>alert('sucessfull'));
        }

    }
  return (
    <div className='logintotal'>
          <h1 className='h1taglogin'>Login page</h1>
          <center className='login'>
            <form onSubmit={submitHandler} className='fom'>
                <input type='text' placeholder='user name' value={username} name='username' onChange={onchange} className='inp' required/><br /><br />
                  <input type='date' placeholder='date of birth' value={DOB} name='DOB' onChange={onchange} className='inp' required/><br /><br />
                  <input type='email' placeholder='Email' value={email} name='email' onChange={onchange} className='inp' required /><br /><br />
                  <input type='password' placeholder='password' value={password} name='password' onChange={onchange} className='inp' required /><br /><br />
                  <input type='passwordd' placeholder='confirm password' value={confirmpassword} name='confirmpassword' onChange={onchange} className='inp' required /> <br /><br />
                  <input type='submit' name='submit' className='submit' onClick={()=>navigate('/home')}/>
            </form>
        </center>
    </div>
  )
}

export default Login