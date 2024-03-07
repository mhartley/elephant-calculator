import React from 'react';


const Navbar = () => {

    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-brand ">
          <a className="navbar-item" href="https://elephantenergy.com">
            <img src="https://elephantenergy.com/wp-content/uploads/2022/03/logo.png"/>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              <span className='is-size-5 has-text-weight-semibold has-text-black-bis'>Elephant Energy</span>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-rounded">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light is-rounded">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;