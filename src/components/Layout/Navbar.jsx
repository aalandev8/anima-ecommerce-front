function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-beige shadow-sm">
      <div className="px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-beige 
                       bg-neutral-cream/50 text-neutral-dark placeholder-neutral-dark/50
                       focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                       transition-all duration-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-dark/50">
              🔍
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-neutral-cream transition-colors">
            <span className="text-xl">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>

          {/* Messages */}
          <button className="p-2 rounded-lg hover:bg-neutral-cream transition-colors">
            <span className="text-xl">💬</span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-cream transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar