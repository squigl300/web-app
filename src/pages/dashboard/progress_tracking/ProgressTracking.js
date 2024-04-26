import React, { useState } from 'react';
import ProgressTrackingGraph from './ProgressTrackingGraph';
import ClientNotes from './ClientNotes';
import ClientNotesInput from './ClientNotesInput';
import ClientSelectionTable from './ClientSelectionTable';
import './ProgressTracking.css';



const ProgressTracking = () => {
    const [selectedClient, setSelectedClient] = useState(null);
    const [clients] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        // Add more clients as needed
    ]);
    const [notes, setNotes] = useState(["Session 1: Good effort", "Session 2: Improved stamina"]);
    const [data, setData] = useState({
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'Weight Progress',
                data: [65, 64, 63, 62],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    });

    const addNote = (note) => {
        setNotes((currentNotes) => [...currentNotes, note]);
    };

    return (
        <div className="progress-tracking-container">
            <h2>Progress Tracking</h2>
            <ClientSelectionTable clients={clients} selectClient={setSelectedClient} />
            {selectedClient && (
                <>
                    <ProgressTrackingGraph data={data} />
                    <ClientNotes notes={notes} />
                    <ClientNotesInput addNote={addNote} />
                </>
            )}
        </div>
    );
};

export default ProgressTracking;
