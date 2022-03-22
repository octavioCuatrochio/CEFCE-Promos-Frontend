import "./PromoItem.css";
import Location from "../svg/Location";

function PromoItem(props) {

    let classes = "promo-item ";
    if(props.className != null) classes += props.className;

    return (
        <li className={classes}>
            <div className="promo-info">
                <h1>{props.name}</h1>
                <h2>{props.description}</h2>
            </div>
            <div className="promo-misc">
                {props.img != null && <img alt="promo imagen" src={props.img} />}
                {props.img == null && <img alt="promo imagen" src="https://cdn.shopify.com/s/files/1/0287/0322/7979/products/antares_a0fa3ee9-8753-414e-a8c1-df1b68961808_900x.jpg?v=1630373855"/>}
                <div className="promo-misc__ubication">
                    <Location fill="white" width="20" />
                    <h3>{props.ubication}</h3>
                </div>
            </div>
        </li>
    );
}

export default PromoItem;