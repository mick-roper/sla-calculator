import React from 'react';
import Grid from './grid';
import data from './data.json';

console.log(data);

export default () => (<div>
  <h1>Availability Calculator</h1>
  <Grid data={data} />
</div>);
