import React from 'react';
import ItemCardapio from './ItemCardapio'; // Importando o componente novo

const App = () => {
  const cardapio = [
    { id: 1, nome: "X-Burguer Clássico", preco: 22.50 },
    { id: 2, nome: "Batata Frita Especial", preco: 18.00 },
    { id: 3, nome: "Cachorro Quente Gourmet", preco: 15.90 },
    { id: 4, nome: "Milkshake de Chocolate", preco: 14.50 },
    { id: 5, nome: "Refrigerante Lata", preco: 6.00 },
  ];

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '500px',
      margin: '20px auto',
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
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Cardápio Lanchonete</h1>
      <ul style={styles.lista}>
        {/* Usando o componente ItemCardapio 5 vezes através do map */}
        {cardapio.map((item) => (
          <ItemCardapio 
            key={item.id} 
            nome={item.nome} 
            preco={item.preco} 
          />
        ))}
      </ul>
    </div>
  );
};

export default App;