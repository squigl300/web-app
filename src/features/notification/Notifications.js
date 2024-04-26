import React, { useEffect, useState } from 'react';

// Notifications component
const Notifications = () => {
  // State variable for notifications data
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications data on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Function to fetch notifications data from the server
  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications', {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Render the list of notifications
  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.message}</p>
            <p>Timestamp: {notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;