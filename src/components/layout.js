import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        # menu(id: "TWVudToy") {
        #   menuItems {
        #     nodes {
        #       id
        #       label
        #       url
        #     }
        #   }
        # }
        menuItems(where: { location: PRIMARY }) {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings

  const items = data.wpgraphql.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))

  return (
    <>
      <header>
        <Link to="/" className="home">
          {title}
        </Link>
        {items.map(item => (
          <Link key={item.url} to={item.url}>
            {item.label}
          </Link>
        ))}
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
