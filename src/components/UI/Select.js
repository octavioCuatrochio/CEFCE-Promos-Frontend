import "./Select.css";

function Select(props) {

    let classes = "select ";
    if (props.className) classes += props.className;

    // console.log(props);

    if (props.valid != null) {
        if (!props.valid) {
            classes += "select_invalid ";
        }
    }

    return (
        <select className={classes} onChange={props.onChange}>
            <option selected disabled>{props.title}</option>
            {props.children}
        </select>
    )
}

export default Select;