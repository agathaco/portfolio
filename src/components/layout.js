import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/*<div>
        <Canvas />*/}
        <main className="main-container">{children}</main>
        {/*<footer>
          <Social/>
          © {new Date().getFullYear()} Agathe Cocco. Built with <FontAwesomeIcon icon={faCoffee} size="1x" title="Coffee Cup"/> and Gatsby.
        </footer>*/}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
