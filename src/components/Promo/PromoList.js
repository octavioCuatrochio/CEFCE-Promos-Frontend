import PromoItem from "./PromoItem";
import "./PromoList.css";

function PromoList(props) {
    return (
        <ul className="promo-list">
            {props.items.map((auxPromo) => (
                <PromoItem
                    key={auxPromo.id}
                    name={auxPromo.nombre}
                    description={auxPromo.descripcion}
                    img={auxPromo.imagen}
                    ubication={auxPromo.lugar}
                />
            ))}
        </ul>
    )
}

export default PromoList;