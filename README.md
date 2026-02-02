🚀 Node.js CI/CD with Docker & Jenkins
📌 Project Overview

This project demonstrates a basic end-to-end CI/CD pipeline using Node.js, Docker, Docker Compose, and Jenkins.
A simple Task Tracker REST API is built with Node.js and PostgreSQL, containerized with Docker, and automatically built and deployed via Jenkins.

🛠️ Tech Stack

Backend: Node.js, Express.js
Database: PostgreSQL
ORM: Sequelize
Containerization: Docker, Docker Compose
CI/CD: Jenkins
Version Control: Git, GitHub

⚙️ What This Project Does
🚀 Builds a Node.js backend application
🐳 Runs the application and database in Docker containers
🔗 Uses Docker Compose for multi-container orchestration
🤖 Automates build and deployment using Jenkins pipelines
🔄 Deploys the application on every pipeline execution.

▶️ Run Locally
docker compose up --build

▶️ Run with Jenkins
Create a Jenkins Pipeline Job
Connect this GitHub repository
Configure the job to use the Jenkinsfile
Click Build Now to trigger the CI/CD pipeline
