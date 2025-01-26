import React from 'react';

function HomePage() {
  return (
    <div>
      <h1>Добро пожаловать в наш магазин телефонов</h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '20px' 
      }}>
        <p>Здесь вы найдете широкий выбор современных смартфонов</p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '20px' 
        }}>
          <button 
            style={{ 
              backgroundColor: 'green', 
              color: 'white', 
              padding: '10px 20px', 
              margin: '0 10px',
              border: 'none',
              borderRadius: '5px'
            }}
            onClick={() => window.location.href = '/catalog'}
          >
            Перейти в каталог
          </button>
          <button 
            style={{ 
              backgroundColor: 'blue', 
              color: 'white', 
              padding: '10px 20px', 
              margin: '0 10px',
              border: 'none',
              borderRadius: '5px'
            }}
            onClick={() => window.location.href = '/cart'}
          >
            Корзина
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;