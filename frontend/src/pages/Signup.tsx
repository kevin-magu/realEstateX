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
  setLoading(true);
  e.preventDefault();
  const res = await fetch('/api/auth/signup', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );
  const data = await res.json();
  if(data.success == false){
    setLoading(false);
    alert('An error occured');
  }else{
    setLoading(false);
    alert('Registred! Proceed to login')
  }

  
  console.log(data.success);
}
 
//console.log(formData);
  return (
    <div>
      <h1 className='signup-title'>Sign up</h1>

      <div className="form-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <input type="text"  placeholder='username'id='username' onChange={handleSignup} required/>
        <input type="email" placeholder='email'  id='email' onChange={handleSignup} required/>
        <input type="password" placeholder='password' id='password' onChange={handleSignup} required/>
        <button className='signup-button'>{loading? 'Signing you up...': 'Sign Up'}</button>
        <button className='google-button'> <FaGoogle /> Login with Google</button>
        <p>Already have an account? <Link className='signin-link' to={'/signin'}>Log in</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Signup