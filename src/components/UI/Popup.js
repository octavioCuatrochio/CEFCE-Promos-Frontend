import Card from "./Card";
import "./Popup.css";

function Popup(props) {

    return (
        <div className="popup">
            <Card>
                {props.children}
            </Card>
            <div className="popup_background" />
        </div>
    )
}

export default Popup;