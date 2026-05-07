import React from 'react';

const App = () => {
  // Lista de itens do cardápio
  const cardapio = [
    { id: 1, nome: "X-Burguer Clássico", preco: 22.50 },
    { id: 2, nome: "Batata Frita Especial", preco: 18.00 },
    { id: 3, nome: "Cachorro Quente Gourmet", preco: 15.90 },
    { id: 4, nome: "Milkshake de Chocolate", preco: 14.50 },
    { id: 5, nome: "Refrigerante Lata", preco: 6.00 },
  ];

  // Estilização básica inline
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    titulo: {
      textAlign: 'center',
      color: '#d32f2f',
      borderBottom: '2px solid #d32f2f',
      paddingBottom: '10px'
    },
    lista: {
      listStyle: 'none',
      padding: 0
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #ddd'
    },
    nome: {
      fontWeight: 'bold',
      color: '#333'
    },
    preco: {
      color: '#2e7d32',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Cardápio Lanchonete</h1>
      <ul style={styles.lista}>
        {cardapio.map((item) => (
          <li key={item.id} style={styles.item}>
            <span style={styles.nome}>{item.nome}</span>
            <span style={styles.preco}>
              {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;