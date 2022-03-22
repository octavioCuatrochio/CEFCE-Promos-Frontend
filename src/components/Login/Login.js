import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./Login.css";

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function submitHandler(event) {
        event.preventDefault();
        if (username === "Admin" && password === "88351") {
            props.onValid(true);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={submitHandler} className="login-form">
                <Input placeholder="Usuario" type="text" saveInput={setUsername} value={username} />
                <Input placeholder="Contraseña" type="password" saveInput={setPassword} value={password} />
                <Button type="submit">Ingresar</Button>
            </form>
        </div>
    )
}

export default Login;