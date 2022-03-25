import "./PromoOptions.css";
import TrashCan from "../svg/TrashCan";
import Pencil from "../svg/Pencil";

function PromoOptions(props) {

    function deleteHandler(){
        props.onDelete(props.id);
    }

    return (
        <div className="promo-options__container">
            <button onClick={deleteHandler} className="promo-options__delete">
                <TrashCan width="30" fill="white" />
            </button>
            <button className="promo-options__edit">
                <Pencil width="30" fill="white" />
            </button>
        </div>
    )
}

export default PromoOptions;