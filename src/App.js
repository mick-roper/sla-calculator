import React from 'react';
import Grid from './grid';
import data from './data.json';
import './App.css';

export default () => (<div className="grid-container">
  <header>
    <h1>Availability Calculator</h1>
  </header>
  <main>
    <Grid data={data} />
  </main>
  <footer>
    <p>2020 Availability Calculator</p>
  </footer>
</div>);
