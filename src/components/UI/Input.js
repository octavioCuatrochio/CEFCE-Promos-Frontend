import "./Input.css";

function Input(props) {

    let classes = "input ";

    //si existe
    if (props.valid != null) {

        //si es false
        if (!props.valid) {
            classes += "invalid";
        }
    }

    function inputHandler(event) {
        props.saveInput(event.target.value);
    }

    return (
        <input className={classes} placeholder={props.placeholder} onChange={inputHandler} type={props.type} value={props.value} />
    )
}

export default Input;