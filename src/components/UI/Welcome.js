import "./Welcome.css";

function Welcome(props) {
    return(
        <div className="welcome">
            <h1>{props.title}</h1>
            <div className="welcome-bar"/>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

export default Welcome;