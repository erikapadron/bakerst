import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer, { Data } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import {Switch, Route} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { createContext, useState } from 'react';
import CartContextProvider from './context/CartContext';

export const ContextApp= createContext()

function App() {

  return (
    <CartContextProvider>
      <ContextApp.Provider>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <Switch>
          <Route path='/' exact>
          <ItemListContainer/> 
          </Route>
          <Route path='/categoria/:idCategoria' component={ItemListContainer}/>
          <Route path='/detalle' exact>
          <ItemDetailContainer />
          </Route>
          <Route path='/detalle/:idDetalle' component={ItemDetailContainer}/>
          <Route path='/cart' exact>
          <Cart/>
          </Route>
        </Switch>
      </ContextApp.Provider>
    </CartContextProvider>
  )
}

export default App;
