import React, { useState } from 'react';

const ClientNotesInput = ({ addNote }) => {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note);
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newNote">New Note:</label>
            <textarea
                id="newNote"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default ClientNotesInput;
