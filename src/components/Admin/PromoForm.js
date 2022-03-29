import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import "./CreatePromo.css";
import { useState } from "react";

function PromoForm(props) {

    let dayAux = "";
    let titleAux = "";
    let descAux = "";
    let ubiAux = "";
    let typeAux = "";
    let imageAux = null;

    if (props.previous) {
        let prev = props.previous;

        dayAux = prev.dia;
        titleAux = prev.nombre;
        descAux = prev.descripcion;
        ubiAux = prev.lugar;
        typeAux = prev.tipo;
        imageAux = prev.imagen;
    }

    const [day, setDay] = useState(dayAux);
    const [title, setTitle] = useState(titleAux);
    const [desc, setDesc] = useState(descAux);
    const [ubi, setUbi] = useState(ubiAux);
    const [type, setType] = useState(typeAux);
    const [image, setImage] = useState(imageAux);

    async function submitCreateHandler(event) {
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

    async function submitUpdateHandler(event) {
        event.preventDefault();

        let promo = {
            dia: day,
            nombre: title,
            lugar: ubi,
            tipo: type,
            imagen: image,
            descripcion: desc
        }

        // fetch("http://localhost/Dummy API/api/promo/"
            fetch("https://cefcepromoapi.000webhostapp.com/api/promo/"
            + props.previous.id, {
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
        <form className="create-promo__form" onSubmit={props.previous !== null ? submitUpdateHandler : submitCreateHandler}>

            <Select title="Día" value={day} onChange={daySelectHandler}>
                <option value="lunes">Lunes</option>
                <option value="martes" >Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves" >Jueves</option>
                <option value="viernes" >Viernes</option>
                <option value="sabado" >Sábado</option>
                <option value="domingo" >Domingo</option>
            </Select>

            <Input placeholder="Título" saveInput={setTitle} value={title} />
            <Input placeholder="Descripción" saveInput={setDesc} value={desc} />
            <Input placeholder="Lugar" saveInput={setUbi} value={ubi} />

            <Select title="Tipo" value={type} onChange={typeSelectHandler}>
                <option value="cefce">CEFCE</option>
                <option value="Facultad">Facultad</option>
            </Select>

            <Input placeholder="Imagen (opcional)" saveInput={setImage} value={image} />

            <div className="create-promo__button-container">
                <Button alt={true} onClick={props.onClose}>Cancelar</Button>
                <Button type="submit">Guardar</Button>
            </div>
        </form>
    )
}

export default PromoForm;