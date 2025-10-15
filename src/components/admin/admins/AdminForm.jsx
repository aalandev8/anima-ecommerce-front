import React, { useState, useEffect } from 'react';
import './AdminForm.css';

const AdminForm = ({ admin, onSave, onCancel }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    if (admin) setForm(admin);
  }, [admin]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Contraseña" required />
      <div className="flex gap-2">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default AdminForm;

