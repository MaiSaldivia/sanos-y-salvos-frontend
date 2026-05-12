import { useState } from 'react'

const initialState = {
  tipoAnimal: '',
  raza: '',
  colorPrimario: '',
  tamano: 'PEQUEÑO',
  fotoUrl: '',
  latitud: '',
  longitud: '',
}

const ReporteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      ...formData,
      latitud: formData.latitud === '' ? null : Number(formData.latitud),
      longitud: formData.longitud === '' ? null : Number(formData.longitud),
    }

    await onSubmit(payload)
    setFormData(initialState)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Reportar mascota</h2>
      <div className="form-grid">
        <input name="tipoAnimal" value={formData.tipoAnimal} onChange={handleChange} placeholder="Tipo de animal" />
        <input name="raza" value={formData.raza} onChange={handleChange} placeholder="Raza" />
        <input name="colorPrimario" value={formData.colorPrimario} onChange={handleChange} placeholder="Color primario" />
        <select name="tamano" value={formData.tamano} onChange={handleChange}>
          <option value="PEQUEÑO">Pequeño</option>
          <option value="MEDIANO">Mediano</option>
          <option value="GRANDE">Grande</option>
        </select>
        <input name="fotoUrl" value={formData.fotoUrl} onChange={handleChange} placeholder="URL de la foto" />
        <input name="latitud" value={formData.latitud} onChange={handleChange} placeholder="Latitud" />
        <input name="longitud" value={formData.longitud} onChange={handleChange} placeholder="Longitud" />
      </div>
      <button type="submit">Guardar reporte</button>
    </form>
  )
}

export default ReporteForm