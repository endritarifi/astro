import React, { useRef } from 'react';

const Header = ({ style }) => {
  const navbarRef = useRef(null);

  const toggleNav = () => {
    navbarRef.current.classList.toggle('show');
  };

  return (
    <header style={style}>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" ref={navbarRef}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
