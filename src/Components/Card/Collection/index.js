import React from 'react'
import moment from 'moment'

import { Card } from 'Components/Card'
import { NavLink } from 'Components/NavLink'

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
                                        <NavLink
                                            borderRadius={`5px`}
                                            to={node.fields.slug}>
                                            Details
                                        </NavLink>
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