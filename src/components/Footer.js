import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#f1f1f1', 
      padding: '20px', 
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <p>© 2024 Магазин телефонов. Все права защищены.</p>
      <div>
        <a href="#" style={{ margin: '0 10px' }}>Политика конфиденциальности</a>
        <a href="#" style={{ margin: '0 10px' }}>Условия использования</a>
        <a href="#" style={{ margin: '0 10px' }}>Контакты</a>
      </div>
    </footer>
  );
}

export default Footer;