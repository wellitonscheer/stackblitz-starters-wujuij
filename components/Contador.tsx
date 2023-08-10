import { useState, useEffect } from 'react';

interface ContadorProps {
  numero_inicial: number;
}

export default function Contador(props: ContadorProps) {
  const [numero, setNumero] = useState(props.numero_inicial);

  function Adicionar() {
    setNumero(numero + 1);
  }
  function Subtrair() {
    setNumero(numero - 1);
  }

  useEffect(() => {
    if (numero == 22) {
      alert(`Bolsonaro ${numero}!`);
    }
  }, [numero]);

  function maior_que_10() {
    return numero > 10;
  }

  return (
    <div>
      <h2 style={{ color: numero > 10 ? 'red' : 'blue' }}>Contador {numero}</h2>
      {maior_que_10() && <h3>{numero} e maior que 10</h3>}
      <button onClick={Adicionar}>Adicionar</button>
      <p />
      <button onClick={Subtrair}>Subtrair</button>
    </div>
  );
}
