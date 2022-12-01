import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';

var aux = 1;

export const Graphics = () => {
    const [buttonText, setButtonText] = useState('Mostrar gráficas');
    
    const [image, setShowImage] = useState({
        imagen: false
    });

    const inicia = (order) => {
        setShowImage((prevState) => ({
        ...prevState,
        [order]: !prevState[order]
    }));

    aux += 1;

    if (aux % 2 == 0) {
      setButtonText('Ocultar gráficas');
    }
    else {
      setButtonText('Mostrar gráficas');
    }
    };

    return (
        <div>
            <div>
                <button class="button button1" onClick={() => inicia("imagen")}>
                    {buttonText}
                </button>
             </div>
            <div className="image">
                {image.imagen && 
                    <Chart
                    chartType="ScatterChart"
                    data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                    width="100%"
                    height="400px"
                    legendToggle
                />}
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

