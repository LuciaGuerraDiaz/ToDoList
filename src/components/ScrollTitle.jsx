import React from 'react'
import './css/ScrollTitle.css'

const Titles = [
    "La claridad no viene de pensar, viene de accionar.",
    "El mejor momento para empezar fue ayer; el segundo mejor es ahora.",
    "No necesitás ver toda la escalera, solo dar el primer paso.",
    "La motivación te pone en marcha, pero la disciplina te mantiene avanzando.",
    "El miedo a equivocarte se disuelve en el momento en que empezás a moverte.",
    "Un año de análisis no reemplaza a un solo día de ejecución.",
    "No esperes las condiciones ideales: la acción es lo que crea el momento perfecto.",
    "Tu versión del futuro te va a agradecer lo que decidas hacer hoy.",
    "Pequeños avances diarios construyen resultados extraordinarios.",
    "Cambiá el ¿I si sale mal?» por «¿Qué pasa si sale bien?",
    "Las ideas sin ejecución son solo intenciones.",
    "El progreso imperfecto siempre será mejor que la perfección postergada.",
    "La confianza no se siente antes de intentar algo; se gana mientras lo hacés.",
    "El único límite real es la historia que te contás de por qué podés.",
    "Hacé que las cosas pasen, no te quedes mirando cómo suceden.",
    "El error no es un fracaso, es información directa para ajustar la estrategia.",
    "No tenés que hacerlo perfecto, solo tenés que empezar.",
    "Enfocate en el paso de hoy, no en la distancia que te falta recorrer.",
    "La energía sigue a la acción: actuá primero y la motivación llegará sola.",
    "Lo que decidís hacer hoy define exactamente en quién te convertís mañana."
];


export const ScrollTitle = () => {

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {Titles.concat(Titles).map((Title, i) => (
          <span key={i} className="marquee-item">{Title}</span>
        ))}
      </div>
    </div>
  )
}
