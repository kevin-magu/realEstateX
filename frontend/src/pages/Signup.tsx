import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
  try {
    setLoading(true);
    e.preventDefault();
    const res = await fetch('/api/auth/signup', 
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
  
console.log(data.success);
  } catch (error:any) {
    setError(error.message);
    console.log(error.statusCode);
    setLoading(false);
  }
}
 
//console.log(formData);
  return (
    <div>
      <h1 className='signup-title'>Sign Up</h1>

      <div className="form-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
        <input type="text"  placeholder='username'id='username' onChange={handleSignup} required/>
        <input type="email" placeholder='email'  id='email' onChange={handleSignup} required/>
        <input type="password" placeholder='password' id='password' onChange={handleSignup} required/>
        <button disabled={loading? true : false} className='signup-button'>{loading? 'Signing you up...': 'Sign Up'}</button>
        <button disabled={loading? true: false} className='google-button'> <FaGoogle /> Login with Google</button>
        <p>Already have an account? <Link className='signin-link' to={'/signin'}>Log in</Link></p>
      </form>
      </div>
    </div>  
  )
}

export default Signup