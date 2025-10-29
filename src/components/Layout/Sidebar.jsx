import { useState } from 'react'

function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Productos', icon: '🏪' },
    { id: 'categories', label: 'Categorías', icon: '📁' },
    { id: 'orders', label: 'Pedidos', icon: '🛒' },
    { id: 'analytics', label: 'Análisis', icon: '📈' },
    { id: 'settings', label: 'Configuración', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-gradient-to-b from-primary-dark via-primary to-primary-dark text-neutral-cream flex flex-col shadow-2xl">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-primary-light/30">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-light to-secondary bg-clip-text text-transparent">
          ANIMA-EC
        </h1>
        <p className="text-xs text-neutral-beige mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg
              transition-all duration-200 text-left
              ${activeItem === item.id 
                ? 'bg-accent/20 text-accent-light shadow-lg border border-accent/30' 
                : 'text-neutral-beige hover:bg-primary-light/30 hover:text-accent-light'
              }
            `}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-primary-light/30">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-lg">
            👤
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-cream">Admin</p>
            <p className="text-xs text-neutral-beige">admin@anima.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
