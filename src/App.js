import React from 'react'
import { render } from 'react-dom'
import Home from './js/containers/home'
import data from './api.json'

render(<Home data={data}/>, document.getElementById('app'))