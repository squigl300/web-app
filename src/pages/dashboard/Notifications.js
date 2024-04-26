import React from 'react';

const Notifications = () => {
  const dummyNotifications = [
    {
      id: 1,
      type: 'Session Cancellation',
      clientName: 'John Doe',
      timestamp: '2023-06-10T10:30:00',
    },
    {
      id: 2,
      type: 'Membership Cancellation',
      clientName: 'Jane Smith',
      timestamp: '2023-06-09T15:45:00',
    },
    {
      id: 3,
      type: 'Post Reply',
      clientName: 'Mike Johnson',
      timestamp: '2023-06-08T09:15:00',
    },
    {
      id: 4,
      type: 'New Message',
      clientName: 'Sarah Davis',
      timestamp: '2023-06-07T14:20:00',
    },
  ];

  return (
    <div>
      <h2>Notifications</h2>
      {dummyNotifications.length > 0 ? (
        <ul>
          {dummyNotifications.map((notification) => (
            <li key={notification.id}>
              <div>
                <strong>{notification.type}</strong>
              </div>
              <div>Client: {notification.clientName}</div>
              <div>Timestamp: {notification.timestamp}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
};

export default Notifications;