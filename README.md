# zli-leistungsbeurteilung-m295

# Express Task Management App

This is a simple Express application for managing tasks with user authentication using sessions.

## Table of Contents

- [Features]
- [Endpoints]
- [Dependencies]

## Features

- User authentication with sessions
- Task management
- Email validation during login


## Endpoints
GET /tasks: Get all tasks (requires authentication)
POST /tasks: Create a new task (requires authentication)
GET /tasks/:id: Get details of a specific task (requires authentication)
PATCH /tasks/:id: Update details of a specific task (requires authentication)
DELETE /tasks/:id: Mark a task as finished (requires authentication)
POST /login: User login
GET /verify: Verify user authentication
DELETE /logout: User logout

## Dependencies
Express: Fast, unopinionated, minimalist web framework for Node.js
Express Session: Simple session middleware for Express
Deep Email Validator: Email validation library

