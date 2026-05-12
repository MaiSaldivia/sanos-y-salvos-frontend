const MapaCalor = ({ data = [] }) => {
  return (
    <div>
      <h2>Resumen geográfico</h2>
      <p>Puntos reportados: {data.length}</p>
      <p>Este espacio queda listo para integrar Leaflet o Google Maps más adelante.</p>
    </div>
  )
}

export default MapaCalor