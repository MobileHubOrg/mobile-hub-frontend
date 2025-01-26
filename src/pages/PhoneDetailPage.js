import React from 'react';
import { useParams } from 'react-router-dom';

function PhoneDetailPage() {
  const { id } = useParams();
  
  const phones = {
    1: {
      name: 'iPhone 13',
      price: 79990,
      description: 'Мощный смартфон с передовой камерой и длительной работой батареи',
      specs: [
        'Дисплей: 6.1 дюйма',
        'Процессор: A15 Bionic',
        'Память: 128 ГБ',
        'Камера: Двойная 12 Мп'
      ],
      image: 'https://example.com/iphone13.jpg'
    },
    2: {
      name: 'Samsung Galaxy S21',
      price: 69990,
      description: 'Флагманский смартфон с великолепной камерой и производительностью',
      specs: [
        'Дисплей: 6.2 дюйма',
        'Процессор: Exynos 2100',
        'Память: 256 ГБ',
        'Камера: Тройная 64 Мп'
      ],
      image: 'https://example.com/galaxys21.jpg'
    }
  };

  const phone = phones[id] || { name: 'Телефон не найден', price: 0, description: '', specs: [], image: '' };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <img 
          src={phone.image} 
          alt={phone.name} 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </div>
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        <h1>{phone.name}</h1>
        <p style={{ fontSize: '1.5em', color: 'green' }}>{phone.price} ₽</p>
        <p>{phone.description}</p>
        <h3>Характеристики:</h3>
        <ul>
          {phone.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default PhoneDetailPage;