import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        {/* <!-- Navbar content --> */}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              {props.title}
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/bussiness ">Bussiness</Link></li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/sports">
                  Sports</Link></li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/health">Health</Link></li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/science">Science</Link></li>
              <li className="nav-item mx-2">
                <Link className="nav-a text-light" to="/technology">Technology</Link></li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"

              />
              <label className="form-check-label text-light">
                Enable DarkMode
              </label>
            </div>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}
