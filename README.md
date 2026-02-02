🚀 Node.js CI/CD with Docker & Jenkins
📌 Project Overview
This project demonstrates a basic CI/CD pipeline using Node.js, Docker, Docker Compose, and Jenkins.
A simple Task Tracker API is built with Node.js and PostgreSQL, containerized using Docker, and automatically built and deployed using a Jenkins pipeline.

🛠️ Tech Stack
Backend: Node.js, Express.js
Database: PostgreSQL
ORM: Sequelize
Containerization: Docker, Docker Compose
CI/CD: Jenkins
Version Control: Git, GitHub

⚙️ What This Project Does
Builds a Node.js backend application
Runs the app and database in Docker containers
Uses Docker Compose for multi-container setup
Automates build and deployment using Jenkins
Deploys the application on every pipeline run

▶️ Run Locally
docker compose up --build

Open:
http://localhost:3000/tasks

▶️ Run with Jenkins
Create a Jenkins Pipeline Job
Connect this GitHub repo
Use Jenkinsfile
Click Build Now
