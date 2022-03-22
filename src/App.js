import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Productos from './components/Productos/Productos';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Categorias from './components/Categorias/Categorias';
import Carrito from './components/Carrito/Carrito';
import {ItemsProvider} from './components/CartContext/CartContext';

const App = () => {

  return (
    <ItemsProvider>
      <Router>
            <NavBar/>
            <Routes>
              <Route path = "/" element={<Productos />} />
              <Route path = "/DetalleDeProducto" element={<ItemDetailContainer />} />
              <Route path = "/DetalleDeProducto/:id" element={<ItemDetailContainer />} />
              <Route path = "/categoria/:categoria" element={<Categorias />} />
              <Route path = "/carritoList" element={<Carrito />} />
          </Routes>
          <Footer/>
        </Router>
    </ItemsProvider>

  );
};

export default App;

