import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { FaGoogle } from 'react-icons/fa';

function Signup() {
  return (
    <div>
      <h1 className='signup-title'>Sign up</h1>

      <div className="form-container">
      <form action="" className='signup-form'>
        <input type="text"  placeholder='username'id='username'/>
        <input type="email" placeholder='email'  id='email'/>
        <input type="password" placeholder='password' id='password'/>
        <button className='signup-button'>Sign up</button>
        <button className='google-button'> <FaGoogle /> Login with Google</button>
        <p>Already have an account? <Link className='signin-link' to={'/signin'}>Log in</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Signup