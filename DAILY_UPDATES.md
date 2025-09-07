# ThinkNotes

06-Sep-25 

Tasks Completed:
1.	Initialized the Node.js project (npm init -y) and installed Express for backend routing.
2.	Installed Nodemon for automatic server restarts during development.
3.	Created server.js and set up the Express server to listen on port 5001.
4.	Created notes-router.js for API routes and linked it to server.js.
5.	Implemented GET and POST routes (/api/notes) with proper HTTP status codes.
6.	Tested the routes using Postman and curl, learned to check HTTP responses and status codes.

Concepts Learned:
1.	Full-Stack Architecture (MERN style):
2.	Client → Server → Database → Response → Client
3.	REST API Principles: How endpoints work (GET, POST, etc.) and why APIs are needed.
4.	Request & Response Objects: How data flows between client and server.
5.	NPM & Node.js Basics: How to run scripts, install dependencies, and use development tools.

07-Sep-25 

Tasks Completed:
1.	Connected MongoDB Atlas to the Node.js backend using the cluster URI.
2.	Created and configured a .env file to securely store environment variables (MONGO_URI).
3.	Fixed undefined MONGO_URI error by correctly placing .env in the backend root and loading it with dotenv.config().
4.	Built a controller file for Notes API with methods:
o	getAllNotes → Fetch notes.
o	createNotes → Add a new note.
o	updateNotes → Edit an existing note.
o	deleteNotes → Remove a note.
5.	Linked controllers with the routes to keep project structure clean and modular.
6.	Verified server and database connectivity by running and testing routes.

Concepts Learned:
1.	Environment Variables & dotenv: Why .env files are used to protect sensitive data like database URIs.
2.	MongoDB Atlas vs Compass:
o	Atlas → Cloud-hosted MongoDB database.
o	Compass → GUI tool to visualize and manage MongoDB data.
3.	MVC Architecture Basics: Separating logic into routes (API endpoints), controllers (functions), and models (database schema).
4.	Clean Code Practices: Using controllers improves readability, scalability, and maintainability in backend projects.








