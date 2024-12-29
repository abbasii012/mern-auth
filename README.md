# MERN Authentication Project

This project is a MERN (MongoDB, Express, React, Node.js) stack application that demonstrates user authentication.

## Features

- User registration
- User login
- Password hashing
- JWT authentication
- Protected routes

## Installation

1. Clone the repository:
    ```sh
    https://github.com/abbasii012/mern-auth.git
    ```
2. Navigate to the project directory:
    ```sh
    cd mern-auth
    ```
3. Install server dependencies:
    ```sh
    cd server
    npm install
    ```
4. Install client dependencies:
    ```sh
    cd ../client
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    cd server
    npm start
    ```
2. Start the client:
    ```sh
    cd ../client
    npm start
    ```

## Environment Variables

Create a `.env` file in the `server` directory and add the following variables:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.