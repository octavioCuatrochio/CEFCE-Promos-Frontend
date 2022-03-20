import "./PromoDayHeader.css";
import Chevron from "../svg/Chevron";
import React from "react";

class PromoDayHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        }
        this.myDiv = React.createRef();
    }

    componentDidMount() {
        const height = this.myDiv.current.clientHeight;
        // this.props.onRender(height);
    }

    render() {
        return (
            <header ref={this.myDiv} className="promo-day__header" onClick={this.props.onAction}>
                <h1>{this.props.title}</h1>
                {/* <Chevron fill="white" width="20" /> */}
            </header>
        );
    }
}


export default PromoDayHeader;