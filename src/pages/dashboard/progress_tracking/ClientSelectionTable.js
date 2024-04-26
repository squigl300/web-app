import React from 'react';

const ClientSelectionTable = ({ clients, selectClient }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Client Name</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>
                            <button onClick={() => selectClient(client)}>View Progress</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ClientSelectionTable;
