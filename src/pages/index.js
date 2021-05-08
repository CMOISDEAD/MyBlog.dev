import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"

const timeHandler = (frase, separador) => {
  var data = frase.split(separador)
  var response = `${data[0]} ${data[1]}`
  var time = moment(response).format("MMMM Do YYYY, h:mm:ss a")
  return time
}

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container">
      <div className="text-center">
        <h1>Hello Friend.</h1>
      </div>
      <div className="description text-center">
        <figure>
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer ">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
      <br />
      <div className="articles row row-cols-1 row-cols-md-2 g-4 mx-auto">
        {data.allStrapiArticulo.edges.map(({ node }) => (
          <div className="col-md-4" key={node.strapiId}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{node.titulo}</h5>
                <p className="card-text text-truncate">{node.descripcion}</p>
                <Link to={`/${node.strapiId}`} className="btn btn-primary">
                  {"Leer ->"}
                </Link>
              </div>
              <div className="card-footer">
                Published {`--> ${timeHandler(node.created_at, "T")}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticulo {
      edges {
        node {
          strapiId
          titulo
          descripcion
          created_at
        }
      }
    }
  }
`
