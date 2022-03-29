import React, { useState } from "react";
import Login from "../Login/Login";
import AdminPanel from "./AdminPanel";

function AdminContainer(params) {

    const [logged, setLogged] = useState(false);

    return (
        <React.Fragment>
            {!logged && <Login onValid={setLogged} />}
            {logged &&
                <AdminPanel />
            }
        </React.Fragment>
    )
}

export default AdminContainer;