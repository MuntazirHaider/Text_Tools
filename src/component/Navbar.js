import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='#'>{props.title}</a>
          <form className="d-flex">
            {/* <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </form>
        </div>

      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Something went wrong'
};


