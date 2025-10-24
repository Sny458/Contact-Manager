import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddContact = ({ onAdd, onClose, editingContact, onUpdate }) => {
  const [formData, setFormData] = useState(
    editingContact || { name: '', email: '', phone: '' }
  );
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    return e;
  };

  const handleSubmit = () => {
    const e = validateForm();
    if (Object.keys(e).length === 0) {
      const initials = formData.name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
      if (editingContact) {
        onUpdate({ ...formData, id: editingContact.id, avatar: editingContact.avatar });
      } else {
        onAdd({ ...formData, avatar: initials });
      }
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
    } else setErrors(e);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Contact</h2>

        <div className="space-y-4">
          {['name', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)} *
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                inputMode={field === 'phone' ? 'numeric' : undefined}
                pattern={field === 'phone' ? '^[0-9+]*$' : undefined}
                value={formData[field]}
                onChange={(e) => {
                  let value = e.target.value;
                  if (field === 'phone') {
                    // allow only digits and '+'
                    value = value.replace(/[^0-9+\-\(\)\s]/g, '');

                  }
                  setFormData({ ...formData, [field]: value });
                }}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[field] ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={handleSubmit} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {editingContact ? 'Save Changes' : 'Add Contact'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
