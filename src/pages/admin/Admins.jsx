import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import { getAdmins, deleteAdmin } from '../../services/admin/adminService';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      const data = await getAdmins();
      setAdmins(data);
    } catch (error) {
      console.error('Error cargando administradores:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este administrador?')) {
      try {
        await deleteAdmin(id);
        loadAdmins();
      } catch (error) {
        console.error('Error eliminando administrador:', error);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="admins-container">
        <div className="flex-between mb-6">
          <h1 className="page-title">Administradores</h1>
          <button className="btn btn-primary">+ Nuevo Administrador</button>
        </div>

        {loading ? (
          <p>Cargando administradores...</p>
        ) : (
          <div className="data-table">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.role}</td>
                    <td>
                      <div className="flex gap-2">
                        <button className="btn-edit">Editar</button>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(admin.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Admins;
