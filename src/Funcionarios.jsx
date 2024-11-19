import React, { useState } from 'react';
import './Funcionarios.css';

const Funcionarios = () => {
  const [funcionarios, setFuncionarios] = useState([
    'Pedro',
    'Marcos',
    'Paulo',
    'João',
    'Bruno',
    'Lucas',
  ]);

  const [novoFuncionario, setNovoFuncionario] = useState('');

  // Função para adicionar funcionário
  const adicionarFuncionario = () => {
    if (novoFuncionario.trim() !== '') {
      setFuncionarios([...funcionarios, novoFuncionario]);
      setNovoFuncionario('');
    }
  };

  // Função para remover funcionário
  const removerFuncionario = (index) => {
    const novosFuncionarios = funcionarios.filter((_, i) => i !== index);
    setFuncionarios(novosFuncionarios);
  };

  return (
    <div className="funcionarios-container">
      <h1>Funcionarios</h1>
      <div className="lista-funcionarios">
        {funcionarios.map((nome, index) => (
          <div key={index} className="funcionario-item">
            <span>{nome}</span>
            <button className="editar">Editar</button>
            <button
              className="remover"
              onClick={() => removerFuncionario(index)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className="cadastro">
        <input
          type="text"
          placeholder="Digite o nome do Funcionario"
          value={novoFuncionario}
          onChange={(e) => setNovoFuncionario(e.target.value)}
        />
        <button className="cadastrar" onClick={adicionarFuncionario}>
          CADASTRAR
        </button>
      </div>
    </div>
  );
};

export default Funcionarios;