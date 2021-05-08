import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
        >
          {`<${siteTitle}/>`}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://dropdeaddev.netlify.app/" target="_blank">Portafolio</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li> */}
          </ul>
          <span className="navbar-text">
            Choose life.
          </span>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
