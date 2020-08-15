import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

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
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
       style={
         {
          webkitBoxShadow: '20px 20px 100px #ccc',
          MozBoxShadow:    '20px 20px 100px #ccc',
          BoxShadow:        ' 20px 20px 100px #ccc',
          zIndex:'999'
         }
       }
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="aassan hai" style={{ width: '88px' }} />
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
            <div className="navbar-end has-text-centered">
            <Link style={{fontFamily:'Poppins'}} className="navbar-item" to="/">
                Home
              </Link>
            <Link style={{fontFamily:'Poppins'}} className="navbar-item" to="/blog">
                Stories
              </Link>
              <Link style={{fontFamily:'Poppins'}} className="navbar-item" to="/about">
                About Us
              </Link>
              <Link style={{fontFamily:'Poppins'}} className="navbar-item" to="/products">
                Motivation
              </Link>
              <a style={{fontFamily:'Poppins'}} className="navbar-item" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sandeepsirfan@gmail.com" target="_blank">
                Send Your Story
              </a>
              <a
                className="navbar-item"
                href="https://instagram.com/sandeepmaheshwari.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
           
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
