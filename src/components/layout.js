import * as React from 'react'
import { Link } from 'gatsby'
import * as css from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={css.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={css.navLinks}>
          <li className={css.navLinkItem}>
            <Link to="/" className={css.navLinkText}>
              Home
            </Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="/about" className={css.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={css.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout