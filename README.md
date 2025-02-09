# 📊 Real-Time Streaming Dashboard

A **full-stack real-time dashboard** that visualizes streaming event data using **React, Chart.js, and Node.js**. This project follows **functional programming principles** for cleaner, more maintainable code.

## 🚀 Features
- 📡 **Real-time event streaming** using Server-Sent Events (SSE)
- 📊 **Dynamic bar chart visualization** with Chart.js
- 🏗 **Functional programming principles** (immutability, pure functions, higher-order functions)
- 🖥️ **Full-stack setup** with Node.js for backend event streaming

## 🛠️ Tech Stack
- **Frontend**: React, Chart.js
- **Backend**: Node.js (Express, Server-Sent Events)
- **Styling**: CSS

## 📂 Project Structure
dashboard/ 
│── src/ 
│ ├── components/ # Reusable UI components 
│ ├── App.js # Main dashboard logic 
│ ├── index.js # Entry point 
│── public/ # Static assets 
│── package.json # Dependencies and scripts

```plaintext
real-time-streaming-processor/ 
│── server/ # Backend server for event streaming 
│ ├── index.js # Main event source logic 
│ ├── package.json # Backend dependencies 
|
│── dashboard/ # Frontend React app 
│ ├── src/ # React components & logic
| | |── App.js  # Dashboard implementation logic
│ ├── public/ # Static assets 
│ ├── package.json # Frontend dependencies 
|
│── README.md # Project documentation
```

## 🏗 Setup & Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/iammytran/real-time-streaming-processor.git
   ```
   
2.  **Set up the backend server**
    ```sh
    cd real-time-streaming-processor/server
    npm install
    node server.js
    ```
The server will start at http://localhost:3000.

3.  **Set up the frontend server**
    ```sh
    cd ../dashboard
    npm install
    npm start
    ```
## 📜 License
This project is licensed under the MIT License.

