import React from 'react';

// O componente recebe 'nome' e 'preco' como props
const ItemCardapio = ({ nome, preco }) => {
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #ddd'
  };

  const nomeStyle = {
    fontWeight: 'bold',
    color: '#333'
  };

  const precoStyle = {
    color: '#2e7d32',
    fontWeight: 'bold'
  };

  return (
    <li style={itemStyle}>
      <span style={nomeStyle}>{nome}</span>
      <span style={precoStyle}>
        {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    </li>
  );
};

export default ItemCardapio;