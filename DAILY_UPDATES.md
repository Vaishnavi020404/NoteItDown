# NoteItDown

## 06-Sep-25

### Tasks Completed
1. Initialized the Node.js project (`npm init -y`) and installed Express for backend routing.
2. Installed Nodemon for automatic server restarts during development.
3. Created `server.js` and set up the Express server to listen on port `5001`.
4. Created `notes-router.js` for API routes and linked it to `server.js`.
5. Implemented GET and POST routes (`/api/notes`) with proper HTTP status codes.
6. Tested the routes using Postman and curl, learned to check HTTP responses and status codes.

### Concepts Learned
1. **Full-Stack Architecture (MERN style)**  
   - Client → Server → Database → Response → Client
2. **REST API Principles**: How endpoints work (GET, POST, etc.) and why APIs are needed.
3. **Request & Response Objects**: How data flows between client and server.
4. **NPM & Node.js Basics**: How to run scripts, install dependencies, and use development tools.

---

## 07-Sep-25

### Tasks Completed
1. Connected MongoDB Atlas to the Node.js backend using the cluster URI.
2. Created and configured a `.env` file to securely store environment variables (`MONGO_URI`).
3. Fixed `undefined MONGO_URI` error by correctly placing `.env` in the backend root and loading it with `dotenv.config()`.
4. Built a controller file for Notes API with methods:
   - `getAllNotes` → Fetch notes.
   - `createNotes` → Add a new note.
   - `updateNotes` → Edit an existing note.
   - `deleteNotes` → Remove a note.
5. Linked controllers with the routes to keep project structure clean and modular.
6. Verified server and database connectivity by running and testing routes.

### Concepts Learned
1. **Environment Variables & dotenv**: Why `.env` files are used to protect sensitive data like database URIs.
2. **MongoDB Atlas vs Compass**:  
   - Atlas → Cloud-hosted MongoDB database.  
   - Compass → GUI tool to visualize and manage MongoDB data.
3. **MVC Architecture Basics**: Separating logic into routes (API endpoints), controllers (functions), and models (database schema).
4. **Clean Code Practices**: Using controllers improves readability, scalability, and maintainability in backend projects.

---

## 16-Sep-25

### Tasks Completed
1. Completed Notes Controller with full CRUD operations:
   - `getAllNotes` → Fetch all notes (sorted by `createdAt` descending).
   - `getNoteById` → Fetch a single note by its ID.
   - `createNote` → Add new note to database.
   - `updateNote` → Update existing note by ID.
   - `deleteNote` → Delete note by ID.
2. Implemented ID validation using `mongoose.Types.ObjectId.isValid()` to handle invalid IDs gracefully.
3. Added proper status codes for all cases (200, 201, 404, 500).
4. Successfully tested all routes (GET, POST, PUT, DELETE) on Postman.
5. Learned how to ignore unused parameters in route handlers using `_` (underscore).

### Concepts Learned
1. **Async/Await & Promises**: Why `await` is needed for database operations.
2. **Mongoose Methods**:
   - `find()` → Fetch all  
   - `findById()` → Fetch single  
   - `findByIdAndUpdate()` → Update  
   - `findByIdAndDelete()` → Delete
3. **Sorting with MongoDB**: `.sort({createdAt: -1})` for newest first.
4. **Error Handling**: Returning correct HTTP codes (404 for not found, 500 for server error).
5. **Code Modularity**: Clean separation between model, controller, and routes for maintainability.

---

## 19-Sep-25

### Tasks Completed
1. Learned about **Middleware in Express**:
   - Logging middleware for requests: `app.use((req,res,next) => {...})`
   - Understanding `next()` → passes control to the next middleware/route.
2. Explored **Parsing JSON** in Express using `express.json()` middleware.
3. Studied **Rate Limiting**:
   - Installed and configured Upstash Redis for cloud-based storage.
   - Created a **rate limiter middleware** using `@upstash/ratelimit` and `Redis.fromEnv()`.
   - Set **sliding window limit**: e.g., 10 requests per 20 seconds.
   - Tested the middleware; Redis shows counters like “5” for requests made.
4. Debugged **CommonJS/ESM import issues**:
   - Learned that `@upstash/ratelimit` is CommonJS → must import as:
     ```js
     import pkg from "@upstash/ratelimit";
     const { RateLimit } = pkg;
     ```
5. Configured **dotenv properly** to load `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
6. Created fully working **rate limiter middleware**:
   - Blocks requests exceeding the limit.
   - Returns `429 Too Many Requests` with proper JSON message.
7. Verified that **Redis counts requests** in real-time in Upstash dashboard.
8. Learned the flow:
   - Client request → RateLimiter middleware → Redis stores count → Allowed/Blocked → Next middleware/route.

### Concepts Learned
1. **Middleware in Express**: Logging, authentication, rate limiting.
2. **`next()` function**: Passes control to next middleware or route.
3. **Rate Limiting Algorithms**: Sliding window and its implementation with Redis.
4. **Redis basics**:
   - Fast in-memory database.
   - Stores request counters for rate limiting.
   - Upstash → cloud-hosted Redis, accessed via REST API.
5. **Environment Variables for secrets**: `.env` file usage for Redis URL and token.
6. **Debugging CommonJS/ESM imports** in Node.js.


## 23-Sep-25

# Notes - 23-Sep-25

## Tasks Completed
1. Created a React project using Vite and set up the development environment.
2. Installed and configured Tailwind CSS for styling.
3. Installed DaisyUI and applied it for pre-built, themed UI components.
4. Set up React Router with `BrowserRouter` and created pages: `HomePage`, `CreatePage`, `NoteDetailPage`.
5. Installed React Hot Toast and configured it globally to show notifications in all components.
6. Built the basic frontend structure, styled pages, and verified routing and notifications.

---

## Personal Notes
- DaisyUI is fast, easy, and visually appealing compared to plain Tailwind.
- Vite provides a super-fast development server and optimized builds.
- React Hot Toast works globally when added in `main.jsx`.
- Routing and component structure are clean and modular.
- Loved using DaisyUI themes; pink/cute UI design achieved.

---

## Concepts Learned

1. **React Project Structure**  
   - `main.jsx` → Entry point with global providers.  
   - `App.jsx` → Main UI container.  
   - `pages/` → Individual page components.  
   - `components/` → Reusable components.  
   - `assets/` → Images, fonts, icons.  

2. **Tailwind CSS + DaisyUI**  
   - Tailwind → Utility-first CSS framework.  
   - DaisyUI → Pre-built themed components for faster styling.  

3. **React Router**  
   - `BrowserRouter` wraps the app for SPA navigation.  
   - `<Route>` renders pages without full reloads.  

4. **React Hot Toast**  
   - Provides global notifications across all components.  
   - Easy to trigger toast messages from any child component.



## 20-Oct-2025

### Tasks Completed

1. **CORS Integration**
   - Added the `cors` package and middleware to the Express backend to allow requests from the React frontend.

2. **Frontend Data Fetching**
   - Updated `HomePage.jsx` to fetch notes from the backend API using `axios` and `useEffect`.
   - Improved state management for notes and the loading state to ensure a smoother and more responsive user experience.


   
