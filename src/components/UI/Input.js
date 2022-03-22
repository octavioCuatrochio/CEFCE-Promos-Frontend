import "./Input.css";

function Input(props) {

    function inputHandler(event) {
        props.saveInput(event.target.value);
    }

    return (
        <input className="input" placeholder={props.placeholder} onChange={inputHandler} type={props.type} value={props.value} />
    )
}

export default Input;