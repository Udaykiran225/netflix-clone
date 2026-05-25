Netflix Clone 🎬

A fully responsive and modern Netflix Clone built using HTML, CSS, JavaScript, Firebase Authentication, and Tailwind CSS.
This project recreates the core UI experience of Netflix including authentication, movie browsing sections, responsive layouts, and a movie player page.

The project was created to improve frontend development skills and understand authentication systems using Firebase.

⸻

🌐 Live Features
~~~
✅ Netflix Inspired UI
✅ Responsive Design for Mobile & Desktop
✅ Firebase Authentication
✅ Google Sign-In
✅ Email & Password Login
✅ Movie Player Page
✅ Hero Banner Section
✅ Dynamic Movie Rows
✅ Modern Dark Theme UI
✅ Video Playback Support
~~~
⸻

📸 Project Preview

Home Page

* Netflix styled navigation bar
* Hero banner section
* Trending movie rows
* Responsive cards

Login Page

* Firebase Email Authentication
* Google Authentication
* Clean modern UI

Movie Player

* Video playback page
* Full-screen movie experience
* Custom movie page support

⸻

🛠️ Technologies Used
Technology

Purpose

HTML5

Structure

CSS3

Styling

JavaScript

Functionality

Tailwind CSS

Responsive UI

Firebase

Authentication

Git & GitHub

Version Control

📂 Folder Structure
~~~
Netflix Clone/
│
├── index.html
├── login.html
├── movie.html
│
├── css/
│   ├── hero.css
│   ├── login.css
│   ├── modal.css
│   ├── navbar.css
│   ├── responsive.css
│   ├── rows.css
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── config.js
│   ├── data.js
│   ├── firebase.js
│   ├── modal.js
│   └── render.js
│
├── assets/
│   ├── images/
│   └── videos/
│
└── README.md
~~~

🔥 Firebase Authentication Setup

This project uses Firebase Authentication for login functionality.

Step 1: Create Firebase Project

1. Go to Firebase Console
2. Create a new project
3. Register a Web App

⸻

Step 2: Enable Authentication

Go to:
~~~
Authentication → Sign-in Method
~~~
Enable:

* Email/Password
* Google Authentication

Step 3: Copy Firebase Config

Copy your Firebase configuration and paste it inside:
~~~
js/config.js
~~~
Example:
~~~
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};
~~~

▶️ How to Run the Project

Clone Repository
~~~
git clone https://github.com/Udaykiran225/netflix-clone.git
~~~
Open Project Folder
~~~
cd netflix-clone
~~~
Run Using Live Server

You can use:

* VS Code Live Server Extension
* XAMPP
* Any Local Server

⸻

🎥 Movie Playback

The project supports direct video playback using HTML5 video player.

Example:
~~~
<video controls autoplay>
  <source src="assets/videos/movie.mp4" type="video/mp4">
</video>
~~~
🔐 Authentication Features

Email & Password Login

* Firebase Email Authentication
* Secure login system
* User account creation

Google Authentication

* One-click Google Sign-In
* Firebase popup authentication

⸻

📱 Responsive Design

The application is fully responsive and works on:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

⸻

🎨 UI Features

* Dark Netflix Theme
* Hover Effects
* Smooth Animations
* Responsive Navbar
* Hero Banner
* Movie Cards
* Modern Buttons

⸻

🚀 Future Improvements

Planned future updates:

* TMDB API Integration
* Real Movie Database
* Search Functionality
* Watchlist Feature
* User Profiles
* Categories & Genres
* Continue Watching
* Firebase Database Integration
* Deployment on Netlify/Vercel

⸻

📚 Learning Outcomes

Through this project, I learned:

* Firebase Authentication
* Frontend Project Structuring
* Responsive Web Design
* JavaScript DOM Manipulation
* Git & GitHub Workflow
* Video Handling in HTML
* Tailwind CSS Styling

⸻

👨‍💻 Author

Uday Kiran

GitHub Profile:

Udaykiran225 GitHub Profile￼

⸻

🤝 Contribution

Contributions are welcome.

If you would like to improve this project:

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a Pull Request

⸻

⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork the repository
📢 Share with others

⸻

📄 License

This project is developed for educational and learning purposes only.

Netflix is a registered trademark of Netflix Inc.
This clone project is not intended for commercial use.

