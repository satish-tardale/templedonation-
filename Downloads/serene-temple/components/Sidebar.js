function Sidebar({ currentView, onViewChange, currentUser }) {
  try {
    const menuItems = [
      { id: 'dashboard', name: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'labs', name: 'Labs', icon: 'flask-conical' },
      { id: 'equipment', name: 'Equipment', icon: 'computer' },
      { id: 'experiments', name: 'Experiments', icon: 'test-tube' },
      { id: 'attendance', name: 'Attendance', icon: 'users' },
      { id: 'requests', name: 'Requests', icon: 'clipboard-list' },
      { id: 'users', name: 'Users', icon: 'user-cog' }
    ];

    const filteredItems = menuItems.filter(item => {
      if (currentUser?.role === 'Student') {
        return ['dashboard', 'labs', 'equipment', 'experiments'].includes(item.id);
      }
      if (currentUser?.role === 'Faculty') {
        return ['dashboard', 'labs', 'equipment', 'experiments', 'attendance'].includes(item.id);
      }
      return true; // Admin and Lab Incharge see all
    });

    return (
      <div className="fixed left-0 top-0 h-full sidebar-width bg-white border-r border-[var(--border-color)] shadow-sm" data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
              <div className="icon-flask-conical text-xl text-white"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">Lab System</h2>
              <p className="text-xs text-[var(--text-secondary)]">{currentUser?.role || 'User'}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`sidebar-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => onViewChange(item.id)}
            >
              <div className={`icon-${item.icon} text-xl`}></div>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--border-color)]">
          <div className="flex items-center space-x-3 text-sm text-[var(--text-secondary)]">
            <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full flex items-center justify-center">
              <div className="icon-user text-sm"></div>
            </div>
            <div>
              <p className="font-medium text-[var(--text-primary)]">{currentUser?.name}</p>
              <p className="text-xs">{currentUser?.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}