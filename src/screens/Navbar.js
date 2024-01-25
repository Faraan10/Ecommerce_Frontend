import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser, cart, cartApi }) {
  // const { username, email } = user.authtoken;
  // console.log(user);
  let username, email;
  if (user && user.authtoken && user.authtoken.username) {
    username = user.authtoken.username;
    email = user.authtoken.email;
  }

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setUser({});
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          <img
            src="https://gamenation.in/assets/imgs/logo.png"
            className="navimage"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item-left">
                <Link
                  to="/"
                  className="nav-links hover active"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item-left">
                <Link to="/products" className="nav-links hover active">
                  PRODUCTS
                </Link>
              </li>
            </ul>

            {/* right side navbar */}
            <ul className="navbar-nav ms-auto">
              {/* ms-auto is used for setting nav items to right side*/}

              {/* // start here */}
              {user && user.authtoken && user.authtoken.username && (
                <div className="dropdown">
                  <button
                    className="btn-avatar"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-sharp userlogo fa-solid fa-user fa-2xl"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-items" href="/">
                        {username}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-items" href="/">
                        {email}
                      </a>
                    </li>
                    <li className="buttonli">
                      <button className="logoutbutton" onClick={handleLogOut}>
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {/* end here */}
              <li className="nav-items">
                <Link to="/cart" className="nav-link active">
                  <span className="cartlogo">
                    <i className="fa-sharp fa-solid fa-cart-shopping fa-xl"></i>
                  </span>
                  <span className="spanclass" id="spid">
                    {cartApi.length}
                  </span>
                </Link>
              </li>
              {user && user.authtoken && user.authtoken.username ? null : (
                <li className="nav-items">
                  <Link to="/login" className="nav-links hover active">
                    LOGIN
                  </Link>
                </li>
              )}
              <li className="nav-items">
                <Link to="/" className="nav-links margin hover active">
                  ABOUT
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/registration" className="nav-link active">
                  REGISTER
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
