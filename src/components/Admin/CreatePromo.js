import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import "./CreatePromo.css";
import { useState } from "react";

function CreatePromo(props) {

    const [day, setDay] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [ubi, setUbi] = useState("");
    const [type, setType] = useState();
    const [image, setImage] = useState(null);

    let validInputs = {
        day: true,
        title: true,
        desc: true,
    }

    const [valid, setValid] = useState(validInputs);

    async function submitHandler(event) {
        event.preventDefault();

        let promo = {
            dia: day,
            nombre: title,
            lugar: ubi,
            tipo: type,
            imagen: image,
            descripcion: desc
        }

        fetch("https://cefcepromoapi.000webhostapp.com/api/promo", {
            method: 'POST',
            // headers: { "Content-Type": "application/json" },
            body: JSON.stringify(promo)
        })
            .then(response => response.json())
            .then(newPromo => props.onNewPromo(newPromo))
            .catch(error => console.log(error));
        props.onClose();
    }

    function daySelectHandler(event) {
        setDay(event.target.value);
    }

    function typeSelectHandler(event) {
        setType(event.target.value);
    }

    return (
        <form className="create-promo__form" onSubmit={submitHandler}>

            <Select title="Día" valid={valid.day} onChange={daySelectHandler}>
                <option value="lunes">Lunes</option>
                <option value="martes" >Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves" >Jueves</option>
                <option value="viernes" >Viernes</option>
                <option value="sabado" >Sábado</option>
                <option value="domingo" >Domingo</option>
            </Select>

            <Input placeholder="Título" saveInput={setTitle} valid={valid.title} value={title} />
            <Input placeholder="Descripción" saveInput={setDesc} value={desc} />
            <Input placeholder="Lugar" saveInput={setUbi} value={ubi} />

            <select name="tipo" onChange={typeSelectHandler}>
                <option selected disabled>Tipo</option>
                <option value="cefce">CEFCE</option>
                <option value="Facultad">Facultad</option>
            </select>

            <Input placeholder="Imagen (opcional)" saveInput={setImage} value={image} />

            <div className="create-promo__button-container">
                <Button alt={true} onClick={props.onClose}>Cancelar</Button>
                <Button type="submit">Guardar</Button>
            </div>
        </form>
    )
}

export default CreatePromo;