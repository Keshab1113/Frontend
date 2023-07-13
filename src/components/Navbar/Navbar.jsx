import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from "../../components/Avatar/Avatar"
import "./Navbar.css";
import {useSelector, useDispatch} from 'react-redux'
import {setCurrentUser} from '../../actions/currentUser'
import decode from "jwt-decode";


const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

    useEffect(() => {
      const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }, [dispatch]);
  return (
    <nav className='main-nav'>
    <div className='Navbar'>
      <Link to="/" className="nav-item nav-logo">
        <img src={logo} alt="This is logo" srcset="" />
      </Link>
      <Link to="/" className="nav-item nav-btn">About</Link>
      <Link to="/" className="nav-item nav-btn">Products</Link>
      <Link to="/" className="nav-item nav-btn">For Teams</Link>
      <form>
        <input type="text" placeholder='Search...' />
        <img src={search} alt="search" srcset="" width="18" className='search-icon'/>
      </form>
      {User === null ?
        <Link to="/Auth" className='nav-item nav-links'>Log in</Link>:
        <>
            <Avatar backgroundColor="Blue" px="10px" py="7px" color="white" borderRadius="50%"><Link to={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
        </>
        
      }
      </div>
    </nav>
  )
}

export default Navbar