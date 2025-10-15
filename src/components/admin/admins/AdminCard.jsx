import React from 'react';
import './AdminCard.css';

const AdminCard = ({ admin, onEdit, onDelete }) => {
  return (
    <div className="admin-card">
      <div>
        <h4>{admin.name}</h4>
        <p>{admin.email}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default AdminCard;
