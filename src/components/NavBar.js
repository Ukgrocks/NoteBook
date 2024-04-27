import React, {useEffect} from 'react'
import {Link ,useLocation, useNavigate} from 'react-router-dom'
const NavBar = () => {
let navigate = useNavigate();
const handleLogout = ()=>{
  localStorage.removeItem('token')
  navigate("/login")
}
/*useLocation() is a react-router-Dom function for specifying some action when a particular URL is called */
  let location = useLocation()
  useEffect(()=>{
    console.log(location.pathname)
  },[location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
   
      {!localStorage.getItem('token') ? <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link> 
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
        </form>:<button onClick={handleLogout} className='btn btn-primary'>LogOut</button> }
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
