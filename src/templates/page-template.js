import React from "react"

const PageTemplate = props => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default PageTemplate
