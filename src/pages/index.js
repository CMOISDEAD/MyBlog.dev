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
          <div className="card w-50 col mb-3" key={node.strapiId}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://res.cloudinary.com/teepublic/image/private/s--1zIyIqeL--/c_crop,x_10,y_10/c_fit,h_1298/c_crop,g_north_west,h_1260,w_1260,x_103,y_-38/co_rgb:c62b29,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_0,y_-38/bo_126px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1491661476/production/designs/1409549_1.jpg" alt="..." 
                  style={{
                    width: `10vw`,
                    height: `auto`,
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{node.titulo}</h5>
                  <p className="card-text">Sit ab nisi itaque consequatur sint Numquam ad voluptatum molestias consectetur voluptates reprehenderit ducimus consequatur? Et voluptatem consectetur pariatur non asperiores. Incidunt cumque sequi inventore itaque quos perspiciatis unde ratione.</p>
                  <Link to={`/${node.strapiId}`} className="btn btn-primary">
                    {"Leer ->"}
                  </Link>
                  <p className="card-text">
                    <small className="text-muted">
                      {node.created_at}
                    </small>
                  </p>
                </div>
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
