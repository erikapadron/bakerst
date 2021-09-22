import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <>
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
        
      </Switch>
      </>
    </BrowserRouter>
  )
}

export default App;
