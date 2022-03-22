import "./Button.css";

function Button(props) {

    let classes = "button ";
    
    if (props.alt != null && props.alt === true) classes += "button-alt ";
    else classes += "button-og ";

    if (props.className != null) classes += props.className;

    return (
        <button onClick={props.onClick} type={props.type} className={classes}>{props.children}</button>
    )
}

export default Button;