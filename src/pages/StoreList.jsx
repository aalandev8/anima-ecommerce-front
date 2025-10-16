import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StoreList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const categoryConfig = {
    'kosher': {
      title: 'Tiendas Kosher',
      description: 'Encuentra las mejores opciones de comida kosher certificada',
      icon: '✡️',
      bgColor: 'bg-blue-100'
    },
    'diabetic': {
      title: 'Tiendas para Diabéticos',
      description: 'Opciones saludables con bajo índice glucémico',
      icon: '🍃',
      bgColor: 'bg-green-100'
    },
    'gluten-free': {
      title: 'Tiendas Gluten Free',
      description: 'Opciones sin gluten para celíacos y sensibles al gluten',
      icon: '🌾',
      bgColor: 'bg-amber-100'
    },
    'vegan': {
      title: 'Tiendas Veganas',
      description: 'Comida 100% vegetal, sin productos de origen animal',
      icon: '🥗',
      bgColor: 'bg-purple-100'
    },
    'halal': {
      title: 'Tiendas Halal',
      description: 'Comida preparada siguiendo las normas islámicas',
      icon: '☪️',
      bgColor: 'bg-red-100'
    }
  };

  const currentCategory = categoryConfig[category] || {
    title: 'Tiendas',
    description: 'Encuentra las mejores opciones',
    icon: '🏪',
    bgColor: 'bg-gray-100'
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        // Reemplaza esta URL con tu endpoint real
    const response = await axios.get(`http://localhost:3000/api/stores?category=${category}`);
     setStores(response.data.data);  
        setError(null);
      } catch (err) {
        setError('Error al cargar las tiendas. Por favor intenta nuevamente.');
        console.error('Error fetching stores:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, [category]);

  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tiendas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </button>
          
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 ${currentCategory.bgColor} rounded-full flex items-center justify-center mr-4`}>
              <span className="text-3xl">{currentCategory.icon}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{currentCategory.title}</h1>
              <p className="text-gray-600 mt-1">{currentCategory.description}</p>
            </div>
          </div>
        </div>

  
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        
        {stores.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
            No hay tiendas disponibles en esta categoría por el momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                onClick={() => handleStoreClick(store.id)}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group overflow-hidden"
              >
               
                <div className="relative h-48 overflow-hidden">
                  <img 
              src={store.image_url || 'https://placehold.co/400x300?text=Tienda'}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
               
                  {store.featured && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  )}
                </div>

        
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {store.description || 'Deliciosas opciones para ti'}
                  </p>
                  
               
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{store.rating || '4.5'}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{store.deliveryTime || '30-45 min'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-600">Envío</span>
                    <span className="font-semibold text-green-600">
                      {store.deliveryFee === 0 || store.deliveryFee === '0' ? 'Gratis' : `$${store.deliveryFee}`}
                    </span>
                  </div>

       
                  {store.tags && store.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {store.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreList;