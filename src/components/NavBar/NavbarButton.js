import { NavLink } from "react-router-dom";
import "./NavbarButton.css";

function NavbarButton(props) {

    let classes = "navbar-button ";
    if (props.className) classes += props.className;

    return (
        <NavLink className={classes} to={props.to} activeClassName={props.active}>
            <h1 className="navbar-button__title">{props.title}</h1>
        </NavLink>
    )
}

export default NavbarButton;