import { useEffect, useState } from 'react'
import ReporteForm from './components/ReporteForm.jsx'
import ListaCoincidencias from './components/ListaCoincidencias.jsx'
import MapaCalor from './components/MapaCalor.jsx'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8081'

function App() {
  const [mascotas, setMascotas] = useState([])
  const [mensaje, setMensaje] = useState('')

  const cargarMascotas = async () => {
    try {
      const response = await fetch(`${API_URL}/api/mascotas/busqueda`)
      if (!response.ok) throw new Error('No se pudo cargar la información')
      const data = await response.json()
      setMascotas(Array.isArray(data) ? data : [])
    } catch {
      setMascotas([])
    }
  }

  useEffect(() => {
    cargarMascotas()
  }, [])

  const handleSubmit = async (payload) => {
    setMensaje('Guardando reporte...')
    try {
      const response = await fetch(`${API_URL}/api/mascotas/reportar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Error al guardar')

      setMensaje('Reporte guardado correctamente')
      await cargarMascotas()
    } catch {
      setMensaje('No se pudo conectar con el backend. Revisa el servicio.')
    }
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Sanos y Salvos</p>
        <h1>Panel básico de reportes</h1>
        <p className="subtitle">
          Interfaz simple para reportar mascotas y visualizar registros desde Spring Boot.
        </p>
      </header>

      <section className="card">
        <ReporteForm onSubmit={handleSubmit} />
        {mensaje ? <p className="message">{mensaje}</p> : null}
      </section>

      <section className="grid">
        <div className="card">
          <ListaCoincidencias coincidencias={mascotas} />
        </div>
        <div className="card">
          <MapaCalor data={mascotas} />
        </div>
      </section>
    </main>
  )
}

export default App
