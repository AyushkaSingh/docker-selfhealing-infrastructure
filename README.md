# Docker Self-Healing Infrastructure Monitor

A lightweight DevOps automation tool that monitors Docker containers and automatically restarts failed services to maintain system reliability.

This project demonstrates infrastructure monitoring and self-healing system design commonly used in production cloud environments.

---

# Overview

Modern containerized systems require automated monitoring to maintain service reliability. This tool continuously observes the state of Docker containers and automatically restarts them if they stop or crash.

The project simulates production-grade infrastructure resilience mechanisms often used in DevOps and cloud-native environments.

---

# Architecture

```
Application Containers
        ↓
     Docker Engine
        ↓
  Monitoring Service
        ↓
   Crash Detection
        ↓
Automatic Container Restart
        ↓
 Logging and Monitoring
```

---

# Features

* Continuous monitoring of Docker container states
* Automatic restart of stopped or failed containers
* Integration with the Docker Engine API
* Modular and scalable Node.js architecture
* Structured logging for monitoring events
* Configurable monitoring intervals

---

# Project Structure

```
docker-self-healing-monitor
│
├── src
│   ├── config
│   │   └── config.js
│   ├── services
│   │   └── containerMonitor.js
│   ├── utils
│   │   └── logger.js
│   └── index.js
│
├── package.json
├── .gitignore
└── README.md
```

---

# Core Components

## Container Monitor

Responsible for checking Docker container states and restarting stopped containers automatically.

## Logger

Provides structured console logs for monitoring system events.

## Configuration Module

Centralized configuration for monitoring intervals and system parameters.

---

# Technologies Used

Node.js
Docker Engine API
Dockerode
Chalk (logging utility)
Linux / Container Infrastructure

---

# Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/docker-self-healing-monitor.git
cd docker-self-healing-monitor
```

Install dependencies:

```
npm install
```

---

# Running the Monitor

Start the monitoring service:

```
npm start
```

The service will begin checking Docker containers at the configured interval and restart any container that stops.

The monitoring interval can be modified inside:

```
src/config/config.js
```

Example:

```
export const config = {
  monitorInterval: 5000
}
```

This means container states are checked every **5 seconds**.

---

# Example Usage

Run a container:

```
docker run -d --name test-nginx nginx
```

Start the monitor:

```
npm start
```

If the container stops:

```
docker stop test-nginx
```

The monitoring service detects the failure and automatically restarts the container.

---

# Running on a Cloud VM (Example: AWS EC2)

This tool can run on any Linux server or cloud VM that supports Docker.

## 1. Launch an EC2 Instance

Recommended configuration:

* OS: Ubuntu 22.04 LTS
* Instance type: t2.micro (free tier)
* Storage: 20 GB

Configure security group:

Allow:

* SSH (22)
* HTTP (80) if testing web containers

---

## 2. Connect to EC2

From your terminal:

```
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

---

## 3. Install Node.js

```
sudo apt update
sudo apt install nodejs npm -y
```

Verify installation:

```
node -v
npm -v
```

---

## 4. Install Docker

```
sudo apt install docker.io -y
```

Start Docker:

```
sudo systemctl start docker
sudo systemctl enable docker
```

Allow the current user to run Docker:

```
sudo usermod -aG docker $USER
newgrp docker
```

Verify Docker:

```
docker --version
```

---

## 5. Clone the Project

```
git clone https://github.com/YOUR_USERNAME/docker-self-healing-monitor.git
cd docker-self-healing-monitor
```

Install dependencies:

```
npm install
```

---

## 6. Start the Monitoring Service

```
npm start
```

The system will now continuously monitor containers running on that EC2 machine.

---

# Monitoring Logs

The service prints logs directly to the console.

Example log output:

```
[INFO] Docker Self-Healing Infrastructure Monitor Started
[WARN] Container stopped: nginx
[SUCCESS] Container restarted automatically: nginx
```

---

# Use Case

This project demonstrates how infrastructure automation tools can provide self-healing capabilities in containerized environments, reducing downtime and manual intervention.

Such mechanisms are commonly used in DevOps pipelines, container orchestration platforms, and cloud-native infrastructures.
