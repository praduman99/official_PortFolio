import React from 'react'

import { 
    BrowserRouter as Router, 
    Route, 
    Switch 
} from 'react-router-dom'; 
import Home from './Component/Home';

const routeitems=[
  {
    to:"/",
    component:Home
  },
];


const  App=()=> {
  return (
    <div >
    <Router>
      <Switch>
        {routeitems.map((item,index)=>{
         return  <Route key={index} to={item.to} component={item.component}/>
        })}
      </Switch>
    </Router>
    </div>
  )
}

export default App
