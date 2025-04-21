import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <main className="min-h-screen pb-40 text-white">
      <div className="flex flex-col justify-center items-center py-20 gap-4">
        <h1 className="text-4xl">My Recent Works</h1>
        <p>Here are a few projects I have worked on recently</p>
      </div>
      <div className="flex flex-wrap justify-center gap-16 px-4">
        {/* Project 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="../expense.png"
            alt="Project 1"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Expenss Tracker</h2>
          <p className="text-gray-700">
            A simple and responsive Expense Tracker app to manage income,
            expenses, and taxes. Includes dynamic balance updates, charts for
            visualization, and Razorpay integration for payments.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="https://expense-tracker-gilt-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >


              <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
                View
              </button>
            </a>

            <a href="https://github.com/justin1045/Expense-Tracker.git" target="_blank">

            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>


            </a>

            
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="../pokemon.png"
            alt="Project 2"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Pokemon API</h2>
          <p className="text-gray-700">
          A simple Pokémon-themed app built with HTML, CSS, and JavaScript that fetches data from the PokéAPI to display different Pokémon with their images and details.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://pokemon-project-vert.vercel.app/" target="_blank">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              View
            </button>
            </a>
            <a href="https://github.com/justin1045/Pokemon-Project.git" target="_blank">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="../photo.png"
            alt="Project 3"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Image Searcher</h2>
          <p className="text-gray-700">
          The Image Searcher is a simple and elegant web application that allows users to search for images using a keyword. It fetches high-quality images from a public API (like the Unsplash API) and displays them in a clean, responsive gallery layout.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://image-searcher-plum.vercel.app/" target="_blank">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              View
            </button>
            </a>
            
            <a href="https://github.com/justin1045/image-searcher.git" target="_blank">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>
            </a>
            
          </div>
        </div>
        {/* Project 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="../study.png"
            alt="Project 4"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Study Planner</h2>
          <p className="text-gray-700">
          The Study Planner is a productivity-focused web app designed to help students plan, organize, and track their study sessions efficiently. Built using React for interactivity and Tailwind CSS for sleek styling, the app offers a simple, clean, and responsive user interface.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://study-tracker-phi.vercel.app/" target="_blank">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              View
            </button>
            </a>
            
            <a href="https://github.com/justin1045/react_classwork_5" target="_blank">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>
            </a>
            
          </div>
        </div>
        {/* Project 5 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="../infinite.png"
            alt="Project 5"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Infinite Scrolling</h2>
          <p className="text-gray-700">
          The Infinite Scrolling Image Gallery is a sleek web app that continuously loads and displays images as the user scrolls down the page — eliminating the need for traditional pagination. It’s built using HTML, CSS, and JavaScript, with images fetched dynamically from the Unsplash API.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://infinite-scrolling-six-cyan.vercel.app/" target="_blank">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              View
            </button>
            </a>
            
            <a href="https://github.com/justin1045/infinite-scrolling" target="_blank">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>
            </a>
            
          </div>
        </div>
        {/* Project 6 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-lg shadow-[0_12px_24px_rgba(128,0,128,0.8)] transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(128,0,128,0.9)] transition-all duration-300">
          <img
            src="phone.png"
            alt="Project 6"
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">Mobile Search App</h2>
          <p className="text-gray-700">
          The Mobile Search App is a clean and responsive web application that allows users to search for mobile phones using a public API. Users can enter a mobile phone name or brand, and the app fetches matching results in real-time, displaying details like the model, brand, image, and specs.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://mobile-searching.vercel.app/" target="_blank">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
              View
            </button>
            </a>
            
            <a href="https://github.com/justin1045/mobile-searching" target="_blank">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer">
              GitHub
            </button>
            </a>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
