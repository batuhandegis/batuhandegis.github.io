import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              Dr. [Your Name]
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'education', 'specializations', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 rounded-md transition-colors ${
                    activeSection === item 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(30, 64, 175, 0.8)), url('https://images.unsplash.com/photo-1560306990-18fa759c8713')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white px-6">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31" 
              alt="Dr. Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Dr. [Your Full Name]
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">
            Internal Medicine & Cardiology Specialist
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated to advancing cardiovascular health through comprehensive patient care, 
            specialized expertise in blood flow dynamics, and commitment to medical excellence.
          </p>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Learn More About Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1655313719493-16ebe4906441"
                alt="Medical expertise"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate About Cardiovascular Health
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With extensive training in internal medicine and specialized expertise in cardiology, 
                I am dedicated to providing comprehensive, patient-centered care. My particular 
                interest in blood flow dynamics and cardiovascular physiology drives my commitment 
                to understanding and treating complex cardiac conditions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in combining cutting-edge medical knowledge with compassionate care, 
                ensuring that each patient receives personalized treatment tailored to their 
                unique needs and circumstances.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Senior Cardiologist</h3>
                  <p className="text-blue-600 font-medium">[Hospital/Clinic Name]</p>
                </div>
                <span className="text-gray-500 font-medium">2020 - Present</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Specialized care for patients with complex cardiovascular conditions</li>
                <li>• Advanced diagnostic procedures including cardiac catheterization and echocardiography</li>
                <li>• Research focus on blood flow dynamics and vascular health</li>
                <li>• Mentoring medical residents and fellows in cardiology</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Internal Medicine Physician</h3>
                  <p className="text-blue-600 font-medium">[Medical Center Name]</p>
                </div>
                <span className="text-gray-500 font-medium">2017 - 2020</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Comprehensive primary care for adult patients</li>
                <li>• Management of chronic conditions including diabetes and hypertension</li>
                <li>• Preventive care and health screening programs</li>
                <li>• Collaborative care with multidisciplinary teams</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Medical Resident</h3>
                  <p className="text-blue-600 font-medium">[Teaching Hospital Name]</p>
                </div>
                <span className="text-gray-500 font-medium">2014 - 2017</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Intensive training in internal medicine</li>
                <li>• Rotations in cardiology, pulmonology, and critical care</li>
                <li>• Emergency medicine and acute care experience</li>
                <li>• Published research on cardiovascular risk factors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Qualifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Medical Degree</h3>
              <p className="text-blue-600 font-medium text-lg mb-2">[Medical School Name]</p>
              <p className="text-gray-600 mb-2">Doctor of Medicine (M.D.)</p>
              <p className="text-gray-500">Graduated: [Year]</p>
              <p className="text-gray-600 mt-4">
                Magna Cum Laude, Alpha Omega Alpha Honor Society
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Residency Training</h3>
              <p className="text-blue-600 font-medium text-lg mb-2">[Hospital Name]</p>
              <p className="text-gray-600 mb-2">Internal Medicine Residency</p>
              <p className="text-gray-500">[Years]</p>
              <p className="text-gray-600 mt-4">
                Chief Resident, Outstanding Resident Award
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fellowship Training</h3>
              <p className="text-blue-600 font-medium text-lg mb-2">[Institution Name]</p>
              <p className="text-gray-600 mb-2">Cardiology Fellowship</p>
              <p className="text-gray-500">[Years]</p>
              <p className="text-gray-600 mt-4">
                Specialized in interventional cardiology and vascular medicine
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Board Certifications</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• American Board of Internal Medicine</li>
                <li>• American Board of Cardiovascular Disease</li>
                <li>• Advanced Cardiac Life Support (ACLS)</li>
                <li>• Basic Life Support (BLS)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section id="specializations" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Medical Specializations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cardiology</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive cardiac care including diagnostic testing, treatment of heart disease, 
                and preventive cardiology for optimal cardiovascular health.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Internal Medicine</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive adult healthcare focusing on prevention, diagnosis, and treatment 
                of internal diseases with emphasis on patient-centered care.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 1a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blood Flow Dynamics</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized expertise in vascular physiology, circulation disorders, and 
                advanced hemodynamic monitoring for complex cardiovascular conditions.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Clinical Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Diagnostic Procedures</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Echocardiography & Stress Testing</li>
                  <li>• Cardiac Catheterization</li>
                  <li>• Electrocardiogram (ECG/EKG) Interpretation</li>
                  <li>• Holter Monitor Analysis</li>
                  <li>• Vascular Ultrasound</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Treatment Specialties</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Coronary Artery Disease Management</li>
                  <li>• Heart Failure Treatment</li>
                  <li>• Hypertension Control</li>
                  <li>• Arrhythmia Management</li>
                  <li>• Preventive Cardiology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-blue-100 text-lg">
              Ready to discuss your cardiovascular health or explore professional opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-blue-100">
                  <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>[your.email@hospital.com]</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>[(555) 123-4567]</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>[Hospital/Clinic Address, City, State]</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Affiliations</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• American College of Cardiology</li>
                <li>• American Heart Association</li>
                <li>• American Medical Association</li>
                <li>• Society for Cardiovascular Angiography</li>
                <li>• Local Medical Society</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Dr. [Your Name]. All rights reserved. | Licensed Medical Professional</p>
        </div>
      </footer>
    </div>
  );
};

export default App;