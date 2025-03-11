import React from "react";
import Calculator from "../components/Calculator";
function ProjectsPage(){
  return (
    <div>
      <h1>My Projects</h1>
            <section>
                <h3>myBookBag — Web Application for Book Tracking</h3>
                <p>Built a mobile-first book tracking web app integrating <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Google Books API</strong>.</p>
            </section>
            <section>
                <h3>Movie & Series Review Platform</h3>
                <p>Developed a movie review platform with search and personal collection features using <strong>TMDB API</strong> and <strong>MongoDB</strong>.</p>
            </section>
            <section>
                <h3>Stock Trading Simulation App</h3>
                <p>Built a stock trading app displaying financial metrics using mock data endpoints and the <strong>FastTrack API</strong>.</p>
            </section>
            <section>
                <h3>Time and Weather App</h3>
                <p>Built a mobile-first time and weather app using <strong>TypeScript</strong> and data from <strong>OpenWeatherMap API</strong>.</p>
            </section>
            <section>
                <h3>TicketMeister — Mobile Web Application</h3>
                <p>Developed a ticket-purchasing platform with multilingual support using <strong>JSON files</strong> and <strong>Node.js</strong>.</p>
            </section>
            <section>
                <h3>Personal Expense Tracker</h3>
                <p>Created a full-stack expense tracker with backend functionality using <strong>PHP</strong> and <strong>Node.js</strong>.</p>
            </section>
            <section>
                <h3>The Wedding Planner App</h3>
                <p>Built a wedding planning app with features like budget tracking, guest lists, and menu planning.</p>
            </section>
            <section>
                <h3>The 50 at 21 App</h3>
                <p>Designed a time-travel messaging app where future messages are scheduled to be sent back in time to the user's 21-year-old self.</p>
            </section>
      <Calculator />
    </div>
  );
};

export default ProjectsPage;
