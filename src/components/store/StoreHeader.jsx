// src/components/store/StoreHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StoreHeader = ({ store }) => {
const backUrl = store?.type ? `/stores/${store.type}` : '/';

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-4">
        {/* Botón volver */}
        <Link 
            to={backUrl}
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </Link>

        {/* Nombre de la tienda */}
        <h1 className="text-2xl font-bold text-gray-900">
          {store?.name || 'Tienda'}
        </h1>
      </div>
    </div>
  );
};

export default StoreHeader;