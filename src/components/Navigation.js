import React, { Component } from 'react'
import { Link } from 'gatsby'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'
import ThemeContext from '../context/ThemeContext'

export default class Navigation extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  static contextType = ThemeContext

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props
    const theme = this.context

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <span className="text">Erik Flores</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
            <div className="cta">
              <button className="dark-switcher" onClick={theme.toggleDark}>
                {theme.dark
                  ? (
                    <span>
                      <img src={sun} className="theme-icon" alt="Light Mode" />
                    </span>
                  ) : (
                    <span>
                      <img src={moon} className="theme-icon" alt="Dark Mode" />
                    </span>
                  )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
