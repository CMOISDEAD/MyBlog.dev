import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container">
      <div className="text-center">
        <h1>Hello Friend.</h1>
      </div>
      <div className="description text-center">
        <p>Welcome to your new Gatsby try of blog.</p>
        <p>Now go build something great...i guess.</p>
      </div>
      <br />
      <div className="articles row mx-auto">
        {data.allStrapiArticulo.edges.map(({ node }) => (
          <div className="col w-50">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{node.titulo}</h5>
                <p className="card-text">{node.descripcion}</p>
                <Link to={`/${node.strapiId}`} className="btn btn-primary">
                  {"Leer ->"}
                </Link>
              </div>
              <div className="card-footer">{node.created_at}</div>
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
