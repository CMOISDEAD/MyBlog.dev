import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
 
const ArticleTemplate = ({ data }) => (
  <Layout>
    <div className="mt-5 container">
      <div className="title text-center">
        <h1>{data.strapiArticulo.titulo}</h1>
      </div>
      <br/>
      <div className="text-start ">
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