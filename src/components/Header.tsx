import '../styles/Header.css'
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <header className="flex bg-black h-20">
        <div className="header-items-container">
            <h1 className="font-bold">
                <span className="text-white">cozy</span>
                <span className="text-slate-500">Homes</span>
            </h1>
            <form action="">
                <input type="text" className="border border-white bg-amber-50"  placeholder="search..." />
                <FaSearch className="search-icon"/>
            </form>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Sign In</li>
            </ul>
        </div>
    </header>
  )
}

export default Header