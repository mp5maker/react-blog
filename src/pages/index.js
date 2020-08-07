import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { Layout } from 'Components/Layout'
import { CardCollection } from 'Components/Card/Collection'

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date
                title
              }
              fields {
                slug
              }
              excerpt
              timeToRead
              html
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Layout page={`Home`}>
        <CardCollection list={data.allMarkdownRemark.edges} />
      </Layout>
    </>
  )
}
