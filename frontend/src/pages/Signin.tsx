import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInStart, signInFailure,signInSuccess } from '../redux/user/userSlice';

function Signin() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    setLoading(true);
    e.preventDefault();
    const res = await fetch('/api/auth/signin', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  },
  
  
);
  const data = await res.json();
  setLoading(false);

  if(data.success === false){
    setError(data.message);
    console.log("An error occured", data.message);
  }else{
    navigate('/');
  }


}
 
//console.log(formData);
  return (
    <div>
      <h1 className='signup-title'>Sign in</h1>

      <div className="form-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
        <input type="email" placeholder='email'  id='email' onChange={handleSignup} required/>
        <input type="password" placeholder='password' id='password' onChange={handleSignup} required/>
        <button disabled={loading? true : false} className='signup-button'>{loading? 'Signing you in...': 'Sign in'}</button>
        <button disabled={loading? true: false} className='google-button'> <FaGoogle /> Login with Google</button>
        <p>Don't have an account? <Link className='signin-link' to={'/signup'}>Sign up</Link></p>
      </form>
      </div>
    </div>  
  )
}

export default Signin