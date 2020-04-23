import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/" className="home">
          WP to Jamstack
        </Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
