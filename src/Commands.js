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

    const [button, setButton] = useState(false);

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
            setButton(true);
            let resFinanceClean = await axios.get('/limpieza/getTopMunicipiosFinanzas');
            let resultFinanceClean = resFinanceClean.data;
            setFinanzasResponse(resultFinanceClean);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setFinanzasResponse(e.response.data);
            } else {
                setFinanzasResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusLimpiezaMejorSeguridad = async (e) => {
        try {
            setButton(true);
            let resSecurityClean = await axios.get('/limpieza/getTopLugaresSeguridad');
            let resultSecurityClean = resSecurityClean.data;
            setSeguridadResponse(resultSecurityClean);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setSeguridadResponse(e.response.data);
            } else {
                setSeguridadResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusLimpiezaMejorEntorno = async (e) => {
        try {
            setButton(true);
            let resUrbanClean = await axios.get('/limpieza/getMejorEntornoU');
            let resultUrbanClean = resUrbanClean.data;
            setEntornoResponse(resultUrbanClean);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setEntornoResponse(e.response.data);
            } else {
                setEntornoResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };
    

    const statusLimpiezaEscuelasLocalidad = async (e) => {
        e.preventDefault();
        try {
            setButton(true);
            let resSchoolLocal = await axios.get('/limpieza/getEscuelasPorLoc/' + escuelasLocalResponse + '/' + escuelasLocalResponse2);
            let resultSchoolLocal = resSchoolLocal.data;
            setEscuelasLocalResponse(resultSchoolLocal);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setEscuelasLocalResponse(e.response.data);
            } else {
                setEscuelasLocalResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusLimpiezaNegociosMunicipal = async (e) => {
        e.preventDefault();
        try {
            setButton(true);
            let resBussinessRegional = await axios.get('/limpieza/getNegociosPorMun/' + negociosResponse);
            let resultBussinessRegional = resBussinessRegional.data;
            setNegociosResponse(resultBussinessRegional);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setNegociosResponse(e.response.data);
            } else {
                setNegociosResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    }

    const statusLimpiezaEscuelasMunicipal = async (e) => {
        e.preventDefault();
        try {
            setButton(true);
            let resSchoolRegion = await axios.get('/limpieza/getEscuelasPorMun/' + escuelasMResponse);
            let resultSchoolRegion = resSchoolRegion.data;
            setEscuelasMResponse(resultSchoolRegion);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setEscuelasMResponse(e.response.data);
            } else {
                setEscuelasMResponse(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    //estadistica

    const statusEstadisticaMejoresFinanzas = async (e) => {
        try {
            setButton(true);
            let resFinance = await axios.get('/estadistica/getTopMunicipiosFinanzas');
            let resultFinance = resFinance.data;
            setDataFinance(resultFinance);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setDataFinance(e.response.data);
            } else {
                setDataFinance(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusEstadisticaPeoresFinanzas = async (e) => {
        try {
            setButton(true);
            let resWFinance = await axios.get('/estadistica/getWorstMunicipiosFinanzas');
            let resultWFinance = resWFinance.data;
            setWDataFinance(resultWFinance);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setWDataFinance(e.response.data);
            } else {
                setWDataFinance(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusEstadisticaEntorno = async (e) => {
        try {
            setButton(true);
            let resUrban = await axios.get('/estadistica/getMejorEntornoU');
            let resultUrban = resUrban.data;
            setDataUrban(resultUrban);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setDataUrban(e.response.data);
            } else {
                setDataUrban(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const statusEstadisticaSeguridad = async (e) => {
        try {
            setButton(true);
            let resSecurity = await axios.get('/estadistica/getMunicipiosGrupos');
            let resultSecurity = resSecurity.data;
            setSecurityData(resultSecurity);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setSecurityData(e.response.data);
            } else {
                setSecurityData(e);
            }
            setTimeout(() => setButton(false), 8000);
        }
    };

    const getProfesNivelEducativo = async(e) => {
        e.preventDefault();
        try {
            setButton(true);
            let resLevel = await axios.get('/estadistica/getNivelEducativo/getEscuelasPorMun' + dataLevel);
            let resultLevel = resLevel.data;
            setDataLevel(resultLevel);
            setTimeout(() => setButton(false), 8000);
        } catch(e) {
            setButton(true);
            if (e.response) {
                setDataLevel(e.response.data);
            } else {
                setDataLevel(e);
            }
            setTimeout(() => setButton(false), 8000);
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
                    <h4>C??digos de mensajes en los status de los servicios: </h4>

                    
                    <li>200 Exito: El servicio fue ejecutado sin problemas</li>
                    <li>400 o 404 en AXIOS: El servicio recibio datos que no existen en la tabla correspondiente de la base de datos PostgreSQL</li>
                    <li>404: No existe la tabla correspondiente en PostgreSQL(estad??stica) o MySQL(limpieza)</li>
                    <li>Datos en JSON: El servicio retorna datos como una se??al de que fue ejecutado sin problemas</li>
                    <li>500 en AXIOS: Error en la conexion con el backend (revise el error detalladamente en consola)</li>
                    <br></br><br></br>

                    <button class="button button1" disabled={button} onClick={statusLimpiezaMejoresFinanzas}>
                        Ejecutar limpieza de los datos de las finanzas de los municipios
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({finanzasResponse})}</p>

                    <button class="button button1" disabled={button} onClick={statusLimpiezaMejorSeguridad}>
                        Ejecutar limpieza de los datos de la seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({seguridadResponse})}</p>

                    <button class="button button1" disabled={button} onClick={statusLimpiezaMejorEntorno}>
                        Ejecutar limpieza de los datos del entorno urbano en Jalisco
                    </button>
                    <p>Mensaje del status del servicio: {JSON.stringify({entornoResponse})}</p>
                    
                    <br></br><br></br><br></br><br></br>
                    <h3>A partir de aqu?? es necesario esperar m??ximo 2 minutos para verificar si el servicio se ejecuto correctamente o incorrectamente debido al gran flujo de datos</h3>
                    <form onSubmit={statusLimpiezaEscuelasLocalidad}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setEscuelasLocalResponse(e.target.value)}/><br></br>
                        <label>Numero de localidad: </label>
                        <input type="number" required onChange={(t) => setEscuelasLocalResponse2(t.target.value)}/>
                        <button class="button button1" disabled={button}>
                            Ejecutar limpieza de los datos de escuelas en Jalisco por localidad
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({escuelasLocalResponse})}</p>
                    </form>

                    <br></br><br></br><br></br><br></br>
                    <form onSubmit={statusLimpiezaNegociosMunicipal}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setNegociosResponse(e.target.value)}/><br></br>
                        <button class="button button1" disabled={button}>
                            Ejecutar limpieza de los datos de negocios en Jalisco por municipio
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({negociosResponse})}</p>
                    </form>
                    
                    <br></br><br></br><br></br><br></br>
                    <form onSubmit={statusLimpiezaEscuelasMunicipal}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setEscuelasMResponse(e.target.value)}/>
                        <button class="button button1" disabled={button}>
                            Ejecutar limpieza de los datos de escuelas en Jalisco a nivel municipal
                        </button>
                        <p>Mensaje del status del servicio: {JSON.stringify({escuelasMResponse})}</p>
                    </form>

                </> 
                }
                {comando.comando &&
                <>
                    <h2>Acciones de estad??stica</h2>
                    <h3>Flujo de datos de los procesos estad??sticos: PostgreSQL (Datos a analizar), Python (Procesamiento de datos), retorno de los datos estad??sticos al Front-End (Gr??ficas en ReactJS)</h3>
                    <button class="button button1" disabled={button} onClick={statusEstadisticaMejoresFinanzas}>
                        Ejecutar proceso estad??stico de los municipios mejor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({dataFinance})}</p>

                    <button class="button button1" disabled={button} onClick={statusEstadisticaPeoresFinanzas}>
                        Ejecutar proceso estad??stico de los municipios peor financiados de Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({WdataFinance})}</p>

                    <button class="button button1" disabled={button} onClick={statusEstadisticaSeguridad}>
                        Ejecutar proceso estad??stico de los municipios con menor n?? de incidentes de seguridad en Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({securityData})}</p>

                    <button class="button button1" disabled={button} onClick={statusEstadisticaEntorno}>
                        Ejecutar proceso estad??stico de los municipios con el entorno urbano m??s optimo en Jalisco
                    </button>
                    <p>Mensaje del status del servicio (si retorna datos es porque si se ejecuto de manera correcta): {JSON.stringify({dataUrban})} </p>
                    <br></br><br></br><br></br>
                    <form onSubmit={getProfesNivelEducativo}>
                        <label>Numero de municipio: </label>
                        <input type="number" required onChange={(e) => setDataLevel(e.target.value)}/>
                        <button class="button button1" disabled={button}>
                            Ejecutar proceso estad??stico de nivel educativo en seg??n el numero del municipio
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