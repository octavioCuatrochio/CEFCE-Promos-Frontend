import PromoDayHeader from "./PromoDayHeader";
import PromoItem from "./PromoItem";
import "./PromoDayContainer.css";
import Chevron from "../svg/Chevron";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function PromoDayContainer(props) {

    const [isOpened, setIsOpened] = useState(false);

    function toggleHandler() {
        setIsOpened(!isOpened);
    }

    const openAnimation = useSpring({
        from: { maxHeight: "1px" },
        to: { maxHeight: isOpened ? "100vh" : "1px" },
        config: { duration: "100" }
    });

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)",
            opacity: "0%"
        },
        to: {
            transform: isOpened ? "rotate(0deg)" : "rotate(180deg)",
            opacity: isOpened ? "100%" : "0%"
        },
        config: { duration: "500" }
    });

    return (
        <li className="promo-day-container" >
            <PromoDayHeader onAction={toggleHandler} title={props.day} >
                <Chevron className="promo-day__chevron" style={iconAnimation} />
            </PromoDayHeader>
            <animated.ul className="promo-day__list" style={openAnimation}>
                {props.items.map((auxPromo) => (
                    <PromoItem
                        key={auxPromo.id}
                        name={auxPromo.nombre}
                        description={auxPromo.descripcion}
                        img={auxPromo.imagen}
                        ubication={auxPromo.lugar}
                    />
                ))}
            </animated.ul>
        </li >
    );
}

export default PromoDayContainer;