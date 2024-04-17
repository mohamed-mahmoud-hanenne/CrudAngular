# Angular CRUD Application

This application is an example of a CRUD (Create, Read, Update, Delete) system developed using Angular. It allows users to view, create, modify, and delete items from an intuitive user interface.

## Features

- Displaying a list of existing items.
- Creating a new item.
- Modifying the details of an existing item.
- Deleting an item.

## Technologies Used

- Angular: JavaScript framework for client-side application development.
- HTML/CSS: Markup and styling languages for the structure and presentation of the user interface.
- TypeScript: Typed programming language used to write Angular code.
- Angular CLI: Command-line interface for Angular, used to generate components, services, etc.
- Bootstrap: CSS framework for designing the user interface.
- JSON Server: Tool for creating a RESTful server from a JSON file to facilitate development and testing.

## Installation Guide

1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Run `npm install` to install project dependencies.
4. Run `npm install -g json-server` to install JSON Server globally on your machine.
5. Navigate to the `server` directory and create a JSON file to simulate your database.
6. Run `json-server --watch db.json` to start JSON Server and simulate a REST API.
7. Return to the project root and run `ng serve` to launch the Angular application. Navigate to `http://localhost:4200/`.

## Project Structure

- `src/app/components`: Contains Angular components of the application.
- `src/app/services`: Contains Angular services used for business logic and HTTP calls.
- `src/app/models`: Contains data models used by the application.
- `src/app/shared`: Contains shared elements such as components, directives, pipes, etc.
- `src/assets`: Contains static resources such as images, CSS files, etc.
- `server`: Contains the simulated JSON file for the JSON Server.

## Demo
https://github.com/mohamed-mahmoud-hanenne/CrudAngular/assets/96345931/27dc7494-dd5f-45d6-a37b-73c625cd26bc



