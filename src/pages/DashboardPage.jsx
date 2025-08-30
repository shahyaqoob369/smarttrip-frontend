import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditModal from '../components/EditModal'; // Import our new modal component

const DashboardPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const navigate = useNavigate();

  const fetchSuppliers = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/admin/suppliers', {
        headers: { 'x-auth-token': token },
      });
      if (!response.ok) throw new Error('Failed to fetch suppliers');
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Function to open the modal
  const handleEditClick = (supplier) => {
    setEditingSupplier(supplier);
    setIsModalOpen(true);
  };

  // Function to save the changes
  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const newUrl = e.target.elements.url.value;

    try {
      const response = await fetch(`http://localhost:3000/api/admin/suppliers/${editingSupplier.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({ url: newUrl }),
      });

      if (!response.ok) throw new Error('Failed to update supplier');
      
      // Refresh the supplier list to show the change
      fetchSuppliers();
      setIsModalOpen(false); // Close the modal
      
    } catch (error) {
      console.error(error);
      alert('Failed to save changes.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">
            Log Out
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            {/* ... (table head remains the same) */}
            <thead>
              <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Label</th>
                <th className="py-3 px-6 text-left">URL</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {suppliers.map(supplier => (
                <tr key={supplier.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{supplier.id}</td>
                  <td className="py-3 px-6 text-left">{supplier.label}</td>
                  <td className="py-3 px-6 text-left break-all">{supplier.url}</td>
                  <td className="py-3 px-6 text-center">
                    {/* Update the button to open the modal */}
                    <button onClick={() => handleEditClick(supplier)} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Modal component is here, but hidden until isModalOpen is true */}
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        supplier={editingSupplier}
        onSave={handleSave}
      />
    </>
  );
};

export default DashboardPage;