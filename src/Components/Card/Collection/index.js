import React from 'react'
import { Card } from 'Components/Card'
import moment from 'moment'
import { Link } from 'gatsby'

export const CardCollection = ({ list = [] }) => {
    return (
        <>
            <section>
                {
                    list.map(({ node }) => {
                        return (
                            <React.Fragment key={node.id}>
                                <Card>
                                    <div>
                                        <h3>
                                            {node.frontmatter.title}{" "}
                                        </h3>
                                        <p>
                                            <small>
                                                {moment(node.frontmatter.date).toDate().toUTCString()}
                                            </small>
                                        </p>
                                        <p>{node.excerpt}</p>
                                        <Link to={node.fields.slug}>
                                            Details
                                        </Link>
                                    </div>
                                </Card>
                            </React.Fragment>
                        )
                    })
                }
            </section>
        </>
    )
}