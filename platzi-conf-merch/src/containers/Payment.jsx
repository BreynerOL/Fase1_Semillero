import React from 'react';
import '../styles/components/Payment.css';

const Payments = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">Boton de pago con Paypal</div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;