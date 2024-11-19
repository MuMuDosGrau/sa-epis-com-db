import React from 'react';
import { useRetirada } from './context/RetiradaContext';
import './Historico.css';

const Historico = () => {
  const { historico } = useRetirada();

  return (
    <div className="historico-container">
      <h1>Histórico de Retiradas e Devoluções</h1>
      {historico.length === 0 ? (
        <p>Não há registros no histórico.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>EPI</th>
              <th>Data</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((registro, index) => (
              <tr key={index}>
                <td>{registro.funcionario}</td>
                <td>{registro.epi}</td>
                <td>{registro.data}</td>
                <td>{registro.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Historico;
