import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import rutas from './route-cofig';
import Menu from './utilities/Menu';
import configurarValidaciones from './validaciones';


function App() { 

  configurarValidaciones();

  return (
      
    <>
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          {rutas.map(ruta => 
            <Route 
              key={ruta.path} 
              path={ruta.path}  
              exact={ruta.exact}>         
                <ruta.componente />
            </Route>) }          
        </Switch>
      
      </div>
    
      </BrowserRouter>
    
    </>
  );
}

export default App;
