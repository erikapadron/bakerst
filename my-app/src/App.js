import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import {BrowserRouter as Switch, Route, Router} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { createContext } from 'react';
import {CartContextProvider} from './context/CartContext';

export const ContextApp= createContext()

function App() {

  return (
    <CartContextProvider>
      <Router>
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
      </Router>
    </CartContextProvider>
  );
}

export default App;
