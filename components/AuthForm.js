function AuthForm({ onLogin }) {
  try {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setIsLoading(true);

      try {
        const user = await AuthService.login(email, password);
        onLogin(user);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    const demoUsers = [
      { email: 'admin@college.edu', password: 'admin123', role: 'Admin' },
      { email: 'lab.incharge@college.edu', password: 'lab123', role: 'Lab Incharge' },
      { email: 'faculty@college.edu', password: 'faculty123', role: 'Faculty' },
      { email: 'student@college.edu', password: 'student123', role: 'Student' }
    ];

    const fillDemoUser = (user) => {
      setEmail(user.email);
      setPassword(user.password);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100" data-name="auth-form" data-file="components/AuthForm.js">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="icon-flask-conical text-2xl text-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">Lab Management System</h1>
            <p className="text-[var(--text-secondary)] mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-[var(--text-secondary)] mb-4 text-center">Demo Accounts:</p>
            <div className="space-y-2">
              {demoUsers.map((user, index) => (
                <button
                  key={index}
                  onClick={() => fillDemoUser(user)}
                  className="w-full text-left p-3 rounded-lg border border-[var(--border-color)] hover:bg-[var(--secondary-color)] transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{user.role}</span>
                    <span className="text-xs text-[var(--text-secondary)]">{user.email}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AuthForm component error:', error);
    return null;
  }
}