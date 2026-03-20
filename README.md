Project Name & Pitch:-

Search_Movie_App

Movie Search App is a full-stack web application that allows users to search for movies based on their preferences. It fetches real-time movie data from external APIs and displays results in a clean, responsive UI.
The project is built using React.js, HTML, CSS (Frontend) and Node.js + Express (Backend), following a modular and scalable architecture.

Features:
1> Search movies by name
2> View detailed movie information
3> Pagination support
4> Debounced search for performance optimization
5>  Graceful handling of missing posters ("No Image Available")
6> Loading and error states handling
7> Backend API abstraction (frontend remains decoupled)

Project Screen Shots:-
![Screenshot (8)](https://user-images.githubusercontent.com/106602128/197339711-360d8041-cf23-4557-a411-14a84d806910.png)

![Screenshot (9)](https://user-images.githubusercontent.com/106602128/197339747-ecfdb6e2-c7c1-4ae6-a219-6771aaf57028.png)

![Screenshot (10)](https://user-images.githubusercontent.com/106602128/197339777-6bd53526-e617-4ec1-82af-91cda96f5764.png)

Installation and Setup Instructions:

Installation & Setup
🔹 Prerequisites: 
Node.js installed
npm  installed

🔹 Clone the repository
git clone <repo-url>
cd <project-folder>

🔹 Frontend Setup
npm install
npm start

App will run on:  http://localhost:3000
🔹 Backend Setup
cd backend
npm install
node server.js

Backend will run on: http://localhost:4200

🔹 Environment Variables
Create a .env file in backend:
OMDB_API_KEY=your_api_key
OMDB_BASE_URL=https://www.omdbapi.com

API Endpoints
🔍 Search Movies
GET /search?searchKey=batman&page=1
🎬 Movie Details
GET /movie/:id

🧠 Approach
Designed the application by first understanding user requirements and UI flow.
Implemented backend APIs to abstract third-party API calls
Used Axios instance for cleaner and reusable API handling
Built reusable React components for scalability
Managed state using React hooks (useState, useEffect)
Implemented debouncing to reduce unnecessary API calls
Added pagination for better user experience
Handled edge cases like missing data and API failures

📁 Project Structure
backend/
  ├── config/
  ├── controllers/
  ├── routes/
  ├── utils/
  └── server.js

frontend/
  ├── components/
  ├── pages/
  ├── services/
  └── App.jsx
🔥 Improvements & Enhancements

Added loading indicators and error handling

Improved API response structure

Modularized backend (MVC pattern)

Implemented environment-based configuration

Added fallback UI for missing images

Optimized performance using debouncing

📌 Future Enhancements

⭐ Add favorites/watchlist feature

⭐ Implement infinite scrolling

⭐ Add authentication (login/signup)

⭐ Improve UI/UX (Netflix-style interface)

⭐ Add accessibility (a11y) improvements

✅ Conclusion

This project demonstrates a full-stack implementation with clean architecture, efficient API handling, and a user-friendly interface for searching and exploring movies.

👨‍💻 Author

Abhinav Giri



