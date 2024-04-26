// In src/components/ClientList.js
import React from 'react';

const ClientList = ({ clients, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.name} - {client.email} - {client.phoneNumber}
            <button onClick={() => onEdit(client.id)}>Edit</button>
            <button onClick={() => onDelete(client.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
