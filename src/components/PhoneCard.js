import React from 'react';
import { useNavigate } from 'react-router-dom';

function PhoneCard({ phone }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/phone/${phone.id}`);
  };

  const handleAddToCart = () => {
    // Логика добавления в корзину
    console.log(`Добавлен в корзину: ${phone.name}`);
  };

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '10px', 
      margin: '10px', 
      textAlign: 'center', 
      width: '200px' 
    }}>
      <img 
        src={phone.image} 
        alt={phone.name} 
        style={{ maxWidth: '150px', height: 'auto' }} 
      />
      <h3>{phone.name}</h3>
      <p>{phone.price} ₽</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleDetailsClick}>Подробнее</button>
        <button onClick={handleAddToCart}>В корзину</button>
      </div>
    </div>
  );
}

export default PhoneCard;