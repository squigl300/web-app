import React, { useState } from 'react';

const SubscriptionTypesManagement = () => {
    const [subscriptionTypes, setSubscriptionTypes] = useState([
        { id: 1, name: 'Standard', description: 'Basic access', price: '10' },
        // More preloaded or dynamically loaded types
    ]);
    const [newType, setNewType] = useState({ name: '', description: '', price: '' });

    const handleAddType = (e) => {
        e.preventDefault();
        const newId = subscriptionTypes.length + 1; // Simplistic ID generation
        setSubscriptionTypes([...subscriptionTypes, { ...newType, id: newId }]);
        setNewType({ name: '', description: '', price: '' }); // Reset form
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewType(prev => ({ ...prev, [name]: value }));
    };

    // Placeholder functions for editing and updating subscription types
    const handleEditType = (id) => {
        console.log("Edit subscription type", id);
        // Logic for editing a type
    };

    const handleDeleteType = (id) => {
        setSubscriptionTypes(subscriptionTypes.filter(type => type.id !== id));
    };

    return (
        <div>
            <h2>Manage Subscription Types</h2>
            <form onSubmit={handleAddType}>
                <input
                    name="name"
                    value={newType.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    name="description"
                    value={newType.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <input
                    name="price"
                    type="number"
                    value={newType.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <button type="submit">Add Subscription Type</button>
            </form>
            <ul>
                {subscriptionTypes.map((type) => (
                    <li key={type.id}>
                        {type.name} - {type.description} - ${type.price}
                        <button onClick={() => handleEditType(type.id)}>Edit</button>
                        <button onClick={() => handleDeleteType(type.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriptionTypesManagement;
