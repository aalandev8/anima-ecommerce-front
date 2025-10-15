import React from 'react';
import './OrderStatus.css';

const OrderStatus = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'pending': return 'order-status pending';
      case 'completed': return 'order-status completed';
      case 'cancelled': return 'order-status cancelled';
      default: return 'order-status';
    }
  };

  return <span className={getStatusClass()}>{status}</span>;
};

export default OrderStatus;
