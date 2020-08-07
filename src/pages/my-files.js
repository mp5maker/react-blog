import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'Components/Layout'

export default function MyFiles({ data }) {
    return (
        <>
            <Layout page={`My Site Files`}>
                <table
                    style={{
                        tableLayout: `fixed`,
                        width: `100%`
                    }}>
                    <thead>
                        <tr>
                            <th
                                style={{ width: `25%` }}
                                className={`text-left`}>
                                Relative Path
                            </th>
                            <th style={{ width: `25%` }}
                                className={`text-left`}>
                                Pretty Size
                            </th>
                            <th style={{ width: `25%` }}
                                className={`text-left`}>
                                Extensions
                            </th>
                            <th style={{ width: `25%` }}
                                className={`text-left`}>
                                Birth Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.allFile.nodes.map((node, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ width: `25%` }}>
                                            { node.relativePath }
                                        </td>
                                        <td style={{ width: `25%` }}>
                                            { node.prettySize }
                                        </td>
                                        <td style={{ width: `25%` }}>
                                            { node.extension }
                                        </td>
                                        <td style={{ width: `25%` }}>
                                            { node.birthTime }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Layout>
        </>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allFile {
            nodes {
                relativePath
                prettySize
                extension
                birthTime(fromNow: true)
            }
        }
    }
`