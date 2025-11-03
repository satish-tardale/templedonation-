function LabsList({ currentUser }) {
  try {
    const [labs, setLabs] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showForm, setShowForm] = React.useState(false);
    const [editingLab, setEditingLab] = React.useState(null);

    React.useEffect(() => {
      loadLabs();
    }, []);

    const loadLabs = () => {
      const labsData = StorageService.getLabs();
      setLabs(labsData);
    };

    const filteredLabs = labs.filter(lab =>
      lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.incharge.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddLab = () => {
      setEditingLab(null);
      setShowForm(true);
    };

    const handleEditLab = (lab) => {
      setEditingLab(lab);
      setShowForm(true);
    };

    const handleSaveLab = (labData) => {
      if (editingLab) {
        StorageService.updateLab(editingLab.id, labData);
      } else {
        StorageService.addLab(labData);
      }
      loadLabs();
      setShowForm(false);
      setEditingLab(null);
    };

    const canManage = ['Admin', 'Lab Incharge'].includes(currentUser?.role);

    return (
      <div className="space-y-6" data-name="labs-list" data-file="components/LabsList.js">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Laboratory Management</h2>
          {canManage && (
            <button onClick={handleAddLab} className="btn-primary flex items-center space-x-2">
              <div className="icon-plus text-xl"></div>
              <span>Add Lab</span>
            </button>
          )}
        </div>

        <div className="card">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search labs by name, location, or incharge..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field max-w-md"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="table-header">Lab ID</th>
                  <th className="table-header">Name</th>
                  <th className="table-header">Location</th>
                  <th className="table-header">Incharge</th>
                  <th className="table-header">Contact</th>
                  {canManage && <th className="table-header">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {filteredLabs.map(lab => (
                  <tr key={lab.id} className="hover:bg-[var(--secondary-color)]">
                    <td className="table-cell font-mono text-sm">{lab.id}</td>
                    <td className="table-cell font-medium">{lab.name}</td>
                    <td className="table-cell">{lab.location}</td>
                    <td className="table-cell">{lab.incharge}</td>
                    <td className="table-cell">{lab.contact}</td>
                    {canManage && (
                      <td className="table-cell">
                        <button
                          onClick={() => handleEditLab(lab)}
                          className="text-[var(--primary-color)] hover:text-blue-700 mr-3"
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
          <LabForm
            lab={editingLab}
            onSave={handleSaveLab}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('LabsList component error:', error);
    return null;
  }
}

function LabForm({ lab, onSave, onCancel }) {
  const [formData, setFormData] = React.useState({
    name: lab?.name || '',
    location: lab?.location || '',
    incharge: lab?.incharge || '',
    contact: lab?.contact || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {lab ? 'Edit Lab' : 'Add New Lab'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Lab Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Incharge</label>
            <input
              type="text"
              value={formData.incharge}
              onChange={(e) => setFormData({...formData, incharge: e.target.value})}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact</label>
            <input
              type="text"
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
              className="input-field"
              required
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
