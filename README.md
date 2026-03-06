# Docker Self-Healing Infrastructure Monitor

A lightweight DevOps automation tool that monitors Docker containers and automatically restarts failed services to maintain system reliability.

This project demonstrates infrastructure monitoring and self-healing system design commonly used in production cloud environments.

---

## Overview

Modern containerized systems require automated monitoring to maintain service reliability. This tool continuously observes the state of Docker containers and automatically restarts them if they stop or crash.

The project simulates production-grade infrastructure resilience mechanisms often used in DevOps and cloud-native environments.

---

## Architecture

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

---

## Features

• Continuous monitoring of Docker container states
• Automatic restart of stopped or failed containers
• Integration with Docker Engine API
• Modular and scalable Node.js architecture
• Structured logging for monitoring events

---

## Project Structure

docker-self-healing-monitor

src
 ├── config
 │    └── config.js
 ├── services
 │    └── containerMonitor.js
 ├── utils
 │    └── logger.js
 └── index.js

package.json
README.md

---

## Core Components

### Container Monitor

Responsible for checking Docker container states and restarting stopped containers.

### Logger

Provides structured console logs for monitoring system events.

### Configuration Module

Centralized configuration for monitoring intervals and system parameters.

---

## Technologies Used

Node.js
Docker Engine API
Dockerode
Chalk (Logging)
Linux / Container Infrastructure

---

## Use Case

This project demonstrates how infrastructure automation tools can provide self-healing capabilities in containerized environments, reducing downtime and manual intervention.

Such mechanisms are commonly used in DevOps pipelines, container orchestration platforms, and cloud-native infrastructures.
