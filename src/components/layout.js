import React from "react"
import PropTypes from "prop-types"
import Social from "../components/social"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <main className="main-container">{children}</main>
      {/* <footer>
        <Social/>
        © {new Date().getFullYear()} Agathe Cocco. Built and designed by me with <FontAwesomeIcon icon={faCoffee} size="1x" title="Coffee Cup"/> and Gatsby.
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
