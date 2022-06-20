import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


function CountriesList() {
  const [countries, setCountries] = useState([])
  const { alpha3Code } = useParams()

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
      })
      .catch((err) => console.log(err))
    }, [])

  return (
    <div>
      <h2>Coutries List</h2>
      {countries.map((el) => {
        
        return (
          <di>
            <img
            //   src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`}
            //   alt="flag4"
            />
            <p>
              {/* <Link to={`/countriesDetails/${el.alpha3Code}`}>
                {el.name.official}
              </Link> */}
            </p>
          </di>
        );
      })}
    </div>
  );
}

export default CountriesList



// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import "./App.css";

// function App() {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     Axios({
//       url: "https://jsonplaceholder.typicode.com/posts",
//     })
//       .then((response) => {
//         setList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [setList]);

//   return (
//     <div className="App">
//       <div>
//         {list.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
 
// const App = () => {
//   const [accesoAPI, setAccesoAPI] = useState({ tipo: 'GET', url: 'http://localhost:5000/api/v1/consulta-get-uno' });
//   const [datos, setDatos] = useState({});
//   const [errorAPI, setErrorAPI] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });
 
//   useEffect(() => {
//     const consultaAPI = async () => {
//       setErrorAPI(null);
//       setLoading(true);
 
//       try {
//         // 'data' son los datos que se envían como request body
//         // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
//         const consulta = await axios({ method: accesoAPI.tipo, url: accesoAPI.url, data: datos });
 
//         setRespuestaAPI(consulta);
//       } catch (error) {
//         setErrorAPI(error.response);
//       }
 
//       setLoading(false);
//     };
 
//     consultaAPI();
//   }, [accesoAPI.tipo, accesoAPI.url, datos]);
 
//   const handleClick = boton => {
//     if (boton === 'botonGet') {
//       setAccesoAPI({ tipo: 'GET', url: 'http://localhost:5000/api/v1/consulta-get-dos' });
 
//       // En un GET los datos serán ignorados, siempre mandaremos un objeto vacío
//       setDatos({});
//     } else if (boton === 'botonPost') {
//       setAccesoAPI({ tipo: 'POST', url: 'http://localhost:5000/api/v1/consulta-post' });
 
//       setDatos({ datosUno: 'datosUno', datosDos: 'datosDos' });
//     }
//   };
 
//   const MostrarRespuesta = () => {
//     if (loading === true) {
//       return <div>Cargando...</div>;
//     }
 
//     let respuesta = {};
 
//     if (errorAPI) {
//       respuesta = errorAPI;
//     } else {
//       respuesta = respuestaAPI;
//     }
 
//     return Object.keys(respuesta).map(key => {
//       return (
//         <div key={key}>
//           {key}: {JSON.stringify(respuesta[key])}
//         </div>
//       );
//     });
//   };
 
//   return (
//     <>
//       <div>
//         <button onClick={() => handleClick('botonGet')} type="button">Consulta GET</button>
//         <button onClick={() => handleClick('botonPost')} type="button">Consulta POST</button>
//       </div>
//       <div>
//         <MostrarRespuesta />
//       </div>
//     </>
//   );
// };
 
// export default App;