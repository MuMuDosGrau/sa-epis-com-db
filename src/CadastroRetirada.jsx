import React, { useState } from 'react';
import { useRetirada } from './context/RetiradaContext';
import './CadastroRetirada.css';

const CadastroRetirada = () => {
  const { adicionarRetirada } = useRetirada();
  const [form, setForm] = useState({
    funcionario: '',
    epi: '',
    data: '',
    tipo: 'Retirada', // "Retirada" ou "Devolução"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.funcionario && form.epi && form.data) {
      adicionarRetirada(form);
      setForm({ funcionario: '', epi: '', data: '', tipo: 'Retirada' });
      alert('Registro adicionado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Retiradas e Devoluções</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Funcionário:
          <input
            type="text"
            value={form.funcionario}
            onChange={(e) => setForm({ ...form, funcionario: e.target.value })}
            placeholder="Digite o nome do funcionário"
          />
        </label>
        <label>
          EPI:
          <input
            type="text"
            value={form.epi}
            onChange={(e) => setForm({ ...form, epi: e.target.value })}
            placeholder="Digite o nome do EPI"
          />
        </label>
        <label>
          Data:
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
          />
        </label>
        <label>
          Tipo:
          <select
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          >
            <option value="Retirada">Retirada</option>
            <option value="Devolução">Devolução</option>
          </select>
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroRetirada;
