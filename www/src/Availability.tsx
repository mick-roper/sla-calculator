import React from 'react'

interface Props {
    availability: number
}

export const Availability: React.FC<Props> = ({ availability }): React.ReactElement => {
    return (
        <div>
            <h1>System Availability {(availability * 100).toFixed(4)}%</h1>
        </div>
    )
}