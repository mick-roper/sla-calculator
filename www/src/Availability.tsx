import React from 'react'

interface Props {
    getAvailability: () => number
}

export const Availability: React.FC<Props> = (props): React.ReactElement => {
    return (
        <div>
            <h3>Availability {props.getAvailability()}%</h3>
        </div>
    )
}