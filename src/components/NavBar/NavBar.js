import "./NavBar.css";
import NavbarButton from "./NavbarButton";

function NavBar(props) {

    return (
        <nav className="nav-bar">
            <NavbarButton className="cefce-button" active="cefce-button__active" to="/cefce" title="CEFCE"/>
            <NavbarButton className="facultad-button" active="facultad-button__active" to="/facultad" title="Facultad"/>
        </nav>
    )
}

export default NavBar;