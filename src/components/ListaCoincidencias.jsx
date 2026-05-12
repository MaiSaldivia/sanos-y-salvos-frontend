const ListaCoincidencias = ({ coincidencias = [] }) => {
  return (
    <div>
      <h2>Registros recientes</h2>
      {coincidencias.length === 0 ? (
        <p>No hay registros cargados.</p>
      ) : (
        <ul className="list">
          {coincidencias.map((mascota) => (
            <li key={mascota.idMascota} className="list-item">
              <strong>{mascota.tipoAnimal}</strong> · {mascota.raza} · {mascota.estado}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaCoincidencias