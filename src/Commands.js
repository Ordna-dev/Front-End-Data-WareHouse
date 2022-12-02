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
                    <button class="button button1" onClick={statusLimpiezaEntorno()}>
                        Ejecutar limpieza de entorno urbano
                    </button>
                    <p>Mensaje del status del servicio: {data}</p>
                </> 
                }
                {comando.comando &&
                <>
                    
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