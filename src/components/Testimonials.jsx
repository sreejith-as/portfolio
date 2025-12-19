import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sreejith is the kind of developer you want on your team. He doesn't just build features—he optimizes them and thinks about the bigger picture. His full-stack expertise meant we didn't need separate frontend and backend developers. He's reliable, professional, and genuinely interested in delivering quality work. Highly recommend.",
      name: 'Shafeek Muhammed',
      role: 'Founder, Codgray Technologies',
      mail: 'shafeek@codgray.com'
    },
    {
      quote: "Sreejith built a portfolio platform for my modeling business that showcases my work beautifully. He handled everything from design collaboration to deployment with professionalism and creativity. It was clear he genuinely cared about the final result.",
      name: 'Athulya C R',
      role: 'Entrepreneur & Model',
      mail: 'athulyacr8787@gmail.com'
    },
    {
      quote: "I needed a custom solution for my business, and Sreejith delivered exactly what I needed. He explained everything clearly, was patient with all my questions, and built something that works beautifully. It's been a great investment for my business.",
      name: 'Navas A M',
      role: 'Entrepreneur',
      mail: 'nmoosa3@gmail.com'
    },
    {
      quote: "Working with Sreejith was a pleasure. He built an intuitive interface that made our work easier and more efficient. He took time to understand what we were trying to accomplish and translated our needs into practical features. Responsive, professional, and genuinely interested in getting it right.",
      name: 'Diya E H',
      role: 'Research Assistant',
      mail: 'imdiyaeh@gmail.com'
    },
    {
      quote: "Sreejith is someone you can trust completely. He's detail-oriented, genuinely cares about quality, and takes security seriously. Working with him gave me peace of mind knowing that sensitive matters were in capable hands. He's professional, reliable, and someone I'd recommend without hesitation.",
      name: 'Sijo',
      role: 'Accountant',
      mail: 'sijo.misc@gmail.com'
    }
  ];

  // Duplicate testimonials for seamless infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section bg-primary">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-title">Testimonials</h2>
        
        <div className="carousel-container">
          <div className="carousel-track">
            {extendedTestimonials.map((testimonial, index) => (
              <article
                key={index}
                className="testimonial-card card-offset p-6 cursor-pointer hover:scale-105 transition-transform"
              >
                <blockquote className="quote-text">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-attribution">
                  <div className="avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="attribution-text">
                    <cite className="attribution-name">{testimonial.name}</cite>
                    <p className="attribution-role">{testimonial.role}</p>
                    <p className="attribution-mail">{testimonial.mail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;