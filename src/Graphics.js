import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import axios from 'axios';

var aux = 1;

export const Graphics = () => {
    const [buttonText, setButtonText] = useState('Mostrar gráficas');
    const [stadisticData, setStadisticData] = useState(null); //finanzas
    const [stadisticData2, setStadisticData2] = useState(null); //entorno urbano
    const [stadisticData3, setStadisticData3] = useState(null); //cantidad docentes
    const [stadisticData4, setStadisticData4] = useState(null); //cantidad alumnos
    const [stadisticData5, setStadisticData5] = useState(null); //seguridad
    const [stadisticData6, setStadisticData6] = useState(null); //peor financiamiento
    const [stadisticData7, setStadisticData7] = useState(null); //negocios por localidad 
    const [stadisticData8, setStadisticData8] = useState(null);
    const [escuelasMunicipio, setEscuelasMunicipio] = useState({});
    const [escuelasMunicipio2, setEscuelasMunicipio2] = useState({});
    const [negociosMunicipio, setNegociosMunicipio] = useState({});
    const [nivelEducativo, setNivelEducativo] = useState({});

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
          let res = await axios.get('/estadistica/getMejorEntornoU'); //aca
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
        title: "10 municipios con mayor financiamiento en 2021 (en miles de pesos)",
        width: 620,
        height: 690,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        titleTextStyle: {
            fontSize: 19
        }
    };

    /*const stadisticCantidadDocentes = async (value) => {
        /*try {
          let response = await axios.get('/estadistica/getTopMunicipiosFinanzas');
          let result = response.data;
          setStadisticData2(result);
        } catch(e) {
          console.log(e)
        }
        await sleep(1000);
        console.log(value);
    };*/

    /*const stadisticCantidadDocentes = async() => {
        console.log("funciona?");
    };*/
    
    //setTimeout(() => {  console.log("World!"); }, 1000);

    const getProfesEscuelas = async(e) => {
        e.preventDefault();
        try {
            let r = await axios.get('/estadistica/getMayoresDocentesEscuela/getEscuelasPorMun' + escuelasMunicipio);
            let res = r.data;
            setStadisticData3(res);
          } catch(e) {
            console.log(e);
          }
        console.log(stadisticData3);
    };

    const dataProfes = stadisticData3;

    const getAlumnosEscuelas = async(e) => {
        e.preventDefault();
        try {
            let rURL = await axios.get('/estadistica/getMayoresAlumnosEscuela/getEscuelasPorMun' + escuelasMunicipio2)
            let answer = rURL.data;
            setStadisticData4(answer);
        } catch(e) {
            console.log(e);
        }
        console.log(stadisticData4);
    };

    const dataAlumnos = stadisticData4;
    ///estadistica/getMunicipiosGrupos

    const stadisticSecurity = async () => {
        try {
          let responseSecurity = await axios.get('estadistica/getMunicipiosGrupos');
          let resultSecurity = responseSecurity.data;
          setStadisticData5(resultSecurity);
        } catch(e) {
          console.log(e)
        }
    };

    useEffect(() => {
        stadisticSecurity();
    }, []);

    const stadisticFinanzasWorst = async () => {
        try {
          let responseWorst = await axios.get('/estadistica/getWorstMunicipiosFinanzas');
          let resultWorst = responseWorst.data;
          setStadisticData6(resultWorst);
        } catch(e) {
          console.log(e)
        }
    };

    useEffect(() => {
        stadisticFinanzasWorst();
    }, []);

    const optionsWorstFinanzas = {
        hAxis: {
          title: "En miles de pesos",
          minValue: 0,
        },
        vAxis: {
          title: "Municipio",
        },
        bars: "horizontal",
        axes: {
          y: {
            0: { side: "right" },
          },
        },
        colors: ['red'],
        width: 620,
        height: 690,
      };

    const stadisticNegociosMunicipal = async (e) => {
        e.preventDefault();
        console.log('/estadistica/getNumeroAsentamientos/getNegociosPorMun' + negociosMunicipio);
        try {
          let resBussiness = await axios.get('/estadistica/getNumeroAsentamientos/getNegociosPorMun' + negociosMunicipio);
          let resultBussiness = resBussiness.data;
          setStadisticData7(resultBussiness);
        } catch(e) {
          console.log(e)
        }
    };

    const stadisticNivelEducativo = async (e) => {
        e.preventDefault();
        try {
          let resNivel = await axios.get('/estadistica/getNivelEducativo/getEscuelasPorMun' + nivelEducativo);
          let resultNivel = resNivel.data;
          setStadisticData8(resultNivel);
          console.log(stadisticData8);
        } catch(e) {
          console.log(e)
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
                    <>
                    <h4>Si no se generan algunas gráficas es porque el administrador aún no ejecuta la limpieza de datos.
                    Y también porque algunas requieren datos del usuario para graficarse (botón de graficar).</h4>
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
                <h2>Tabla de entorno urbano (2019)</h2>
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
            <div className="image">
                {image.imagen &&
                <>
                <h2>Gráfica con el mayor numero de profesores por escuela según el municipio (2020)</h2>
                <h3>Escriba el numero de municipio (ejemplo: 39, 1, 119): </h3>
                <form onSubmit={getProfesEscuelas}>
                    <label>Numero de municipio: </label>
                    <input type="number" required onChange={(e) => setEscuelasMunicipio(e.target.value)}/>
                    <button type="submit">Graficar</button>
                </form>
                <Chart
                    chartType="PieChart"
                    data={stadisticData3}
                    width={"100%"}
                    height={"400px"}
                />
                </> 
                }
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h2>Gráfica con el mayor numero de alumnos por escuela según el municipio (2020)</h2>
                <h3>Escriba el numero de municipio (ejemplo: 39, 1, 119): </h3>
                <form onSubmit={getAlumnosEscuelas}>
                    <label>Numero de municipio: </label>
                    <input type="number" required onChange={(e) => setEscuelasMunicipio2(e.target.value)}/>
                    <button type="submit">Graficar</button>
                </form>
                <Chart
                    chartType="PieChart"
                    data={stadisticData4}
                    width={"100%"}
                    height={"400px"}
                />
                </> 
                }
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h4>Gráfica del n° personas que se sienten seguras en donde viven según el numero del municipio (2020)</h4>
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="600px"
                    
                    data={stadisticData5}
                />
                </> 
                }
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h2>Gráfica de municipios con peor financiamiento (2021) </h2>
                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="400px"
                        data={stadisticData6}
                        options={optionsWorstFinanzas}
                    />
                </> 
                }
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br>
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h2>Tabla de los negocios de Jalisco a nivel municipal (2020) </h2>
                <form onSubmit={stadisticNegociosMunicipal}>
                    <label>Numero de municipio: </label>
                    <input type="number" required onChange={(e) => setNegociosMunicipio(e.target.value)}/>
                    <button type="submit">Graficar tabla</button>
                </form>
                <Chart
                    chartType="Table"
                    width="100%"
                    height="400px"
                    data={stadisticData7}
                    options={tableOptions}
                    />
                </> 
                }
            </div>
            <div className="image">
                {image.imagen &&
                <>
                <h2>Gráfico del nivel educativo de las escuelas del municipio (2020) </h2>
                <form onSubmit={stadisticNivelEducativo}>
                    <label>Numero de municipio: </label>
                    <input type="number" required onChange={(e) => setNivelEducativo(e.target.value)}/>
                    <button type="submit">Graficar tabla</button>
                </form>
                <Chart
                    chartType="PieChart"
                    data={stadisticData8}
                    width={"100%"}
                    height={"400px"}
                />
                </> 
                }
            </div>
        </div>
    ); /*<>
    <h2>Tabla de los negocios de Jalisco a nivel municipal (2020) </h2>
    */
};

