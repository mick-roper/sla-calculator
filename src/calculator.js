import React from 'react'

import Availability from './availability.json'

const regions = []

let cloudAvailability = {}

export const Calculator = () => (<div>
  <div className="picker">
    <select onChange={e => cloudAvailability = Availability[e.target.value]}>
      <option>Pick one</option>
      <option>aws</option>
    </select>

    {
      Object.keys(cloudAvailability).forEach((k, i) => (<span key={i}>{k}</span>))
    }

    <button onClick={() => { regions.push({  }) }} >Add Region</button>
  </div>
</div>)