import PromoDayHeader from "./PromoDayHeader";
import PromoItem from "./PromoItem";
import "./PromoDayContainer.css";
import React from "react";

class PromoDayContainer extends React.Component {

    constructor(props) {

        super(props);

        // this.state = {
        //     isOpened: false,
        //     closedHeight: null
        // };

        // this.dayContainerHeight = null;

        // this.toggleHandler = () => {
        //     if (this.state.isOpened == true) {
        //         this.setState({ isOpened: false })
        //     } else {
        //         this.setState({ isOpened: true })
        //     }
        // }

        // this.getHeightHandler = (height) => {
        //     this.dayContainerHeight = height + 2;

        //     this.setState({
        //         // isOpened: true,
        //         closedHeight: height + 2
        //     })
        // }
    }

    // componentDidUpdate() {
    // console.log("aaa");
    // console.log(this.state.isOpened);
    // if (this.state.isOpened == true) {
    //     this.dayContainerHeight = "100%";
    // } else {
    //     this.dayContainerHeight = this.state.closedHeight;
    // }
    // }


    render() {
        return (
            <li className="promo-day-container" style={{ maxHeight: this.dayContainerHeight }}>
                <PromoDayHeader onAction={this.toggleHandler} onRender={this.getHeightHandler} title={this.props.day} />
                <ul>
                    {this.props.items.map((auxPromo) => (
                        <PromoItem
                            key={auxPromo.id}
                            name={auxPromo.nombre}
                            description={auxPromo.descripcion}
                            img={auxPromo.imagen}
                            ubication={auxPromo.lugar}
                        />
                    ))}
                </ul>
            </li>
        );
    }
}

export default PromoDayContainer;