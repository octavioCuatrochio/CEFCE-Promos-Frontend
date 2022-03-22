import { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Container from "./components/UI/Container";
import PromoContainer from "./components/Promo/PromoContainer"
import Welcome from './components/UI/Welcome';
import NavBar from './components/NavBar/NavBar';
import PromoList from './components/Promo/PromoList';

import AdminContainer from "./components/Admin/AdminContainer";

function App() {

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
      descripcion: "una promo re piolaaa"
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
      id: 0,
      dia: "lunes",
      nombre: "Descuento Antares",
      lugar: "Av. España 2254",
      tipo: "facultad",
      imagen: null,
      descripcion: "Descuento en birras y papas toda la noche de un 30%."
    }
  ]

  const [promos, setPromos] = useState(PROMOS_PLACEHOLDER);

  let cefcePromos = [
    {
      dia: "Lunes",
      id: 0,
      promos: []
    },
    {
      dia: "Martes",
      id: 1,
      promos: []
    },
    {
      dia: "Miércoles",
      id: 2,
      promos: []
    },
    {
      dia: "Jueves",
      id: 3,
      promos: []
    },
    {
      dia: "Viernes",
      id: 4,
      promos: []
    },
    {
      dia: "Sábado",
      id: 5,
      promos: []
    },
    {
      dia: "Domingo",
      id: 6,
      promos: []
    }
  ];
  let uniPromos = [];
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);


  // const fetchPromosHandler = useCallback(async () => {
  //   // setIsLoading(true);
  //   // setError(null);
  //   try {
  //     const response = await fetch('https://cefcepromoapi.000webhostapp.com/api/promos');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const loadedPromos = [];

  //     console.log(data);

  //     // for (const key in data) {
  //     //   loadedMovies.push({
  //     //     id: key,
  //     //     title: data[key].title,
  //     //     openingText: data[key].openingText,
  //     //     releaseDate: data[key].releaseDate
  //     //   })
  //     // }

  //     // setMovies(loadedMovies);
  //   } catch (error) {
  //     // setError(error.message);
  //   }
  //   // setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchPromosHandler();
  // }, []);

  function filterPromos(newPromos) {
    for (let auxPromo of newPromos) {

      if (auxPromo.tipo === "cefce") {
        switch (auxPromo.dia) {
          case "lunes":
            cefcePromos[0].promos.push(auxPromo);
            break;
          case "martes":
            cefcePromos[1].promos.push(auxPromo);
            break;
          case "miercoles":
            cefcePromos[2].promos.push(auxPromo);
            break;
          case "jueves":
            cefcePromos[3].promos.push(auxPromo);
            break;
          case "viernes":
            cefcePromos[4].promos.push(auxPromo);
            break;
          case "sabado":
            cefcePromos[5].promos.push(auxPromo);
            break;
          case "domingo":
            cefcePromos[6].promos.push(auxPromo);
            break;
        }

      } else {
        uniPromos.push(auxPromo);
      }
    }
  }
  filterPromos(promos);

  return (
    <Switch>
      <Route path="/admin/45545" exact>
        <AdminContainer/>
      </Route>
      <Route path="/">
        <Container>
          <Welcome 
          title="Exa descuentos & Beneficios"
          subtitle="Mirá y aprovechá todos los beneficios que tenemos para vos!"
           />
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/cefce" />
            </Route>
            <Route path="/cefce">
              <PromoContainer items={cefcePromos} />
            </Route>
            <Route path="/facultad">
              <PromoList items={uniPromos} />
            </Route>
          </Switch>
        </Container>
      </Route>
    </Switch>
  );
}

export default App;
