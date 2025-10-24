import React, { useEffect, useState } from 'react';
import { Plus, Loader2, User } from 'lucide-react';
import ContactCard from './Components/ContactCard';
import SearchContact from './Components/SearchContact';
import AddContact from './Components/AddContact';
import { fetchContacts } from './utils/fetchContacts';

const ContactListApp = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
      setLoading(false);
    });
  }, []);

  const handleAddContact = (newContact) => {
    const contact = {
      ...newContact,
      id: Math.max(...contacts.map((c) => c.id)) + 1,
    };
    setContacts([contact, ...contacts]);
    setShowAddForm(false);
  };

  const handleDeleteContact = (id) => {
  setContacts((prev) => prev.filter((c) => c.id !== id));
};

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditContact = (contact) => {
  setEditingContact(contact);
  setShowAddForm(true);
};

const handleUpdateContact = (updatedContact) => {
  setContacts((prev) =>
    prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
  );
  setEditingContact(null);
  setShowAddForm(false);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact List Manager</h1>
          <p className="text-gray-600">Manage your contact list</p>
        </div>

        {/* Search and Add Button */}
        <div className="mb-6 flex gap-3">
          <div className="flex-1">
            <SearchContact searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-600">Loading contacts...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredContacts.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchQuery ? 'No contacts found' : 'No contacts yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? `No contacts match "${searchQuery}"`
                : 'Get started by adding your first contact'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Your First Contact
              </button>
            )}
          </div>
        )}

        {/* Contacts Grid */}
        {!loading && filteredContacts.length > 0 && (
          <div>
            <p className="text-sm text-gray-600 mb-4">
              {filteredContacts.length}{' '}
              {filteredContacts.length === 1 ? 'contact' : 'contacts'}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {filteredContacts.map((contact) => (
                <ContactCard 
                  key={contact.id} 
                  contact={contact} 
                  onDelete={handleDeleteContact}
                  onEdit={handleEditContact}
                />
              ))}
            </div>
          </div>
        )}

        {/* Add Contact Modal */}
        {showAddForm && (
          <AddContact
            onAdd={handleAddContact}
            onClose={() => {
      setShowAddForm(false);
      setEditingContact(null);
    }}
    editingContact={editingContact}
    onUpdate={handleUpdateContact}
          />
        )}
      </div>
    </div>
  );
};

export default ContactListApp;
