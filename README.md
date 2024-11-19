# book-search-engine

## Description

The Book Search Engine is a web application that allows users to search for books using the Google Books API. Users can sign up, log in, and save their favorite books to their personal account. The app is built with the MERN stack (MongoDB, Express.js, React, Node.js) and has been refactored to use GraphQL with Apollo Server for handling API queries. It offers a seamless user experience where users can search for books, save their selections, and view their saved books in their personal library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Questions](#questions)

## Installation

To get started with the Book Search Engine, clone the repository and follow these steps:

1. Clone the repository:
    ```
    git clone git@github.com:HappyPup1402/book-search-engine.git
    ```

2. Navigate to the project directory:
    ```
    cd book-search-engine/Develop
    ```

3. Install the necessary dependencies for both the front end and back end:
    ```
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file and add your MongoDB URI and JWT_SECRET_KEY.

5. Build the project (if applicable):
    ```
    npm run build
    ```

6. Start the server:
    ```bash
    npm run develop
    ```

## Usage

Once the server is running, open the application in your browser at `http://localhost:3000`. You can interact with the app as follows:

1. **Search for Books**
   - Users can enter a search term in the input field and click the submit button to retrieve books from the Google Books API.
   - Each search result will show the book's title, author, description, image, and a link to the Google Books site.

2. **Login/Signup**
   - Users can create an account or log in by clicking on the Login/Signup menu option.
   - After signing up or logging in, users will be able to access their saved books.

3. **Saved Books**
   - Logged-in users can save books to their account by clicking the "Save" button on any book search result.
   - Users can view their saved books by selecting the "My Saved Books" option in the menu.
   - Each saved book will display the title, author, description, image, and a link to the Google Books site.
   - Users can remove saved books by clicking the "Remove" button next to each book.

4. **Logout**
   - Logged-in users can log out by selecting the "Logout" button from the menu. This will return the user to the login/signup screen.

## Features

- **Book Search**: Users can search for books using the Google Books API. Each search result includes the book’s title, author, description, image, and a link to the Google Books site.
- **User Authentication**: Users can sign up and log in using their email and password. Authentication is handled via JWT tokens for secure login sessions.
- **Saved Books**: Users can save their favorite books to their account and view them in a personalized library.
- **Remove Saved Books**: Users can remove books from their saved list when they no longer wish to keep them.
- **Responsive UI**: The app features a user-friendly interface with a modal for login and signup, dynamic content for book search results, and an interactive saved books section.

## Demo

Deploy link: [Demo](https://app.screencastify.com/v3/watch/your-demo-link)

## Questions

If you have any questions about this project, feel free to reach out to me at [izaacramirez1402@gmail.com](mailto:izaacramirez1402@gmail.com) or visit my GitHub profile at [HappyPup1402](https://github.com/HappyPup1402).
