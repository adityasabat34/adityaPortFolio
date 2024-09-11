// Projects.jsx
import React from 'react';
import Card from './Cards';
import ecomImage from '../assets/Ecom.jpg';

const Projects = () => {
  // Array of project details
  const projectDetails = [
    {
      image: ecomImage,
      title: 'E-commerce App - ( GenZ-Store )',
      description:
        'Developed a full-featured e-commerce app using the MERN stack with features like authentication, product management, and a shopping cart.',
      demoLink: 'https://genzstore-ciyq.onrender.com',
      githubLink: 'https://github.com/adityasabat34/ProjectRepo',
    },
    {
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Personal Portfolio',
      description:
        'Built a responsive personal portfolio using React and Tailwind CSS, showcasing my projects and skills.',

      githubLink: 'https://github.com/username/portfolio',
    },
    {
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Personal Portfolio',
      description:
        'Built a responsive personal portfolio using React and Tailwind CSS, showcasing my projects and skills.',

      githubLink: 'https://github.com/username/portfolio',
    },
  ];

  return (
    <div className="flex flex-wrap justify-evenly p-4">
      {projectDetails.map((project, index) => (
        <Card
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;
