import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import axios from 'axios';

var aux = 1;

export const Graphics = () => {
    const [buttonText, setButtonText] = useState('Mostrar gráficas');
    const [stadisticData, setStadisticData] = useState(null);
    const [stadisticData2, setStadisticData2] = useState(null);
    
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

    const stadisticEntornoU = async () => {
        try {
          let res = await axios.get('/estadistica/getMejorEntornoU');
          let resultado = res.data;
          setStadisticData(resultado);
        } catch(e) {
          console.log(e)
        }
    };

    useEffect(() => {
        stadisticEntornoU();
    }, []);

    const stadisticFinanzas = async () => {
        try {
          let response = await axios.get('/estadistica/getTopMunicipiosFinanzas');
          let result = response.data;
          setStadisticData2(result);
        } catch(e) {
          console.log(e)
        }
    };

    useEffect(() => {
        stadisticFinanzas();
    }, []);

    const tableChart = stadisticData;
      
    const tableOptions = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" }
    };

    const dataFinanzas = stadisticData2;
      
    const optionsFinanzas = {
        title: "10 municipios con mayor financiamiento en 2020 (en miles de pesos)",
        width: 620,
        height: 690,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        titleTextStyle: {
            fontSize: 19
        }
    };

    const data = [
        //stadisticData2
        ["ID", "Life Expectancy", "Fertility Rate", "Region", "Population"],
        ["CAN", 80.66, 1.67, "North America", 33739900],
        ["DEU", 79.84, 1.36, "Europe", 81902307],
        ["DNK", 78.6, 1.84, "Europe", 5523095],
        ["EGY", 72.73, 2.78, "Middle East", 79716203],
        ["GBR", 80.05, 2, "Europe", 61801570],
        ["IRN", 72.49, 1.7, "Middle East", 73137148],
        ["IRQ", 68.09, 4.77, "Middle East", 31090763],
        ["ISR", 81.55, 2.96, "Middle East", 7485600],
        ["RUS", 68.6, 1.54, "Europe", 141850000],
        ["USA", 78.09, 2.05, "North America", 307007000]
    ];
      
    const options = {
        title:
          "Correlation between life expectancy, fertility rate " +
          "and population of some world countries (2010)",
        hAxis: { title: "Life Expectancy" },
        vAxis: { title: "Fertility Rate" },
        bubble: { textStyle: { fontSize: 11 } },
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
                    <>
                    <h2>Gráfica de finanzas</h2>
                        <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={dataFinanzas}
                        options={optionsFinanzas}
                        />
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br>
                    </>
                }
                
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h2>Tabla de entorno urbano</h2>
                    <Chart
                    chartType="Table"
                    width="100%"
                    height="400px"
                    data={tableChart}
                    options={tableOptions}
                    />
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

