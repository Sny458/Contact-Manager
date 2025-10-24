import React from 'react';
import { Mail, Phone, Trash, Edit } from 'lucide-react';

const ContactCard = ({ contact, onDelete, onEdit }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
        {contact.avatar}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.name}</h3>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{contact.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{contact.phone}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        {/* ✏️ Edit button */}
        <button
          onClick={() => onEdit(contact)}
          className="text-gray-400 hover:text-blue-600 transition"
          title="Edit contact"
        >
          <Edit className="w-5 h-5" />
        </button>

        {/* 🗑 Delete button */}
        <button
          onClick={() => onDelete(contact.id)}
          className="text-gray-400 hover:text-red-600 transition"
          title="Delete contact"
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default ContactCard;
