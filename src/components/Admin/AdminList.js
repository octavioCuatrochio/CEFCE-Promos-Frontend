import PromoDayHeader from "../Promo/PromoDayHeader";
import PromoCustomItem from "./PromoCustomItem";
import "./AdminList.css";


function AdminList(props) {

    return (
        <div>
            <PromoDayHeader title={props.title}></PromoDayHeader>
            <ul className="admin-list__list">
                {props.items.map((auxPromo) => (

                    <PromoCustomItem
                        key={auxPromo.id}
                        id={auxPromo.id}
                        dia={auxPromo.dia}
                        nombre={auxPromo.nombre}
                        descripcion={auxPromo.descripcion}
                        imagen={auxPromo.imagen}
                        lugar={auxPromo.lugar}
                        tipo={auxPromo.tipo}
                        onDelete={props.onDelete}
                        onEdit={props.onEdit}
                    />
                ))}
            </ul>
        </div>
    )
}

export default AdminList;