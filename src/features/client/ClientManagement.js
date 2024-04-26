import React, { useEffect, useState } from 'react';

// ClientManagement component
const ClientManagement = () => {
  // State variable for client data
  const [clients, setClients] = useState([]);

  // Fetch client data on component mount
  useEffect(() => {
    fetchClients();
  }, []);

  // Function to fetch client data from the server
  const fetchClients = async () => {
    try {
      const response = await fetch('/api/clients', {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  // Render the list of clients
  return (
    <div>
      <h2>Client Management</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.firstName} {client.lastName}
            <p>Email: {client.email}</p>
            <p>Membership Type: {client.membershipType}</p>
            <p>Date of Birth: {client.dob}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientManagement;