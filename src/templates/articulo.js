import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
 
const ArticleTemplate = ({ data }) => (
  <Layout>
    <div className="mt-5 container">
      <div className="title d-block">
        <div className="header ">
        <Link to="/" className="btn btn-primary text-start">
          {"<-"} Volver? 
        </Link>
        <h1 className="text-center">{data.strapiArticulo.titulo}</h1>
        </div>
      </div>
      <br/>
      <div className="text-start">
        <p>{data.strapiArticulo.descripcion}</p>
      </div>
    </div>
  </Layout>
)
 
export default ArticleTemplate
 
export const query = graphql`
  query ArticleTemplate($id: Int!) {
    strapiArticulo(strapiId: { eq: $id }) {
      titulo
      descripcion
    }
  }
`