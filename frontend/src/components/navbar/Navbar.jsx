import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-white/10 shadow-md w-[100%] shadow-black z-10">
      <h1 className="navHead">shubham@dev.</h1>
      <ul className="navLinks">
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="/about">About</Link>
        </li>
        <li className="navLink">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navLink">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="navLink">
          <Link to="/login">Login</Link>
        </li>
        <li className="navLink">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;