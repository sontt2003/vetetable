import React from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./components/SearchProduct";
import imglogo from "../../../src/asset/images/icon.png";
// import {
//   GoogleLogin,
//   GoogleLogout,
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
// } from "react-google-login";

const Header = () => {
  // const responseGoogle = (
  //   response: GoogleLoginResponse | GoogleLoginResponseOffline
  // ) => {
  //   console.log(response);
  //   // Handle the response, e.g., send it to your server for authentication
  // };
  return (
    <header>
      <div className="width-page">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-fluid nav-header">
            <Link className="navbar-brand icon-logo" to={"/"}>
              <img
                src={imglogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top img-fluid"
              />
              <span>AODS</span>
            </Link>
            <button className="btn-login">Login</button>
            {/* <GoogleLogin
              className="btn-login"
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
            <button
              className="navbar-toggler order-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse link-router"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home Page
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Introduce
                  </Link>
                </li>
              </ul>
              <SearchProduct />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
