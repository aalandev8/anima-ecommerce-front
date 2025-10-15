import React from 'react';
import OrderStatus from './OrderStatus';
import './OrderDetail.css';

const OrderDetail = ({ order }) => {
  return (
    <div className="order-detail">
      <h3>Pedido #{order.id}</h3>
      <p>Total: ${order.total}</p>
      <OrderStatus status={order.status} />
    </div>
  );
};

export default OrderDetail;

