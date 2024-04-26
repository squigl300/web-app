import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  maintainAspectRatio: true,
  aspectRatio: 2, // Adjust this to control the size
};

const AnalyticsInsights = () => {
  // Placeholder data
  const progressData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Weight Loss Goal',
        data: [80, 78, 75, 72],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Weight Gain Goal',
        data: [65, 67, 69, 72],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const classPopularityData = {
    labels: ['Full Body', 'Legs and Bums', 'HIIT'],
    datasets: [{
      label: 'Number of Participants',
      data: [120, 90, 150],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    }]
  };

  const sessionAttendanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Session Attendance',
      data: [3, 5, 4, 6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };

  const subscriptionAnalyticsData = {
    labels: ['Basic', 'Premium'],
    datasets: [{
      label: 'Subscription Types',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };

  // State to hold financial insights
  const [financials, setFinancials] = useState({
    totalEarnings: 0,
    taxDeductions: 0,
    subscriptionBreakdown: {}
  });

  // Example effect to fetch financial data
  useEffect(() => {
    // Fetch or calculate financial data here
    // This is just placeholder data
    setFinancials({
      totalEarnings: 1160,
      taxDeductions: 200,
      subscriptionBreakdown: {
        Basic: 800,
        Premium: 360
      }
    });
  }, []);

  // Calculate net earnings after tax deductions
  const netEarnings = financials.totalEarnings - financials.taxDeductions;


  return (
    <div className="analytics-container">
      <h2>Analytics and Insights</h2>
      <div className="chart-container">
        <h3>Client Progress Over Time</h3>
        <Line data={progressData} options={chartOptions} />
      </div>
      <div className="chart-container">
        <h3>Class Popularity</h3>
        <Bar data={classPopularityData} options={chartOptions} />
      </div>
      <div className="chart-container">
        <h3>Session Attendance</h3>
        <Bar data={sessionAttendanceData} options={chartOptions} />
      </div>
      <div className="chart-container">
        <h3>Subscription Analytics</h3>
        <Pie data={subscriptionAnalyticsData} options={chartOptions} />
      </div>
      <div className="financial-insights">
        <h3>Financial Insights</h3>
        <p>Total Earnings: £{financials.totalEarnings}</p>
        <p>Tax Deductions: £{financials.taxDeductions}</p>
        <p>Net Earnings: £{netEarnings}</p>
        <h4>Subscription Revenue Breakdown</h4>
        {Object.entries(financials.subscriptionBreakdown).map(([type, amount]) => (
          <p key={type}>{type}: £{amount}</p>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsInsights;
