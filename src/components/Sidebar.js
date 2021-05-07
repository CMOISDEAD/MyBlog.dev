import * as React from "react"

const Sidebar = () =>{
  return(
    <div className="left-links bg-light"
      style={{
        position: `absolute`,
        height: `90vh`,
        minWidth: `12vw`,
        maxWidth: `12vw`,
      }}
    >
      <div className="text-center mb-2 h3">
        Interesting thing
      </div>
      <ul>
        <li><a href="/">Javascript</a></li>
        <li><a href="/">Typesript</a></li>
        <li><a href="/">GraphQL</a></li>
        <li><a href="/">Gatsby</a></li>
        <li><a href="/">React</a></li>
        <li><a href="/">Redux</a></li>
        <li><a href="/">Git</a></li>
        <li><a href="/">More...</a></li>
      </ul>
      <button className="btn btn-success m-2 p-2">{"<3 "}Buy me a coffe.</button>
      <button className="btn btn-dark m-2 p-2">{":) "}Talk with me.</button>
    </div>
  )
}

export default Sidebar