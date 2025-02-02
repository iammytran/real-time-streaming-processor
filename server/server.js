const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Allow cross-origin requests

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const generateClickEvent = () => {
        const pages = ['Home', 'About', 'Services', 'Contact', 'Blog'];

        return {
            userId: Math.floor(Math.random() * 1000),
            action: 'click',
            page: pages[Math.floor(Math.random() * pages.length)],  
            timestamp: new Date().toISOString(),
        };
    };

    const interval = setInterval(() => {
        const event = generateClickEvent();
        res.write(`data: ${JSON.stringify(event)}\n\n`);
    }, 2000);

    req.on('close', () => {
        clearInterval(interval);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
