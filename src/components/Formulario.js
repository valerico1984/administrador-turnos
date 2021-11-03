import React, {Fragment, useState} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
//Crear state para leer respuestas

const [cita, actualizarCita] = useState({
    medico: '',
    especialidad:'',
    fecha:'',
    hora:'', 
    observaciones:'', 
});

const [error, actualizarError] = useState(false)

//Función que se ejecuta cuando el usuario escribe en input

const actualizarState = e =>{
    actualizarCita({
        ...cita, 
        [e.target.name]: e.target.value

    })
}



//Extrae valores

const {medico, especialidad, fecha, hora, observaciones} = cita;

//Cuando el usuario envía la cita
const submitCita = e =>{
    e.preventDefault();

    //validar

    if(medico.trim() === '' || especialidad.trim() === '' || hora.trim() === '' || fecha.trim() === '' ||observaciones.trim() === ''){
        
        actualizarError(true)
        return;
    }

    //eliminar mensaje de error

    actualizarError(false);


    //asignar ID

    cita.id= nanoid();
    
    //crear cita

    crearCita(cita)

    //reiniciar form

    actualizarCita({
      medico: '',
      especialidad:'',
      fecha:'',
      hora:'', 
      observaciones:'', 

})}


    return (
<Fragment>
    <h2>Crear turno</h2>

    {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

    <form
        onSubmit={submitCita}
    >
        <label>Médico:</label>
        <input 
        type="text" 
        name="medico"
        className="u-full-width"
        placeholder="Nombre Médico"
        onChange={actualizarState}
        value={medico}
        />
<label>Especialidad:</label>
        <input 
        type="text" 
        name="especialidad"
        className="u-full-width"
        placeholder="Especialidad"
        onChange={actualizarState}
        value={especialidad}
        />
        <label>Fecha del turno:</label>
        <input 
        type="date" 
        name="fecha"
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}
        />
        <label>Hora del turno:</label>
        <input 
        type="time" 
        name="hora"
        className="u-full-width"
        onChange={actualizarState}
        value={hora}
        />

        <label>Observaciones:</label>
        <textarea   
        name="observaciones"
        className="u-full-width"
        onChange={actualizarState}
        value={observaciones}
        ></textarea>
        <button
        type="submit"
        className="button agregar u-full-width"

        >Agregar turno
        </button>
    </form>
</Fragment>
    );
}


Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
        
    }

export default Formulario