# zli-leistungsbeurteilung-m295

# Leistungsbeurteilung B

This Express application serves as a simple task management system with user 
authentication using sessions. The application provides endpoints for user login, 
task manipulation (creation, update, deletion), verification of user authentication, and logout. 

## Table of Contents

- [First-Step]
- [Features]
- [Endpoints]
- [Dependencies]

## First Step 

1. Create a copy of this project.
2. Make sure Docker is set and running.

## Features

- User authentication with sessions
- Task management
- Email validation during login

## Endpoints

1. **GET /tasks**
   - Description: Get all tasks (requires authentication)

2. **POST /tasks**
   - Description: Create a new task (requires authentication)

3. **GET /tasks/:id**
   - Description: Get details of a specific task (requires authentication)

4. **PATCH /tasks/:id**
   - Description: Update details of a specific task (requires authentication)

5. **DELETE /tasks/:id**
   - Description: Mark a task as finished (requires authentication)

6. **POST /login**
   - Description: User login

7. **GET /verify**
   - Description: Verify user authentication

8. **DELETE /logout**
   - Description: User logout

## Dependencies

1. **Express**
   - Description: Fast, unopinionated, minimalist web framework for Node.js
   - Purpose: Framework for web application development

2. **Express Session**
   - Description: Simple session middleware for Express

3. **Deep Email Validator**
   - Description: Email validation library
