import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  const onAdd = (cant) => {
    console.log(cant)
  }
  return (
  <>
  <NavBar>
    <CartWidget/>
  </NavBar>
  < ItemListContainer /> <ItemCount stock= {6} initial={1} onAdd={onAdd} />
  </>
  )
}

export default App;
