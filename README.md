# Online Pharmacy Backend

This is the backend for an online pharmacy website, built using Node.js, Express, MongoDB, and Mongoose. The application supports functionalities like user authentication, category and product management, sales tracking, and more.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Live Links](#live-links)

## Features

- User authentication and authorization using JWT.
- Admin can add, edit, and delete categories and products.
- Users can view products and make purchases.
- Admin can view all sales reports.
- Error handling for all routes and operations.

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)

## Prerequisites

Before running this project, you should have:

- Node.js installed
- MongoDB installed and running
- A MongoDB URI for connecting to your database

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kamrulhasandev/Pharmacy-Server
    cd Pharmacy-Server
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables (see [Environment Variables](#environment-variables)).

4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

# API Endpoints

## User Routes

- **GET /api/user/**
  - Get user details by email

- **GET /api/user/get-admin/**
  - Check if a user is an admin

- **POST /api/user/save-user**
  - Save a new user

## Category Routes

- **GET /api/category**
  - Get all categories

- **GET /api/category/**
  - Get a single category by ID

- **POST /api/category/create-category**
  - Create a new category (Admin only)

## Product Routes

- **GET /api/product**
  - Get all products

- **GET /api/product/**
  - Get a single product by ID

- **POST /api/product/create-product**
  - Create a new product (Admin only)

- **PUT /api/product/edit-product/**
  - Edit an existing product (Admin only)

- **DELETE /api/product/delete-product/**
  - Delete a product (Admin only)

## Sales Routes

- **GET /api/sales**
  - Get all sales (Admin only)

- **POST /api/sales/add-sale**
  - Add a new sale

## Meta Data Routes

- **GET /api/meta-data**
  - Get dashboard meta data (Admin only)

## Error Handling

All routes include comprehensive error handling to ensure that meaningful error messages are returned in case of any issues. Custom middleware is used to handle validation and authorization errors.

## Live Links

- **Deployed API**: [https://pharmacy-server.vercel.app/](https://pharmacy-server.vercel.app/)
