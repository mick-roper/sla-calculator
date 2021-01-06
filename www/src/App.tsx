import React from 'react';
import Container from '@material-ui/core/Container'
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Availability } from './Availability'
import {Formula} from './Formula'
import './App.css';

function App() {
  return (
    <Container className="App">
      <CssBaseLine />
      <Availability getAvailability={() => -1} />
      <Formula />
    </Container>
  );
}

export default App;
