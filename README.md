@Author: JonasZ30
@Version: 1.0
date: 22.12.2023

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
- [Code]

## First Step 

To run this Express application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/zli-leistungsbeurteilung-m295.git`
2. Navigate to the project directory: `cd zli-leistungsbeurteilung-m295`
3. Ensure Docker is installed and running.
4. Make sure that all the important dependencies are installed.

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
   - **Description:** Fast, unopinionated, minimalist web framework for Node.js.
   - **Purpose:** Provides the fundamental framework for web application development.

2. **Express Session**
   - **Description:** Simple session middleware for Express.
   - **Purpose:** Manages user sessions for authentication.

3. **Deep Email Validator**
   - **Description:** Email validation library.
   - **Purpose:** Ensures the validity of email addresses during the login process.

## Sources

- deep-mail-validator: [www.abstractapi.com](https://www.abstractapi.com/guides/node-email-validation)

## Code

### authentication.js

```javascript
/* eslint-disable import/no-extraneous-dependencies */
const session = require('express-session');
const express = require('express');
const emailValidator = require('deep-email-validator');

const router = express.Router();

// ... (Rest of the code)

module.exports = router;
