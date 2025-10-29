import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-neutral-light via-neutral-cream to-neutral-beige overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
