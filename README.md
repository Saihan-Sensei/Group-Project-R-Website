
# 🌌 Cosmic Mission Control: Fullstack Task Manager (MERN)

## Overview
**Cosmic Mission Control** is a cloud-based task management web application designed to propel team productivity into orbit. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), this platform offers a stellar user interface for seamless task assignment, tracking, and collaboration. Tailored for both administrators and team members, it enhances workflow efficiency with a cosmic-inspired design and powerful features.

### Why/Problem?
In today’s fast-paced, galaxy-spanning work environment, managing tasks effectively is critical for team success. Traditional methods like spreadsheets or manual tracking are lightyears behind—prone to errors and inefficient for modern teams. **Cosmic Mission Control** addresses these challenges by providing a centralized, intuitive platform that ensures tasks are tracked, teams are aligned, and missions are completed with precision.

### Background
With remote work and distributed teams becoming the new frontier, there’s a growing need for tools that enable stellar communication and task coordination. **Cosmic Mission Control** leverages the MERN stack to deliver a scalable, responsive solution. Integrated with **Redux Toolkit** for state management, **Headless UI** for accessible components, and **Tailwind CSS** for a cosmic-themed UI, this app ensures a smooth journey through the stars of task management.

---

## 🚀 Admin Features
1. **Crew Management**:
   - Create admin accounts to oversee operations.
   - Add and manage team members across the galaxy.
2. **Mission Assignment**:
   - Assign missions (tasks) to individual crew members or entire teams.
   - Update mission details and track their trajectory.
3. **Mission Properties**:
   - Label missions as **Launch Pad (To Do)**, **In Orbit (In Progress)**, or **Orbit Achieved (Completed)**.
   - Set priority levels: **High (Supernova)**, **Medium (Star)**, **Normal (Planet)**, **Low (Asteroid)**.
   - Add and manage sub-missions (sub-tasks) for complex projects.
4. **Asset Management**:
   - Upload mission assets (e.g., images, documents) to support your crew.
5. **Crew Account Control**:
   - Activate or deactivate crew accounts as needed.
   - Permanently delete or trash missions to maintain a clean mission log.

## 🌠 User Features
1. **Mission Interaction**:
   - Update mission status to **In Orbit** or **Orbit Achieved**.
   - View detailed mission intel, including sub-missions and assets.
2. **Interstellar Communication**:
   - Add comments or chat within mission activities to collaborate with your crew.

## 🪐 General Features
1. **Authentication & Authorization**:
   - Secure login with role-based access control (admin vs. user).
2. **Crew Profile Management**:
   - Update personal profiles to keep your cosmic identity up to date.
3. **Password Management**:
   - Securely change passwords to maintain mission security.
4. **Mission Dashboard**:
   - Access a stellar dashboard summarizing your activities.
   - Filter missions by status: **Launch Pad**, **In Orbit**, or **Orbit Achieved**.
5. **Views**:
   - **Star Map View**: Visualize missions in a Kanban-style board.
   - **Mission Log View**: Review missions in a detailed table format.

---

## 🛠️ Technologies Used
- **Frontend**:
  - **React (Vite)**: For a fast, reactive UI.
  - **Redux Toolkit**: Efficient state management for interstellar operations.
  - **Headless UI**: Accessible, unstyled components for a seamless experience.
  - **Tailwind CSS**: Cosmic-themed styling with a dark, galaxy-inspired aesthetic.
- **Backend**:
  - **Node.js with Express.js**: A robust server for handling mission data.
- **Database**:
  - **MongoDB**: Scalable storage for all your mission logs and crew data.

**Cosmic Mission Control** harnesses the power of the MERN stack to deliver an out-of-this-world task management experience, fostering collaboration and productivity across the cosmos.

---

## 🪐 Setup Instructions

### Server Setup

#### Environment Variables
Create a `.env` file in the `server` folder with the following variables:
```
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=8800
NODE_ENV=development
```

#### Set Up MongoDB
1. **Steps to Set Up MongoDB**:
   - Visit the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
   - Create or log in to your MongoDB Atlas account.
   - Create a new cluster:
     - Choose a cloud provider and region.
     - Configure cluster settings (e.g., free tier for testing).
     - Click "Create Cluster" and wait for deployment.
   - Create a database user:
     - Go to "Database Access" and add a new user with a username and password.
   - Set up IP whitelist:
     - Go to "Network Access" and add your IP address (or allow access from anywhere for testing).
   - Connect to your cluster:
     - Go to "Clusters", click "Connect", and select "Connect Your Application".
     - Copy the connection string and replace `<password>` with your database user’s password.
   - Update the `.env` file with the `MONGODB_URI` from the connection string.

#### Steps to Run the Server
1. Open the project in your preferred editor.
2. Navigate to the server directory: `cd server`.
3. Install dependencies: `npm i` or `npm install`.
4. Start the server: `npm start`.
5. If successful, you’ll see: `Server running on port 8800` and `Database Connected`.

---

### Client-Side Setup

#### Environment Variables
Create a `.env` file in the `client` folder with the following variables:
```
VITE_APP_BASE_URL=http://localhost:8800
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```
**Note**: Replace `8800` with your server’s port if different. Obtain the Firebase API key from your Firebase project if you’re using Firebase for authentication or storage.

#### Steps to Run the Client
1. Navigate to the client directory: `cd client`.
2. Install dependencies: `npm i` or `npm install`.
3. Start the app: `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the cosmos!

---

### Additional Notes
- **Theme**: The app features a "Mission Control" cosmic theme with a galaxy background, dark cards (`#252A36`), and cyan accents (`#40C4FF`).
- **Scalability**: The MERN stack ensures the app can scale as your team grows.
- **Future Enhancements**:
  - Add real-time notifications for mission updates.
  - Implement drag-and-drop functionality for the Star Map View.
  - Integrate AI-driven mission prioritization.

Embark on your task management journey with **Cosmic Mission Control**—where every mission is a step closer to the stars! 🌠

---
