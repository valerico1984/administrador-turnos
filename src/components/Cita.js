import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => (
   <div className ="cita">
       <p>Médico: <span>{cita.medico}</span></p>
       <p>Especialidad: <span>{cita.especialidad}</span></p>
       <p>Día: <span>{cita.fecha}</span></p>
       <p>Hora: <span>{cita.hora}</span></p>
       <p>Observaciones: <span>{cita.observaciones}</span></p>
   
   <button
   className="button eliminar u-full-width"
   onClick= { () => eliminarCita(cita.id)}
   >
       Eliminar &times;
   </button>
   </div> 
)


Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,   

} 
export default Cita;