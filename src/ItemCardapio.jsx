import React from 'react';

const ItemCardapio = ({ nome, preco, funcaoAdicionar }) => {
  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // Mudamos para coluna para caber o botão embaixo
    padding: '12px 0',
    borderBottom: '1px solid #ddd'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  };

  const botaoStyle = {
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <li style={itemStyle}>
      <div style={rowStyle}>
        <span style={{fontWeight: 'bold'}}>{nome}</span>
        <span style={{color: '#2e7d32', fontWeight: 'bold'}}>
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
      
      {/* 5. Botão que chama a função de adicionar quando clicado */}
      <button style={botaoStyle} onClick={funcaoAdicionar}>
        Adicionar ao pedido
      </button>
    </li>
  );
};

export default ItemCardapio;