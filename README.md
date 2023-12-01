# React Data Table Dashboard

This is a React application that displays data from an external API source in a table format. It allows you to edit and delete entries in the table, demonstrating knowledge of React, state management.

# Screenshot

![image](https://github.com/Yashgaur908/Alippo/assets/50943957/50415c61-ffeb-41a3-9f86-5ae282e8c3a8)


# Live Link

[https://alippo.netlify.app](https://alippo.netlify.app/)

## Getting Started

To get started with this project on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your web browser and go to `http://localhost:3000` to see the application.

## Usage

The application fetches data from the [provided API](https://assets.alippo.com/catalog/static/data.json) and displays it in a table. You can perform the following actions:

- Edit: Click the "Edit" button to modify the name of an entry in the table.
- Delete: Click the "Delete" button to remove an entry from the table.

## Features

- Fetches data from an external API.
- Displays data in a table with edit and delete actions.
- Handles null/empty cases in data.
- Provides modals for editing and confirming deletions.
- Maintains state for the table entries.
- Built with React and TypeScript/JavaScript.

## Technologies Used

- React
- JavaScript
- HTML and CSS
- External API for data source

## Project Structure

The project structure is organized as follows:

- `src/` - Contains the source code for the React application.
  - `components/` - Contains React components.
    - `DeleteModal` - This component opens the modal box to perform the delete operation.
    - `EditModal` - This component opens the modal box to perform edit operation. 
    - `Table` -  This component shows the data in tabular form.
  - `App.js` - The main application component.
  - `App.css` - Styles for the application.
- `public/` - Contains the public assets and HTML file.
