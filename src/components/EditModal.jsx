import React from 'react';

const EditModal = ({ isOpen, onClose, supplier, onSave }) => {
  if (!isOpen) return null;

  return (
    // This is the semi-transparent background overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {/* This is the white modal container */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Edit Supplier: {supplier.label}</h3>
        <form onSubmit={onSave}>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Supplier URL
            </label>
            <input
              type="text"
              name="url"
              id="url"
              defaultValue={supplier.url} // We use defaultValue to show the current URL
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;