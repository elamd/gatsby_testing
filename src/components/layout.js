import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as css from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={css.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={css.siteTitle}>{data.site.siteMetadata.title}</header>
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
          <li className={css.navLinkItem}>
            <Link to="/blog" className={css.navLinkText}>
              Blog
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