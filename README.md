# School Management API

This project is a simple School Management API built using Node.js, Express.js, and MySQL. The API allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Features

- **Add School**: Allows adding a new school with its name, address, latitude, and longitude.
- **List Schools**: Retrieves and lists all schools from the database, sorted by proximity to a given location (latitude and longitude).

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MySQL**: [Download and install MySQL](https://www.mysql.com/downloads/)
- **Git**: [Download and install Git](https://git-scm.com/)

### Env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306

## API Endpoints ##
1. Add School
Endpoint: /addSchool
Method: POST
Payload:
json
{
    "name": "Example School",
    "address": "123 Example Street, City, Country",
    "latitude": 37.7749,
    "longitude": -122.4194
}
Description: Adds a new school to the database.

2. List Schools
Endpoint: /listSchools
Method: GET
Query Parameters:
latitude: User's current latitude
longitude: User's current longitude
Example:
Copy code
GET /listSchools?latitude=37.7749&longitude=-122.4194
Description: Fetches all schools and returns a sorted list based on proximity to the given latitude and longitude.

## Deployment ##
Deploying to Render

Set up environment variables .

