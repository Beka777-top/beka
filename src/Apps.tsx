import React, { useState, useEffect } from 'react';

const App = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true); // State for header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State for last scroll position

  // Header hide/show logic based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHeaderVisible(false); // Scroll down -> Hide header
      } else {
        setHeaderVisible(true); // Scroll up -> Show header
      }
      setLastScrollY(window.scrollY); // Save the last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [lastScrollY]);

  // Smooth scroll for internal links
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
    }
  };

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={{ ...styles.header, top: isHeaderVisible ? 0 : '-100px' }}>
        <nav style={styles.nav}>
          <a href="#landing" onClick={() => handleScroll('landing')} style={styles.navLink}>
            Home
          </a>
          <a href="#projects" onClick={() => handleScroll('projects')} style={styles.navLink}>
            Projects
          </a>
          <a href="#contact" onClick={() => handleScroll('contact')} style={styles.navLink}>
            Contact
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Landing Section */}
      <section id="landing" style={styles.landing}>
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          style={styles.avatar}
        />
        <h1 style={styles.name}>John Doe</h1>
        <p style={styles.bio}>
          Hi, I'm John! I'm a web developer passionate about building amazing user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projects}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectGrid}>
          <div style={styles.projectCard}>
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Project 3</h3>
            <p>Description of Project 3.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Project 4</h3>
            <p>Description of Project 4.</p>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <form style={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.inputField}
            required
          />
          <textarea
            placeholder="Your Message"
            style={{ ...styles.inputField, height: '100px' }}
            required
          />
          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};


// Styles
const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333',
      padding: '10px 0',
      transition: 'top 0.3s',
      zIndex: 1000,
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
    },
    landing: {
      paddingTop: '100px',
      paddingBottom: '50px',
      backgroundColor: '#fff',
    },
    avatar: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
    },
    name: {
      fontSize: '36px',
      margin: '10px 0',
    },
    bio: {
      fontSize: '18px',
      color: '#666',
    },
    projects: {
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
    },
    sectionTitle: {
      fontSize: '32px',
      marginBottom: '20px',
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    projectCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    contact: {
      padding: '50px 20px',
      backgroundColor: '#fff',
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '400px',
      margin: '0 auto',
    },
    inputField: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    submitButton: {
      padding: '10px',
      fontSize: '18px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  
  export default App;
  