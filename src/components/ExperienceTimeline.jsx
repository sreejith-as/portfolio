import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'Inmakes Infotech',
      period: 'Apr 2025 – Jul 2025',
      description: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with senior developers on full-stack projects',
        'Implemented RESTful APIs and database integrations'
      ]
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Codgray',
      period: 'Aug 2024 – Present',
      description: [
        'Delivered custom web solutions for small businesses and startups',
        'Built e-commerce platforms with payment integrations',
        'Optimized application performance, achieving 40% faster load times'
      ]
    },
    {
      title: 'Junior Software Developer',
      company: 'Soften Technologies',
      period: 'Nov 2023 – Apr 2024',
      description: [
        'Maintained and enhanced existing web applications',
        'Participated in code reviews and agile development processes',
        'Assisted in database design and optimization'
      ]
    },
    {
      title: 'BCA Degree',
      company: 'College Name',
      period: '2020 – 2023',
      description: [
        'Completed Bachelor of Computer Applications with focus on software development',
        'Gained knowledge in programming languages, databases, and web technologies',
        'Participated in various coding competitions and hackathons'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light text-center mb-12">Experience & Education</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }) => {
  const ref = useOnScreen();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center mb-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="card-offset p-6 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-primary mb-2">{experience.title}</h3>
          <p className="text-accent font-semibold mb-2">{experience.company}</p>
          <p className="text-secondary mb-4">{experience.period}</p>
          <ul className="text-secondary space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className={`mr-2 mt-1 ${isEven ? 'ml-2' : ''}`}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-4 flex justify-center">
        <div className="w-4 h-4 bg-accent rounded-full"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default ExperienceTimeline;
