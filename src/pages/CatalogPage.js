import React from 'react';
import PhoneCard from '../components/PhoneCard';

function CatalogPage() {
  const phones = [
    { id: 1, name: 'iPhone 13', price: 79990, image: 'https://example.com/iphone13.jpg' },
    { id: 2, name: 'Samsung Galaxy S21', price: 69990, image: 'https://example.com/galaxys21.jpg' },
    { id: 3, name: 'Google Pixel 6', price: 59990, image: 'https://example.com/pixel6.jpg' },
    { id: 4, name: 'OnePlus 9', price: 49990, image: 'https://example.com/oneplus9.jpg' }
  ];

  return (
    <div>
      <h1>Каталог телефонов</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;