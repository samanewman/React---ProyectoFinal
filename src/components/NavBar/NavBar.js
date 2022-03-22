//Navbar con las opciones navegables y los links del ruteo

import '../CartWidget/CartWidget.css';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Logo/>
            <ul className = "UlNavBar">
                <li><Link className = "ItemNav" to="/">Productos</Link></li>
                <li className = "ItemNav" id="MenuCategoria">Categorías
                    <ul className = "SubmenuCategoria">
                        <li><Link className = "ItemNav" to="/categoria/pokemon">Pokémon</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/sailor-moon">Sailor Moon</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/naruto">Naruto</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/darling-in-the-franxx">Darling in the Franxx</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/star-wars">Star Wars</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/rick-y-morty">Rick y Morty</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/mi-vecino-totoro">Mi vecino Totoro</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/kimetsu-no-yaiba">Kimetsu No Yaiba</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/shingeki-no-kyojin">Shingeki No Kyojin</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/haikyuu">Haikyuu</Link></li>
                    </ul>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    );
  }
  
  export default NavBar;
  
  