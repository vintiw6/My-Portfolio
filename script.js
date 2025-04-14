// Intersection Observer for smooth section transitions
const sections = document.querySelectorAll('.section');
const skillsCategories = document.querySelectorAll('.skills-category');

const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '-50px 0px'
};

// Separate observer for skills categories with different timing
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay based on index for staggered animation
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            skillsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-20px 0px'
});

// Main sections observer
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // If this is the about section, start observing skills categories
            if (entry.target.id === 'about') {
                skillsCategories.forEach(category => {
                    skillsObserver.observe(category);
                });
            }
            
            // Only unobserve if it's not the hero section
            if (!entry.target.id.includes('hero')) {
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Start observing sections
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth scroll with performance optimization
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Debounce function for scroll performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth parallax effect for background
const parallaxElements = document.querySelectorAll('.floating-elements');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});

// Enhanced scroll-based animations with debouncing
const handleScroll = debounce(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
        
        if (isVisible) {
            section.classList.add('visible');
        }
    });
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add initial visible class to hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }
    
    // Rest of your initialization code...
    createProjectCards();
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Project data
const projects = [
    {
        title: "Dessert Haven Website",
        description: "Full-stack dessert recipe platform with user authentication and interactive features",
        technologies: [
            { name: "React", icon: "devicon-react-original colored" },
            { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
            { name: "HTML5", icon: "devicon-html5-plain colored" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored" }
        ],
        github: "https://github.com/vintiw6/Projects/tree/main/Dessert-Haven-Website",
        demo: "https://dessert-haven-website.vercel.app/"
    },
    {
        title: "Weather App",
        description: "Real-time weather forecasts with location-based data",
        technologies: [
            { name: "JavaScript", icon: "devicon-javascript-plain colored" },
            { name: "HTML5", icon: "devicon-html5-plain colored" },
            { name: "CSS3", icon: "devicon-css3-plain colored" }
        ],
        github: "https://github.com/vintiw6/Projects/tree/main/Weather-App",
        demo: "https://vintiw6-weather-app.vercel.app/"
    },
    {
        title: "Credit Card Validator",
        description: "Secure credit card validation system",
        technologies: [
            { name: "C++", icon: "devicon-cplusplus-plain colored" }
        ],
        github: "https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator"
    },
    {
        title: "Data Analysis Projects",
        description: "Data visualization and statistical analysis",
        technologies: [
            { name: "Python", icon: "devicon-python-plain colored" },
            { name: "Jupyter", icon: "devicon-jupyter-plain colored" }
        ],
        github: "https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic"
    }
];

// Create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const technologies = document.createElement('div');
        technologies.className = 'technologies';
        
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.innerHTML = `<i class="${tech.icon}"></i>`;
            technologies.appendChild(techTag);
        });
        
        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links';
        
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.target = '_blank';
        githubLink.className = 'project-link';
        githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
        
        projectLinks.appendChild(githubLink);
        
        // Only add demo link if it exists
        if (project.demo) {
            const demoLink = document.createElement('a');
            demoLink.href = project.demo;
            demoLink.target = '_blank';
            demoLink.className = 'project-link';
            demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Demo';
            projectLinks.appendChild(demoLink);
        }
        
        projectContent.appendChild(title);
        projectContent.appendChild(description);
        projectContent.appendChild(technologies);
        projectContent.appendChild(projectLinks);
        
        projectCard.appendChild(projectContent);
        projectsGrid.appendChild(projectCard);
    });
} 