import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressGraph = ({ data }) => {
  // Options for the chart
  const options = {
    maintainAspectRatio: true, // Allows CSS to control the size while keeping the aspect ratio
    scales: {
      y: {
        beginAtZero: true // Ensures that the y-axis starts from 0
      }
    }
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressGraph;
