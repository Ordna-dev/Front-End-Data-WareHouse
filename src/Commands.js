import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

var aux = 1;

export const Commands = () => {
    const [buttonText, setButtonText] = useState('Mostrar comandos');
    const [data, setData] = useState(null);
    const [finanzasResponse, setFinanzasResponse] = useState(null);

    const [comando, setShowComando] = useState({
        comando: false
    });

    const inicia = (order) => {
        setShowComando((prevState) => ({
        ...prevState,
        [order]: !prevState[order]
    }));

        aux += 1;

        if (aux % 2 == 0) {
        setButtonText('Ocultar comandos');
        }
        else {
        setButtonText('Mostrar comandos');
        }
    };

    const statusLimpiezaEntorno = async () => {
        console.log("pasa a status limpieza entorno")
        try {
          let res = await axios.get('/limpieza/getMejorEntornoU');
          let resultado = res.data;
          setData(resultado)
          console.log("pasa al try de entorno")
        } catch(e) {
          console.log(e)
        }
    };

    return (
        <div>
            <div>
                <button class="button button1" onClick={() => inicia("comando")}>
                    {buttonText}
                </button>
             </div>
            <div className="image">
                {comando.comando && 
                <>
                    <h2>Acciones de limpieza</h2>
                    <h3>Flujo de datos de las limpiezas: MySQL (Datos listos para limpiar), Python (Limpieza con Petl), PostgreSQL (Datos limpios guardados)</h3>

                    <button class="button button1">
                        Ejecutar limpieza de los datos de las finanzas de los municipios
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar limpieza de los datos de la seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar limpieza de los datos del entorno urbano en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar limpieza de los datos del entorno urbano en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar limpieza de los datos de escuelas en Jalisco por colonia
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar limpieza de los datos de escuelas en Jalisco a nivel municipal
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>
                </> 
                }
                {comando.comando &&
                <>
                    <h2>Acciones de estadística</h2>
                    <h3>Flujo de datos de los procesos estadísticos: PostgreSQL (Datos a analizar), Python (Procesamiento de datos), retorno de los datos estadísticos al Front-End (Gráficas en ReactJS)</h3>
                    <button class="button button1">
                        Ejecutar proceso estadístico de los municipios mejor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar proceso estadístico de los municipios peor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar proceso estadístico de los municipios con menor n° de incidentes de seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar proceso estadístico de los municipios con el entorno urbano más optimo en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                    <button class="button button1">
                        Ejecutar proceso estadístico de los municipios con el entorno urbano más optimo en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: (Ya se hizo la limpieza anteriormente)</p>

                </>
                }
            </div>
        </div>
    ); /*<Chart
    chartType="ScatterChart"
    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
    width="100%"
    height="400px"
    legendToggle
    />;*/
};