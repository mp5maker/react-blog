import React from 'react'

import "./styles.scss"

export const Table = ({ properties = [], header, body, list = [], tableWidth } = {}) => {
    return (
        <div className="table-container">
            <table
                style={{
                    tableLayout: `fixed`,
                    width: `100%`
                }}>
                <thead>
                    <tr>
                        {
                            properties.map((column, columnIndex) => {
                                return (
                                    <th
                                        key={columnIndex}
                                        style={{
                                            width: tableWidth[column]
                                        }}>
                                        <strong>
                                            { header({ column }) }
                                        </strong>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        properties.map((column, columnIndex) => {
                                            return (
                                                <td
                                                    data-header={header({ column })}
                                                    style={{
                                                        width: tableWidth[column]
                                                    }}
                                                    key={`${rowIndex}-${columnIndex}`}>
                                                    { body({ row, column }) }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}