import './App.css';
// importamos el logo de freecodecamp(imagen) para llamarlo en nuestro code
import freeCodeCampLogo from './imgs/fcc_primary.svg';
//Importamos nuestros componentes funcionales
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador.js'
//usamos hooks, para eso importamos nuestro hook useState; 
import { useState } from 'react';
 
function App() {

  //Esta constante es un arreglo que define el valor que vamos a usar como estado (numCLics)
  //y la funcion que nos va a permitir actualizarlo (actualizarNumClics) a estos valores
  //vamos a asignarle el valor retornado por useState, entre parentesis pasamos el 
  //valor inicial del estado (0).
  //esto crea el ESTADO numClics
  const [numClics, actualizarNumClics] = useState(0);

  const manejarClic = () => {
    //llamamos la funcion actualizarNumClics y el valor que le pasamos como argumento
    //va a ser el valor que le asignamos a numCLics + 1 por cada clic (onCLick event)
    actualizarNumClics(numClics + 1);
    //console log just for fun
    console.log('Clic');
  };

  const reiniciarContador = () => {
    //literalmente reasignamos el valor inicial a actualizarNumClics
    actualizarNumClics(0);
    console.log('Reiniciar');
  };

  return (
    <div className="App">
      {/* Creamos un div como contenedor del logo y lo llamamos con el tag img */}
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        {/* Vamos a pasar el estado numClics como un prop */}
        <Contador numClics={numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={ true }
        manejarClic={ manejarClic }        
        />
        <Boton 
        texto='reiniciar'
        esBotonDeClic={ false }
        manejarClic={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
