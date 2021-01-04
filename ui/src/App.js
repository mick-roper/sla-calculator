import React from 'react';
import Grid from './grid';
import data from './data.json';
import './App.css';

export default () => (<section className="container">
  <div className="item header">
    <h1>Availability Calculator</h1>
  </div>
  <div className="item content">
    <Grid data={data} />
  </div>
  <div className="item footer">
    <p>This is the footer</p>
  </div>
</section>);
