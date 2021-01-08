import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Availability } from './Availability'
import { Formula } from './Formula'
import './App.css';
import { Grid } from '@material-ui/core';

interface Service {
  name: string,
  availability: number,
}

interface RegionalService {
  region: string,
  services: Service[],
}

interface ServiceModel {
  provider: string,
  globalServices: Service[]
  regionalServices: RegionalService[]
  systemAvailability: number
}

interface GlobalServiceAdder {

}

const caluclateCompoundAvailability = (services: Service[]): number => services.length > 0 ? services
  .map(({ availability }) => availability)
  .reduce((a, b) => a * b) : 1

const calculateSystemAvailability = (model: ServiceModel): number => {
  const totalRegionalAvailability = model.regionalServices.length > 0 ? 1 - model
    .regionalServices
    .map(({ services }) => 1 - caluclateCompoundAvailability(services))
    .reduce((a, b) => a * b) : 1
  console.log('regional availability:', totalRegionalAvailability)

  const globalAvailability = caluclateCompoundAvailability(model.globalServices)
  console.log('global availability:', globalAvailability)

  const systemAvailability = globalAvailability * totalRegionalAvailability
  console.log('total system availability:', systemAvailability)

  return systemAvailability
}

const ServiceBlock: React.FC<{ title: string, services: Service[] }> = ({ title, services }): React.ReactElement => (<div>
  <h5>{title}</h5>
  <ul>
    {
      services.length > 0 ? services.map((item, i) => <li key={i}>{item.name} - {item.availability}</li>) : 'add a service to continue...'
    }
  </ul>
</div>)

function App() {
  const [serviceModel, setServiceModel] = React.useState<ServiceModel>({ provider: 'abc', globalServices: [], regionalServices: [], systemAvailability: 0 })

  const addGlobalService = () => {
    const globalServices = serviceModel ? serviceModel.globalServices : []
    globalServices.push({ name: 'xyz', availability: 0.99 })
    const newServiceModel = { ...serviceModel, globalServices }
    setServiceModel({ ...newServiceModel, systemAvailability: calculateSystemAvailability(newServiceModel) })
  }

  const addRegionalService = () => {
    const regionalServices = serviceModel ? serviceModel.regionalServices : []
    regionalServices.push({ region: 'abc', services: [{ name: 'xyz', availability: 0.99 }, { name: 'xyz', availability: 0.995 }], })
    const newServiceModel = { ...serviceModel, regionalServices }
    setServiceModel({ ...newServiceModel, systemAvailability: calculateSystemAvailability(newServiceModel) })
  }

  return (
    <Container className="App">
      <CssBaseLine />
      <Availability availability={serviceModel.systemAvailability} />
      <Formula />
      <Grid container>
        <Grid item xs={6}>
          <Button onClick={addGlobalService}>Add Global Services</Button>
          <ServiceBlock title="global" services={serviceModel.globalServices} />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={addRegionalService}>Add Regional Services</Button>
          {
            serviceModel.regionalServices.map((item, i) => <ServiceBlock key={i} title={item.region} services={item.services} />)
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
