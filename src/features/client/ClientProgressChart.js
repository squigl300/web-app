import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// ClientProgressChart component
const ClientProgressChart = ({ clientId }) => {
  // State variable for chart data
  const [chartData, setChartData] = useState([]);

  // Fetch chart data on component mount and when clientId changes
  useEffect(() => {
    fetchChartData();
  }, [clientId]);

  // Function to fetch chart data from the server
  const fetchChartData = async () => {
    try {
      const response = await fetch(`/api/clients/${clientId}/progress`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      // Transform the data into the required format for the chart
      const formattedData = data.map((entry) => ({
        date: entry.date,
        weight: entry.currentWeight,
        // Add other relevant progress metrics
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  // Render the client progress chart
  return (
    <div>
      <h2>Client Progress Chart</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        {/* Add other progress metrics */}
      </LineChart>
    </div>
  );
};

export default ClientProgressChart;