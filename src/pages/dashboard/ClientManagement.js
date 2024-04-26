import React, { useState } from 'react';

const ClientManagement = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', subscriptionType: 'Basic' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', subscriptionType: 'Premium' },
    ]);

    const [newClient, setNewClient] = useState({ name: '', email: '', subscriptionType: 'Basic' });

    // Handle change in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewClient((prev) => ({ ...prev, [name]: value }));
    };

    // Handle adding a new client
    const addClient = (e) => {
        e.preventDefault();
        const newId = clients.length + 1; // Simplistic approach to generate a new ID
        const clientToAdd = { id: newId, ...newClient };
        setClients([...clients, clientToAdd]);
        setNewClient({ name: '', email: '', subscriptionType: 'Basic' }); // Reset form
    };

    // Handle changing the subscription type of a client
    const changeSubscriptionType = (id, newType) => {
        const updatedClients = clients.map(client => {
            if (client.id === id) {
                return { ...client, subscriptionType: newType };
            }
            return client;
        });
        setClients(updatedClients);
    };

    return (
        <div>
            <h2>Client Management</h2>
            {/* Client add form */}
            <form onSubmit={addClient}>
                <input type="text" placeholder="Name" name="name" value={newClient.name} onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" value={newClient.email} onChange={handleChange} />
                <select name="subscriptionType" value={newClient.subscriptionType} onChange={handleChange}>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    {/* Add more subscription types as needed */}
                </select>
                <button type="submit">Add Client</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subscription Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.subscriptionType}</td>
                            <td>
                                {/* Dropdown to change subscription type */}
                                <select value={client.subscriptionType} onChange={(e) => changeSubscriptionType(client.id, e.target.value)}>
                                    <option value="Basic">Basic</option>
                                    <option value="Premium">Premium</option>
                                    {/* Add more subscription types as needed */}
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientManagement;
