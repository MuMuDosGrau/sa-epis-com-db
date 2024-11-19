import React, { useState } from 'react';
import './Epis.css';

const Epis = () => {
  const [epis, setEpis] = useState([
    'Capacete',
    'Luvas',
    'Botas',
    'Óculos de Segurança',
    'Máscara',
    'Protetor Auricular',
  ]);

  const [novoEpi, setNovoEpi] = useState('');

  // Função para adicionar EPI
  const adicionarEpi = () => {
    if (novoEpi.trim() !== '') {
      setEpis([...epis, novoEpi]);
      setNovoEpi('');
    }
  };

  // Função para remover EPI
  const removerEpi = (index) => {
    const novosEpis = epis.filter((_, i) => i !== index);
    setEpis(novosEpis);
  };

  return (
    <div className="epis-container">
      <h1>EPIs</h1>
      <div className="lista-epis">
        {epis.map((nome, index) => (
          <div key={index} className="epi-item">
            <span>{nome}</span>
            <button className="editar">Editar</button>
            <button className="remover" onClick={() => removerEpi(index)}>
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className="cadastro">
        <input
          type="text"
          placeholder="Digite o nome do EPI"
          value={novoEpi}
          onChange={(e) => setNovoEpi(e.target.value)}
        />
        <button className="cadastrar" onClick={adicionarEpi}>
          CADASTRAR
        </button>
      </div>
    </div>
  );
};

export default Epis;
