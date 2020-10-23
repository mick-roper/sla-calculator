import React from 'react';
import './grid.css';

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
        },
        {
            provider: 'aws',
            region: 'us-east-1',
            services: {
                's3': 0.9995,
                'lambda': 0.995,
                's3-infrequent-access': 0.99
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
        },
        {
            provider: 'aws',
            region: 'us-east-1',
            services: {
                's3': 0.9995,
                'lambda': 0.995,
                's3-infrequent-access': 0.99
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
        },
        {
            provider: 'aws',
            region: 'us-east-1',
            services: {
                's3': 0.9995,
                'lambda': 0.995,
                's3-infrequent-access': 0.99
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

const Item = ({ provider, region, services }) => (<div className="grid-item green">
    <div>
        <p>Provider: <span className="badge orange">{provider}</span></p>
        <p>Region: <span className="badge orange">{region}</span></p>
        <p className="badge red">Availability: {(getAvailability(services).toFixed(4) * 100)}%</p>
    </div>
    <div>
        Services:
        <ul>
            {Object.entries(services).map(([key], i) => (<li className="blue" key={i}>{key}</li>))}
        </ul>
    </div>
</div>)

export default () => (<div>
    <div className="grid">
        <Item provider={data.global.provider} region="Global" services={data.global.services} />
        {
            data.regional.map((region, i) => <Item key={i} {...region} />)
        }
    </div>
    <h2>
        System Availability: {calculateSystemAvailability(data).toFixed(4) * 100}%
    </h2>
</div>)