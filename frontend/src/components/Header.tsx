import '../styles/Header.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex bg-black h-20">
        <div className="header-items-container">
        <Link to='/'>     
            <h1 className="font-bold">
                <span className="text-white">cozy</span>
                <span className="text-slate-500">Homes</span>
            </h1>
        </Link>    
            <form action="">
                <input type="text" className="border border-white bg-amber-50"  placeholder="search..." />
                <FaSearch className="search-icon"/>
            </form>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='signin'>
                    <li>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header