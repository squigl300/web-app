import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SessionScheduling.css';

const SessionScheduling = () => {
    const [date, setDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);
    const [sessionTitle, setSessionTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [clientName, setClientName] = useState('');
    const [sessionType, setSessionType] = useState('personal');

    const clients = [
        { id: 1, name: 'John Doe', sessionType: 'group' },
        { id: 2, name: 'Jane Smith', sessionType: 'personal' },
        { id: 3, name: 'Joe Bloggs', sessionType: 'group' },
        // Add more clients as needed
    ];

    const handleDateClick = (value, event) => {
        setDate(value);
        setShowForm(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            sessionTitle,
            date,
            startTime,
            endTime,
            clientName,
            sessionType,
        });
        // Reset form fields
        setShowForm(false);
        setSessionTitle('');
        setStartTime('');
        setEndTime('');
        setClientName('');
        setSessionType('personal');
    };

    const filteredClients = clients.filter(client => client.sessionType === sessionType);

    return (
        <div className="session-scheduling-container">
            <Calendar
                onClickDay={handleDateClick}
                value={date}
                className="react-calendar"
            />
            {showForm && (
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="sessionTitle">Session Title:</label>
                        <input
                            id="sessionTitle"
                            type="text"
                            value={sessionTitle}
                            onChange={(e) => setSessionTitle(e.target.value)}
                            required
                        />

                        <label htmlFor="startTime">Start Time:</label>
                        <input
                            id="startTime"
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                        />

                        <label htmlFor="endTime">End Time:</label>
                        <input
                            id="endTime"
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />

                        <label htmlFor="clientName">Client Name:</label>
                        <select
                            id="clientName"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                        >
                            {filteredClients.map((client) => (
                                <option key={client.id} value={client.name}>{client.name}</option>
                            ))}
                        </select>

                        <label htmlFor="sessionType">Session Type:</label>
                        <select id="sessionType" value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
                            <option value="personal">Personal Training</option>
                            <option value="group">Group Training</option>
                            {/* Add more options as needed */}
                        </select>

                        <button type="submit">Add Session</button>
                    </form>
                </div>
            )}
            <div className="client-view-container">
                <h3>Clients</h3>
                <table>
                    {/* Table for client view */}
                </table>
            </div>
        </div>
    );
};

export default SessionScheduling;
