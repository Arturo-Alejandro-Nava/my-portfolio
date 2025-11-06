import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    // This is the main card container with shadow, rounded corners, and a background color.
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* "View Project" Link styled as a button */}
        <a
          href={link}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security measure for new tabs
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;