import React from 'react';

const About = () => {
  const stats = [
    { value: '2+', label: 'Years building for the web' },
    { value: '10+', label: 'Projects delivered' },
  ];

  const strengths = [
    'Performance-driven development: optimize API latency and page load speed.',
    'Full-stack ownership: database architecture through responsive UI with minimal external dependencies.',
    'Security-first mindset: 5+ auth systems (OAuth 2.0, JWT, 2FA) for sensitive domains with zero breaches.',
    'Real-time systems: WebSocket platforms serving 1000+ concurrent users with sub-100ms response.',
    'Team player & problem solver: collaborate, mentor, and translate client needs into technical solutions.',
  ];

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold mb-3">A quick snapshot</p>
            <h2 className="text-4xl font-bold text-light mb-6">About Me</h2>
            <p className="text-light opacity-90 mb-6">
              I help teams turn ideas into reliable products by combining design sensitivity with backend pragmatism.
              From crafting interactive frontends to wiring scalable APIs, I enjoy owning the full lifecycle of a feature.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-light mb-4">What I bring to the table</h3>
              <ul className="space-y-3">
                {strengths.map((item, index) => (
                  <li key={index} className="flex items-start text-light opacity-90">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="card-offset p-6 mb-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Why work with me?</h3>
              <p className="text-secondary">
                I am a problem solver first. Whether you need a performance overhaul, a new feature, or an application
                from scratch, I bring the same commitment: build it right, build it fast, and build it to last.
                I am exploring full-time roles with forward-thinking teams where I can contribute to impactful SaaS and web apps.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-offset p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-secondary font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


