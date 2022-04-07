import React from 'react'

export const NotFound = () => {
  return (
    <div style={{height: '71.5vh'}}>
        <h2>
            <strong>¡UPS! No podemos encontrar el producto que estás buscando</strong>
        </h2>
        <p>
        Estás buscando un vino que no existe en nuestro catálogo.
        <br />
        <a href="/">Regresar al inicio</a>
        </p>
    </div>
  )
}

export default NotFound;

