import React from 'react';
import AdminCard from './AdminCard';
import './AdminList.css';

const AdminList = ({ admins, onEdit, onDelete }) => {
  return (
    <div className="admin-list">
      {admins.map((admin) => (
        <AdminCard
          key={admin.id}
          admin={admin}
          onEdit={() => onEdit(admin)}
          onDelete={() => onDelete(admin.id)}
        />
      ))}
    </div>
  );
};

export default AdminList;

