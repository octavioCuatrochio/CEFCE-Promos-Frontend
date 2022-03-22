import PromoOptions from "./PromoOptions";
import PromoItem from "../Promo/PromoItem";
import "./PromoCustomItem.css";

function PromoCustomItem(props) {

    let classes = "";
    if (props.tipo !== "cefce") {
        classes = "promo-item__facultad";
    }

    return (
        <div className="promo-custom__container">
            <PromoItem className={classes}
                name={props.nombre}
                description={props.descripcion}
                img={props.imagen}
                ubication={props.lugar}
            />
            <PromoOptions id={props.id} />
        </div>
    )
}

export default PromoCustomItem;