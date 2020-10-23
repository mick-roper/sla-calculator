import React from 'react';

const data = {
    "global": {
        "provider": "aws",
        "services": {
            "route-53": 0.999
        }
    },
    "regional": [
        {
            provider: 'aws',
            region: 'eu-central-1',
            services: {
                's3': 0.9995,
                'lambda': 0.995
            }
        },
        {
            provider: 'aws',
            region: 'us-east-1',
            services: {
                's3': 0.9995,
                'lambda': 0.995,
                's3-infrequent-access': 0.99
            }
        }
    ]
}

const getAvailability = (services) => Object.
    entries(services).
    map(([_, value]) => value).
    reduce((a, b) => a * b)

const calculateSystemAvailability = ({ global, regional }) => {
    const unavailability = regional.map(({ services }) => getAvailability(services))
    console.log('regional unavailability', unavailability)

    const globalAvailability = getAvailability(global.services)
    console.log('globalAvailabiltiy', globalAvailability)

    const totalRegionalAvailability = unavailability.reduce((a, b) => a * b)
    console.log('total regional availability', totalRegionalAvailability)

    const systemAvailability = globalAvailability * totalRegionalAvailability
    console.log('system availability', systemAvailability)

    return systemAvailability
}

const Row = ({ provider, region, services }) => (<tr>
    <td>{provider}</td>
    <td>{region}</td>
    <td>
        <ul>
            {Object.entries(services).map(([key], i) => (<li key={i} >{key}</li>))}
        </ul>
    </td>
    <td>
        {(getAvailability(services).toFixed(5) * 100)}%
    </td>
</tr>)

export default () => {
    return <div>
        <table>
            <thead>
                <tr>
                <th>Provider</th>
                <th>Region</th>
                <th>Services</th>
                <th>Availability</th>
                </tr>
            </thead>
            <tbody>
                <Row provider={data.global.provider} region="Global" services={data.global.services} />
                {
                    data.regional.map((region, i) => <Row key={i} {...region} />)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <b>System Availability: {calculateSystemAvailability(data).toFixed(4) * 100}%</b>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
}