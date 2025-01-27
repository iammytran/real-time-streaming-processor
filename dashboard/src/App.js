import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components (scales, elements, etc.)
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const transformData = (events) => {
    const pageCounts = events.reduce((acc, event) => {
        acc[event.page] = (acc[event.page] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(pageCounts);
    const data = labels.map((page) => pageCounts[page]);

    return {
        labels, // Pages as x-axis labels
        datasets: [
            {
                label: 'Number of Users',
                data, // Number of users per page
                backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1,
            }
        ]
    };
};

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3000/events');

        eventSource.onmessage = (event) => {
            const incomingEvent = JSON.parse(event.data);
            setEvents((prevEvents) => [...prevEvents, incomingEvent]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const chartData = transformData(events);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Real-Time Dashboard',
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true, // Automatically skip labels if they overlap
                    maxRotation: 45, // Rotate labels for better spacing
                    minRotation: 30, // Minimum rotation angle for readability
                },
                grid: {
                    display: false, // Hide the grid lines if you want cleaner design
                },
            },
            y: {
                beginAtZero: true, // Ensure y-axis starts at 0,
                ticks: {
                    stepSize: 1, // This ensures the y-axis has whole numbers (1, 2, 3, etc.)
                },
            },
        },
    };

    return (
        <div>
            <h1>Real-Time Dashboard</h1>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Dashboard;
