function EquipmentList({ currentUser }) {
  try {
    const [equipment, setEquipment] = React.useState([]);
    const [labs, setLabs] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filterLab, setFilterLab] = React.useState('');
    const [showForm, setShowForm] = React.useState(false);
    const [editingEquipment, setEditingEquipment] = React.useState(null);

    React.useEffect(() => {
      loadEquipment();
      setLabs(StorageService.getLabs());
    }, []);

    const loadEquipment = () => {
      setEquipment(StorageService.getEquipment());
    };

    const filteredEquipment = equipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLab = !filterLab || item.labId === filterLab;
      return matchesSearch && matchesLab;
    });

    const handleAddEquipment = () => {
      setEditingEquipment(null);
      setShowForm(true);
    };

    const handleEditEquipment = (item) => {
      setEditingEquipment(item);
      setShowForm(true);
    };

    const handleSaveEquipment = (equipmentData) => {
      if (editingEquipment) {
        StorageService.updateEquipment(editingEquipment.id, equipmentData);
      } else {
        StorageService.addEquipment(equipmentData);
      }
      loadEquipment();
      setShowForm(false);
      setEditingEquipment(null);
    };

    const getStatusBadge = (status) => {
      const statusClass = `status-${status.toLowerCase().replace(' ', '')}`;
      return <span className={statusClass}>{status}</span>;
    };

    const canManage = ['Admin', 'Lab Incharge'].includes(currentUser?.role);

    return (
      <div className="space-y-6" data-name="equipment-list" data-file="components/EquipmentList.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Equipment Management</h2>
          {canManage && (
            <button onClick={handleAddEquipment} className="btn-primary flex items-center space-x-2">
              <div className="icon-plus text-xl"></div>
              <span>Add Equipment</span>
            </button>
          )}
        </div>

        <div className="card">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field flex-1"
            />
            <select
              value={filterLab}
              onChange={(e) => setFilterLab(e.target.value)}
              className="input-field md:w-48"
            >
              <option value="">All Labs</option>
              {labs.map(lab => (
                <option key={lab.id} value={lab.id}>{lab.name}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="table-header">Equipment ID</th>
                  <th className="table-header">Name</th>
                  <th className="table-header">Lab</th>
                  <th className="table-header">Quantity</th>
                  <th className="table-header">Status</th>
                  <th className="table-header">Last Serviced</th>
                  {canManage && <th className="table-header">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {filteredEquipment.map(item => (
                  <tr key={item.id} className="hover:bg-[var(--secondary-color)]">
                    <td className="table-cell font-mono text-sm">{item.id}</td>
                    <td className="table-cell font-medium">{item.name}</td>
                    <td className="table-cell">{labs.find(l => l.id === item.labId)?.name || 'Unknown'}</td>
                    <td className="table-cell">{item.quantity}</td>
                    <td className="table-cell">{getStatusBadge(item.status)}</td>
                    <td className="table-cell">{item.lastServiced || 'Never'}</td>
                    {canManage && (
                      <td className="table-cell">
                        <button
                          onClick={() => handleEditEquipment(item)}
                          className="text-[var(--primary-color)] hover:text-blue-700"
                        >
                          <div className="icon-edit text-lg"></div>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showForm && (
          <EquipmentForm
            equipment={editingEquipment}
            labs={labs}
            onSave={handleSaveEquipment}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('EquipmentList component error:', error);
    return null;
  }
}

function EquipmentForm({ equipment, labs, onSave, onCancel }) {
  const [formData, setFormData] = React.useState({
    name: equipment?.name || '',
    labId: equipment?.labId || '',
    quantity: equipment?.quantity || 1,
    status: equipment?.status || 'Good',
    lastServiced: equipment?.lastServiced || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {equipment ? 'Edit Equipment' : 'Add New Equipment'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Equipment Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Lab</label>
            <select
              value={formData.labId}
              onChange={(e) => setFormData({...formData, labId: e.target.value})}
              className="input-field"
              required
            >
              <option value="">Select Lab</option>
              {labs.map(lab => (
                <option key={lab.id} value={lab.id}>{lab.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="input-field"
            >
              <option value="Good">Good</option>
              <option value="Needs Repair">Needs Repair</option>
              <option value="Broken">Broken</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Serviced</label>
            <input
              type="date"
              value={formData.lastServiced}
              onChange={(e) => setFormData({...formData, lastServiced: e.target.value})}
              className="input-field"
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button type="submit" className="btn-primary flex-1">Save</button>
            <button type="button" onClick={onCancel} className="btn-secondary flex-1">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
