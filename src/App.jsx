import React from 'react';
import ReporteForm from './components/ReporteForm';
import ListaCoincidencias from './components/ListaCoincidencias';
import MapaCalor from './components/MapaCalor';

function App() {
  return (
    <div>
      <h1>Sanos y Salvos</h1>
      <ReporteForm />
      <ListaCoincidencias />
      <MapaCalor />
    </div>
  );
}

export default App;
