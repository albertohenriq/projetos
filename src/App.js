import "./App.css"
import { useState } from "react"



export default function App() {

  const [peso,setPeso] = useState('');
  const [altura,setAltura] = useState('');
  const [message,setMessage] = useState('');

  function CalcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6){
     setMessage("Voce esta abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMessage("Peso Ideal ! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMessage("Voce esta um pouco acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 34.9){
      setMessage("Cuidado voce esta Obeso! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1> Calculadora IMC </h1>
      <span>Vamos calcular o seu IMC</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) ex: 90" value={peso} onChange={ (e) => setPeso(e.target.value)}/>

        <input type="text" placeholder="Altura em (cm) ex: 180" value={altura} onChange={ (e) => setAltura(e.target.value)}/>

        <button onClick={CalcularIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}
