import { useState, useCallback, useEffect } from "react";
import Button from "../UI/Button";
import Welcome from "../UI/Welcome";
import AdminList from "./AdminList";
import Popup from "../UI/Popup";
import "./AdminPanel.css";
import CreatePromo from "./CreatePromo";
import PromoForm from "./PromoForm";


function AdminPanel() {


  // let PROMOS_PLACEHOLDER = [
  //   {
  //     id: 0,
  //     dia: "lunes",
  //     nombre: "Descuento Antares",
  //     lugar: "Av. España 2254",
  //     tipo: "cefce",
  //     imagen: null,
  //     descripcion: "Descuento en birras y papas toda la noche de un 30%."
  //   },
  //   {
  //     id: 1,
  //     dia: "lunes",
  //     nombre: "promo asasas",
  //     lugar: "calle falsa 123",
  //     tipo: "cefce",
  //     imagen: null,
  //     descripcion: "una promo re piolaaaaaaaasa"
  //   },
  //   {
  //     id: 2,
  //     dia: "lunes",
  //     nombre: "promo asasas",
  //     lugar: "calle falsa 123",
  //     tipo: "cefce",
  //     imagen: null,
  //     descripcion: "una promo re piolaaa"
  //   },
  //   {
  //     id: 3,
  //     dia: "lunes",
  //     nombre: "promo asasas",
  //     lugar: "calle falsa 123",
  //     tipo: "facultad",
  //     imagen: null,
  //     descripcion: "una promo re piolaaa"
  //   },
  //   {
  //     id: 4,
  //     dia: "lunes",
  //     nombre: "Descuento Antares",
  //     lugar: "Av. España 2254",
  //     tipo: "facultad",
  //     imagen: null,
  //     descripcion: "Descuento en birras y papas toda la noche de un 30%."
  //   }
  // ]

  const [promos, setPromos] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [editedPromo, setEditedPromo] = useState({});


  const fetchPromosHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const response = await
        fetch('https://cefcepromoapi.000webhostapp.com/api/promos');
      // fetch("http://localhost/Dummy API/api/promos");
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setPromos(data);
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false); 
  }, []);

  useEffect(() => {
    fetchPromosHandler();
  }, [fetchPromosHandler]);

  function toggleEditPanelHandler() {

    if (!showEditPanel) {
      disableScroll();
    } else enableScroll();

    setShowEditPanel(!showEditPanel);
  }


  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  function toggleOpenedHandler() {
    setIsOpened(!isOpened);
  }

  function deleteHandler(id) {

    setPromos(
      promos.filter(function (promo) {
        return promo.id !== id;
      })
    );

    fetch("https://cefcepromoapi.000webhostapp.com/api/promo/" + id, {
      method: 'GET',
      // headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(code => console.log(code))
      .catch(error => console.log(error));
  }

  function editHandler(promoData) {
    console.log(promoData);
    setEditedPromo(promoData);
    toggleEditPanelHandler();
  }


  function saveNewPromoHandler(promo) {
    setPromos((prevPromos) => {
      return [
        promo,
        ...prevPromos
      ]
    });
  }

  function saveUpdatedPromoHandler(updatedPromo) {

    const promosAux = promos.filter((promo) => promo.id !== updatedPromo.id);

    setPromos([
        updatedPromo,
        ...promosAux
      ]);
  }

  return (
    <div className="admin-panel__container">
      {showEditPanel &&
        <Popup>
          <PromoForm onClose={toggleEditPanelHandler} previous={editedPromo} onNewPromo={saveUpdatedPromoHandler} />
        </Popup>
      }
      <Welcome
        title="Admin Panel"
        subtitle="Editá, agregá y borrá los descuentos y promociones actuales."
      />
      <div className="create-promo__wrapper">
        {isOpened && <CreatePromo onClose={toggleOpenedHandler} onNewPromo={saveNewPromoHandler} />}
        {!isOpened && <Button alt={true} className="create-promo__button"
          onClick={toggleOpenedHandler} >Añadir nuevo </Button>}
      </div>

      <AdminList title="Publicados" onEdit={editHandler} onDelete={deleteHandler} items={promos} />

    </div>
  )
}

export default AdminPanel;