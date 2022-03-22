import Input from "../UI/Input";
import Button from "../UI/Button";
import "./CreatePromo.css";

function CreatePromo(props) {

    // const []

    function submitHandler(event){
        event.preventDefault();
    }

    return (
        <form className="create-promo__form" onSubmit={submitHandler}>
            <select name="dia">
                <option selected disabled>Día</option>
                <option value="value1">Value 1</option>
                <option value="value2" >Value 2</option>
                <option value="value3">Value 3</option>
            </select>

            <Input placeholder="Título" />
            <Input placeholder="Descripción" />
            <Input placeholder="Lugar" />

            <select>
                <option selected disables>Tipo</option>
                <option value="cefce">CEFCE</option>
                <option value="Facultad">Facultad</option>
            </select>

            <Input placeholder="Imagen (opcional)" />

            <div className="create-promo__button-container">
                <Button alt={true} onClick={props.onCancel}>Cancelar</Button>
                <Button type="submit">Guardar</Button>
            </div>
        </form>
    )
}

export default CreatePromo;