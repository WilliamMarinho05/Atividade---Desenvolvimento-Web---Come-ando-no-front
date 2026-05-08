import React, { useState } from 'react'; // 1. Importamos o useState
import ItemCardapio from './ItemCardapio';

const App = () => {
  // 2. Criamos o estado do contador (começa em 0)
  const [totalItens, setTotalItens] = useState(0);

  const cardapio = [
    { id: 1, nome: "X-Burguer Clássico", preco: 22.50 },
    { id: 2, nome: "Batata Frita Especial", preco: 18.00 },
    { id: 3, nome: "Cachorro Quente Gourmet", preco: 15.90 },
    { id: 4, nome: "Milkshake de Chocolate", preco: 14.50 },
    { id: 5, nome: "Refrigerante Lata", preco: 6.00 },
  ];

  // 3. Função que aumenta o contador
  const adicionarAoCarrinho = () => {
    setTotalItens(totalItens + 1);
  };

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
    contador: {
      textAlign: 'center',
      backgroundColor: '#d32f2f',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '20px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{textAlign: 'center'}}>Cardápio Lanchonete</h1>
      
      {/* 4. Exibindo o total na tela */}
      <div style={styles.contador}>
        Total de itens do pedido: {totalItens}
      </div>

      <ul style={{listStyle: 'none', padding: 0}}>
        {cardapio.map((item) => (
          <ItemCardapio 
            key={item.id} 
            nome={item.nome} 
            preco={item.preco} 
            funcaoAdicionar={adicionarAoCarrinho} // Passando a função como prop
          />
        ))}
      </ul>
    </div>
  );
};

export default App;