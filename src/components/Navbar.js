import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo2.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Homepizza" style={{ width: '88px' , height: '100px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Chi siamo
              </Link>
              <Link className="navbar-item" to="/menu">
                Menu
              </Link> 
              <Link className="navbar-item" to="/pizze">
                Le nostre pizze
              </Link>
              <Link className="navbar-item" to="/contatti">
                Contatti
              </Link>           
              <Link className="navbar-item" to="/contact">
                Scrivici
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item btn-danger"
                href="tel:0683933835"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chiamaci ora!
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
