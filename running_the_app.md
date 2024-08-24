# Running the App Locally
To run the application locally, you need to start both the React.js frontend and the Django backend.

# Django Server
1. Open a terminal and navigate to the server/react_django directory.

2. Run the following command to start the Django server:

    $ python manage.py runserver

This will start the server, typically on port 8000 by default. If you have a .env file specifying a different port, adjust the URL accordingly.

3. If you add new packages through npm, make sure to install them by running:

    $ npm install

This command installs any missing node_modules that have been added.

## React.js Live Server
1. Open another terminal and navigate to the app/ directory.

2. Run the following command to start the React development server:

    $ npm run dev

This will start the development server on port 3000 by default if using Create React App or port 5173 if using Vite. Adjust the port number as needed based on your .env file configuration or development server settings.