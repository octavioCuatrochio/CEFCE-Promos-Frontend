import "./PromoDayHeader.css";
import React from "react";

function PromoDayHeader(props) {

    return (
        <header className="promo-day__header" onClick={props.onAction}>
            <h1>{props.title}</h1>
            {props.children}
        </header>
    );
}


export default PromoDayHeader;