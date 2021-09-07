import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
  <>
  <NavBar>
    <CartWidget/>
  </NavBar>
  < ItemListContainer />
  </>
  )
}

export default App;
