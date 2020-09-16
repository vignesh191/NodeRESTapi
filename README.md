# NodeRESTapi
An example REST API using React.js as the frontend, Node.js as the backend, and OrientDB as the database.

## Getting Started
1. First cd into each the 'frontend' and 'backend' folders
2. Use terminal command 'npm install' to install the required dependencies for the backend and frontend.
3. cd into the 'frontend' folder and run 'npm start' to run the frontend in localhost:3000
4. cd into the 'backend' folder and run 'node app.js' to run the backend in localhost:5000

NOTE: the data being queried in this example REST API is from the 'demodb' of OrientDB, so please make sure to have access to that specific database with an appropriate root username and root password.

## Testing functionality
Once both the frontend and backend are running locally, and OrientDB Studio is initialized, visit 'Menu Item 3' in the sidebar of the frontend UI. 
Click on the 'Get Backend Data' button to query data from the OrientDB and present it onscreen. 

## Why it works
Inside the package.json file of the frontend, a 'proxy' to the backend (localhost:5000) is added. 
An example: When the request to endpoint 'e' is made in the frontend button click event, the connection is redirected to the proxy after realizing the endpoint 'e' does not exist in the frontend. In the backend, the data is found as a response in the backend GET call to endpoint 'e'. 

NOTE: all the querying syntax for OrientDB in the backend invovling pools and clients are all from the npm dependency orientjs. 


