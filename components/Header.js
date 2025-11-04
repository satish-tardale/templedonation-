function Header({ currentUser, onLogout, isDarkMode, onToggleDarkMode }) {
  try {
    return (
      <header className="bg-white border-b border-[var(--border-color)] px-6 py-4 flex justify-between items-center" data-name="header" data-file="components/Header.js">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Welcome, {currentUser?.name}</h1>
          <p className="text-[var(--text-secondary)] text-sm">Manage your laboratory resources efficiently</p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`icon-${isDarkMode ? 'sun' : 'moon'} text-xl text-[var(--text-secondary)]`}></div>
          </button>

          <div className="flex items-center space-x-3 bg-[var(--secondary-color)] px-4 py-2 rounded-lg">
            <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <div className="icon-user text-sm text-white"></div>
            </div>
            <div className="text-sm">
              <p className="font-medium text-[var(--text-primary)]">{currentUser?.name}</p>
              <p className="text-[var(--text-secondary)]">{currentUser?.role}</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 text-[var(--danger-color)] hover:bg-red-50 rounded-lg transition-colors"
          >
            <div className="icon-log-out text-xl"></div>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}