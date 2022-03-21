import "./PromoContainer.css";
import PromoDayContainer from "./PromoDayContainer";

function PromoContainer(props) {
    return (
        <div className="promo-container">
            <ul>
                {props.items.map((auxDia) => (
                    <PromoDayContainer key={auxDia.id} day={auxDia.dia} items={auxDia.promos} />
                ))}
            </ul>
        </div>
    )
}

export default PromoContainer;