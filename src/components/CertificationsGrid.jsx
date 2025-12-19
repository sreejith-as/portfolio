import React, { useState } from 'react';
import certificationsData from '../data/seed-certifications.json';

const CertificationsGrid = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light text-center mb-12">Certificates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map(cert => (
            <div
              key={cert.id}
              className="card-offset p-6 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedCert(cert)}
            >
              <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
              <p className="text-secondary mb-4">{cert.date}</p>
              <div className="flex gap-4">
                {cert.certificateFile && (
                  <a
                    href={cert.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate
                  </a>
                )}
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedCert(null)}>
            <div className="card-offset p-8 max-w-4xl w-full mx-4 max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-primary mb-4">{selectedCert.title}</h3>
              <p className="text-accent font-semibold mb-2">{selectedCert.issuer}</p>
              <p className="text-secondary mb-4">{selectedCert.date}</p>
              <p className="text-secondary mb-6">{selectedCert.description}</p>
              {selectedCert.certificateFile && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">Certificate Preview</h4>
                  <iframe
                    src={selectedCert.certificateFile}
                    className="w-full h-96 border rounded"
                    title={`${selectedCert.title} Certificate`}
                  ></iframe>
                </div>
              )}
              {selectedCert.certificateFile && (
                <a
                  href={selectedCert.certificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-btn"
                >
                  View Full Certificate
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsGrid;
