import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-offset p-6 hover:scale-105 transition-transform">
      <div className="mb-4">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
            loading="lazy"
          />
        )}
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-secondary mb-4">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies?.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary text-light text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

