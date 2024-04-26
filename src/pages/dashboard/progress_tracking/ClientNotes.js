import React from 'react';

const ClientNotes = ({ notes }) => {
    return (
        <div>
            <h3>Client Notes</h3>
            {notes.map((note, index) => (
                <p key={index}>{note}</p>
            ))}
        </div>
    );
};

export default ClientNotes;
