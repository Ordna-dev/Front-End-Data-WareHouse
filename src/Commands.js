import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

var aux = 1;

export const Commands = () => {
    const [buttonText, setButtonText] = useState('Mostrar comandos');
    //limpieza
    const [finanzasResponse, setFinanzasResponse] = useState(null);
    const [seguridadResponse, setSeguridadResponse] = useState(null);
    const [entornoResponse, setEntornoResponse] = useState(null);
    const [escuelasLocalResponse, setEscuelasLocalResponse] = useState(null);
    const [escuelasLocalResponse2, setEscuelasLocalResponse2] = useState(null);
    const [negociosResponse, setNegociosResponse] = useState(null);
    const [escuelasMResponse, setEscuelasMResponse] = useState(null);

    //estadistica
    const [dataFinance, setDataFinance] = useState(null);
    const [WdataFinance, setWDataFinance] = useState(null);
    const [securityData, setSecurityData] = useState(null);
    const [dataUrban, setDataUrban] = useState(null);
    const [dataLevel, setDataLevel] = useState(null);
    

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

    //limpieza

    const statusLimpiezaMejoresFinanzas = async (e) => {
        try {
            let resFinanceClean = await axios.get('/limpieza/getTopMunicipiosFinanzas');
            let resultFinanceClean = resFinanceClean.data;
            setFinanzasResponse(resultFinanceClean);
          } catch(e) {
            setFinanzasResponse(e);
          }
    };

    const statusLimpiezaMejorSeguridad = async (e) => {
        try {
            let resSecurityClean = await axios.get('/limpieza/getTopLugaresSeguridad');
            let resultSecurityClean = resSecurityClean.data;
            setSeguridadResponse(resultSecurityClean);
          } catch(e) {
            setSeguridadResponse(e);
          }
    };

    const statusLimpiezaMejorEntorno = async (e) => {
        try {
            let resUrbanClean = await axios.get('/limpieza/getMejorEntornoU');
            let resultUrbanClean = resUrbanClean.data;
            setEntornoResponse(resultUrbanClean);
          } catch(e) {
            setEntornoResponse(e);
          }
    };
    

    const statusLimpiezaEscuelasLocalidad = async (e) => {
        e.preventDefault();
        try {
            let resSchoolLocal = await axios.get('/limpieza/getEscuelasPorLoc/' + escuelasLocalResponse + '/' + escuelasLocalResponse2);
            let resultSchoolLocal = resSchoolLocal.data;
            setEscuelasLocalResponse(resultSchoolLocal);
          } catch(e) {
            setEscuelasLocalResponse(e);
          }
    };

    const statusLimpiezaNegociosMunicipal = async (e) => {
        e.preventDefault();
        try {
            let resBussinessRegional = await axios.get('/limpieza/getNegociosPorMun/' + negociosResponse);
            let resultBussinessRegional = resBussinessRegional.data;
            setNegociosResponse(resultBussinessRegional);
          } catch(e) {
            setNegociosResponse(e);
          }
    }

    const statusLimpiezaEscuelasMunicipal = async (e) => {
        e.preventDefault();
        try {
            let resSchoolRegion = await axios.get('/limpieza/getEscuelasPorMun/' + escuelasMResponse);
            let resultSchoolRegion = resSchoolRegion.data;
            setEscuelasMResponse(resultSchoolRegion);
          } catch(e) {
            setEscuelasMResponse(e);
          }
    };

    //estadistica

    const statusEstadisticaMejoresFinanzas = async (e) => {
        try {
          let resFinance = await axios.get('/estadistica/getTopMunicipiosFinanzas');
          let resultFinance = resFinance.data;
          setDataFinance(resultFinance);
        } catch(e) {
          setDataFinance(e);
        }
    };

    const statusEstadisticaPeoresFinanzas = async (e) => {
        try {
          let resWFinance = await axios.get('/estadistica/getWorstMunicipiosFinanzas');
          let resultWFinance = resWFinance.data;
          setWDataFinance(resultWFinance);
        } catch(e) {
          setWDataFinance(e);
        }
    };

    const statusEstadisticaEntorno = async (e) => {
        try {
          let resUrban = await axios.get('/estadistica/getMejorEntornoU');
          let resultUrban = resUrban.data;
          setDataUrban(resultUrban);
        } catch(e) {
          setDataUrban(e);
        }
    };

    const statusEstadisticaSeguridad = async (e) => {
        try {
          let resSecurity = await axios.get('/estadistica/getMunicipiosGrupos');
          let resultSecurity = resSecurity.data;
          setSecurityData(resultSecurity);
        } catch(e) {
          setSecurityData(e);
        }
    };

    const getProfesNivelEducativo = async(e) => {
        e.preventDefault();
        try {
            let resLevel = await axios.get('/estadistica/getNivelEducativo/getEscuelasPorMun' + dataLevel);
            let resultLevel = resLevel.data;
            setDataLevel(resultLevel);
        } catch(e) {
            setDataLevel(e);
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
                    <h4>Códigos de mensajes en los status de los servicios: </h4>

                    <li>500 en AXIOS o 404: Error en la base de datos (necesita encenderse)</li>
                    <li>200 Exito: El servicio fue ejecutado sin problemas</li>
                    <li>400: El servicio recibio datos que no existen en la base de datos</li>
                    <li>Datos en JSON: El servicio retorna datos como una señal de que fue ejecutado sin problemas</li>
                    <br></br><br></br>

                    <button class="button button1" onClick={statusLimpiezaMejoresFinanzas}>
                        Ejecutar limpieza de los datos de las finanzas de los municipios
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({finanzasResponse})}</p>

                    <button class="button button1" onClick={statusLimpiezaMejorSeguridad}>
                        Ejecutar limpieza de los datos de la seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({seguridadResponse})}</p>

                    <button class="button button1" onClick={statusLimpiezaMejorEntorno}>
                        Ejecutar limpieza de los datos del entorno urbano en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({entornoResponse})}</p>
                    
                    <br></br><br></br><br></br><br></br>
                    <h3>A partir de aquí es necesario esperar máximo 2 minutos para verificar si el servicio se ejecuto correctamente o incorrectamente debido al gran flujo de datos</h3>
                    <form onSubmit={statusLimpiezaEscuelasLocalidad}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setEscuelasLocalResponse(e.target.value)}/><br></br>
                        <label>Numero de localidad: </label>
                        <input type="number" required onChange={(t) => setEscuelasLocalResponse2(t.target.value)}/>
                        <button class="button button1">
                            Ejecutar limpieza de los datos de escuelas en Jalisco por localidad
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({escuelasLocalResponse})}</p>
                    </form>

                    <br></br><br></br><br></br><br></br>
                    <form onSubmit={statusLimpiezaNegociosMunicipal}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setNegociosResponse(e.target.value)}/><br></br>
                        <button class="button button1">
                            Ejecutar limpieza de los datos de negocios en Jalisco por municipio
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({negociosResponse})}</p>
                    </form>
                    
                    <br></br><br></br><br></br><br></br>
                    <form onSubmit={statusLimpiezaEscuelasMunicipal}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setEscuelasMResponse(e.target.value)}/>
                        <button class="button button1">
                            Ejecutar limpieza de los datos de escuelas en Jalisco a nivel municipal
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({escuelasMResponse})}</p>
                    </form>

                </> 
                }
                {comando.comando &&
                <>
                    <h2>Acciones de estadística</h2>
                    <h3>Flujo de datos de los procesos estadísticos: PostgreSQL (Datos a analizar), Python (Procesamiento de datos), retorno de los datos estadísticos al Front-End (Gráficas en ReactJS)</h3>
                    <button class="button button1" onClick={statusEstadisticaMejoresFinanzas}>
                        Ejecutar proceso estadístico de los municipios mejor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({dataFinance})}</p>

                    <button class="button button1" onClick={statusEstadisticaPeoresFinanzas}>
                        Ejecutar proceso estadístico de los municipios peor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({WdataFinance})}</p>

                    <button class="button button1" onClick={statusEstadisticaSeguridad}>
                        Ejecutar proceso estadístico de los municipios con menor n° de incidentes de seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({securityData})}</p>

                    <button class="button button1" onClick={statusEstadisticaEntorno}>
                        Ejecutar proceso estadístico de los municipios con el entorno urbano más optimo en Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({dataUrban})} </p>
                    <br></br><br></br><br></br>
                    <form onSubmit={getProfesNivelEducativo}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setDataLevel(e.target.value)}/>
                        <button class="button button1">
                            Ejecutar proceso estadístico de nivel educativo en según el numero del municipio
                        </button>
                        <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({dataLevel})}</p>
                    </form>
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