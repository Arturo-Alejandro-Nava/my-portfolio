import React from 'react';
import ProjectCard from './ProjectCard'; // Make sure this component exists
import ContactForm from './ContactForm'; // Make sure this component exists

function App() {
  // --- IMPORTANT ---
  // Once you push your code to GitHub, replace 'your-username' below
  // with your actual GitHub username to make the link work!
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive portfolio built from scratch with React and styled using Tailwind CSS. It features an interactive contact form connected to EmailJS.',
      link: 'https://github.com/your-username/my-portfolio', // <-- EDIT THIS LINK LATER
    },
    {
      title: 'Future Project: Task Management App',
      description: 'An upcoming project to build a dynamic to-do list application. It will use React Hooks for state management and save tasks to the browser\'s local storage.',
      link: '#',
    },
    {
      title: 'Future Project: Live Weather App',
      description: 'I plan to build an application that fetches and displays real-time weather data from a third-party API based on user location.',
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-gray-900 text-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            [Your Name] {/* <-- EDIT THIS */}
          </div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Me / Hero Section */}
        <section id="about" className="text-center pt-16 pb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Software Developer</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            I build modern and responsive web applications using tools like React and Tailwind CSS. Welcome to my personal portfolio.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-20">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-20">
        <p>&copy; 2025 [Your Name]. All rights reserved.</p> {/* <-- EDIT THIS */}
      </footer>
    </div>
  );
}

export default App;


