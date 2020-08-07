import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout } from 'Components/Layout'
import { Table } from 'Components/Table'

export default function MyFiles({ data }) {
    return (
        <>
            <Layout page={`My Site Files`}>
                <Table
                    list={data.allFile.nodes}
                    properties={[
                        'relativePath',
                        'prettySize',
                        'extension',
                        'birthTime'
                    ]}
                    body={({ row, column }) => get(row, column, '')}
                    header={({ column }) => {
                        if (column === 'relativePath') return 'Relative Path'
                        if (column === 'prettySize') return 'Pretty Size'
                        if (column === 'extension') return 'Extension'
                        if (column === 'birthTime') return 'Created'
                        return
                    }}
                    tableWidth={{
                        relativePath: `25%`,
                        prettySize: `25%`,
                        extension: `25%`,
                        birthTime: `25%`,
                    }}
                />
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