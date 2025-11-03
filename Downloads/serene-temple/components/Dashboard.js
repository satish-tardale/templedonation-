const ChartJS = window.Chart;

function Dashboard({ currentUser }) {
  try {
    const [stats, setStats] = React.useState({
      totalLabs: 0,
      totalEquipment: 0,
      pendingRequests: 0,
      experimentsThisWeek: 0,
      equipmentStatus: { good: 0, repair: 0, broken: 0 }
    });

    React.useEffect(() => {
      loadDashboardStats();
    }, []);

    const loadDashboardStats = () => {
      const labs = StorageService.getLabs();
      const equipment = StorageService.getEquipment();
      const requests = StorageService.getRequests();
      const experiments = StorageService.getExperiments();

      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const recentExperiments = experiments.filter(exp => new Date(exp.date) >= weekAgo);

      const equipmentStatus = equipment.reduce((acc, item) => {
        acc[item.status.toLowerCase()] = (acc[item.status.toLowerCase()] || 0) + 1;
        return acc;
      }, { good: 0, repair: 0, broken: 0 });

      setStats({
        totalLabs: labs.length,
        totalEquipment: equipment.length,
        pendingRequests: requests.filter(req => req.status === 'Pending').length,
        experimentsThisWeek: recentExperiments.length,
        equipmentStatus
      });
    };

    React.useEffect(() => {
      if (stats.totalEquipment > 0) {
        createEquipmentChart();
      }
    }, [stats]);

    const createEquipmentChart = () => {
      const ctx = document.getElementById('equipmentChart');
      if (!ctx) return;

      new ChartJS(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Good', 'Needs Repair', 'Broken'],
          datasets: [{
            data: [stats.equipmentStatus.good, stats.equipmentStatus.repair, stats.equipmentStatus.broken],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    };

    const statsCards = [
      { title: 'Total Labs', value: stats.totalLabs, icon: 'flask-conical', color: 'bg-blue-500' },
      { title: 'Total Equipment', value: stats.totalEquipment, icon: 'computer', color: 'bg-green-500' },
      { title: 'Pending Requests', value: stats.pendingRequests, icon: 'clipboard-list', color: 'bg-yellow-500' },
      { title: 'Experiments This Week', value: stats.experimentsThisWeek, icon: 'test-tube', color: 'bg-purple-500' }
    ];

    return (
      <div className="space-y-6" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[var(--text-secondary)] text-sm font-medium">{card.title}</p>
                  <p className="text-3xl font-bold text-[var(--text-primary)] mt-2">{card.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center`}>
                  <div className={`icon-${card.icon} text-xl text-white`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Equipment Status Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              {stats.totalEquipment > 0 ? (
                <canvas id="equipmentChart"></canvas>
              ) : (
                <p className="text-[var(--text-secondary)]">No equipment data available</p>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary text-left flex items-center space-x-3 p-4">
                <div className="icon-plus text-xl"></div>
                <span>Add New Lab</span>
              </button>
              <button className="w-full btn-secondary text-left flex items-center space-x-3 p-4">
                <div className="icon-computer text-xl"></div>
                <span>Add Equipment</span>
              </button>
              <button className="w-full btn-secondary text-left flex items-center space-x-3 p-4">
                <div className="icon-clipboard-list text-xl"></div>
                <span>New Request</span>
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-[var(--secondary-color)] rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="icon-check text-sm text-green-600"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">New equipment added to Physics Lab</p>
                <p className="text-xs text-[var(--text-secondary)]">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[var(--secondary-color)] rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="icon-test-tube text-sm text-blue-600"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">Experiment completed in Chemistry Lab</p>
                <p className="text-xs text-[var(--text-secondary)]">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    return null;
  }
}