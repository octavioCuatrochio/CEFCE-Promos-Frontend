import { useState } from "react";
import Button from "../UI/Button";
import Welcome from "../UI/Welcome";
import AdminList from "./AdminList";
import "./AdminPanel.css";
import CreatePromo from "./CreatePromo";


function AdminPanel() {

    let PROMOS_PLACEHOLDER = [
        {
          id: 0,
          dia: "lunes",
          nombre: "Descuento Antares",
          lugar: "Av. España 2254",
          tipo: "cefce",
          imagen: null,
          descripcion: "Descuento en birras y papas toda la noche de un 30%."
        },
        {
          id: 1,
          dia: "lunes",
          nombre: "promo asasas",
          lugar: "calle falsa 123",
          tipo: "cefce",
          imagen: null,
          descripcion: "una promo re piolaaaaaaaasa"
        },
        {
          id: 2,
          dia: "lunes",
          nombre: "promo asasas",
          lugar: "calle falsa 123",
          tipo: "cefce",
          imagen: null,
          descripcion: "una promo re piolaaa"
        },
        {
          id: 3,
          dia: "lunes",
          nombre: "promo asasas",
          lugar: "calle falsa 123",
          tipo: "facultad",
          imagen: null,
          descripcion: "una promo re piolaaa"
        },
        {
          id: 4,
          dia: "lunes",
          nombre: "Descuento Antares",
          lugar: "Av. España 2254",
          tipo: "facultad",
          imagen: null,
          descripcion: "Descuento en birras y papas toda la noche de un 30%."
        }
      ]

    const [isOpened, setIsOpened] = useState(false);

    function toggleOpenedHandler() {
        setIsOpened(!isOpened);
    }

    return (
        <div className="admin-panel__container">
            <Welcome
                title="Admin Panel"
                subtitle="Editá, agregá y borrá los descuentos y promociones actuales."
            />
            <div className="create-promo__wrapper">
                {isOpened && <CreatePromo onCancel={toggleOpenedHandler} />}
                {!isOpened && <Button alt={true} className="create-promo__button"
                    onClick={toggleOpenedHandler} >Añadir nuevo </Button>}
            </div>

            <AdminList title="Publicados" items={PROMOS_PLACEHOLDER}/>

        </div>
    )
}

export default AdminPanel;