import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/seed-projects.json';

const ProjectsGrid = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'fullstack', 'backend', 'frontend'];

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.category === filter);
  console.log('Current filter:', filter);
  console.log('Filtered projects:', filteredProjects);

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === category
                  ? 'bg-accent text-primary'
                  : 'bg-secondary text-light hover:bg-accent hover:text-primary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
