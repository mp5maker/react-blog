import React from "react"
import { graphql } from 'gatsby'

import { Layout } from 'Components/Layout'

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <>
            <Layout page={`Blog Details`}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.html
                    }}
                    >
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            excerpt
        }
    }
`