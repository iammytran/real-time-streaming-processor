import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components (scales, elements, etc.)
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const transformData = (events) => ({
    labels: events.map((e) => e.timestamp),
    datasets: [{
        label: 'User Actions',
        data: events.map((e) => e.userId),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
    }]
});

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

    return (
        <div>
            <h1>Real-Time Dashboard</h1>
            <Line data={chartData} />
        </div>
    );
};

export default Dashboard;
