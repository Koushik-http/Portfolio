import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = [
    {
      image: '/projects/real-estate.png', // Corrected image path
      projectName: 'Real Estate Website',
      projectLink: 'https://real-e-state-two.vercel.app/',
      projectDescription:
        'A fully responsive real estate website that allows users to browse properties, filter listings, and get in touch with realtors.',
      projectTech: ['React', 'Node.js', 'MongoDB', 'CSS', 'Express'],
      projectExternalLinks: {
        github: 'https://github.com/Koushik-http/Real-E-state.git',
        externalLink: 'https://real-e-state-two.vercel.app/',
      },
    },
    {
      image: '/projects/event-manager.png', // Corrected image path
      projectName: 'SIST Event Manager',
      projectLink: 'https://koushik-http.github.io/eventmanager/',
      projectDescription:
        'An event management platform for SIST that enables users to organize, RSVP, and track events. Includes admin features to manage event details and attendees.(As for some security reasons the web site is not hosted on any platform, but you can check the code in the github link. and if you want to see the website activate incognito mode for the website to work)',
      projectTech: ['React', 'Node.js',"vite","CSS"],
      projectExternalLinks: {
        github: 'https://github.com/Koushik-http/eventmanager.git',
        externalLink: 'https://koushik-http.github.io/eventmanager/',
      },
    },
    {
      image: '/projects/foodSite.png', // Corrected image path
      projectName: 'Food Ordering Website',
      projectLink: 'https://food-website-beta-indol.vercel.app/',
      projectDescription:
        'A food ordering platform where users can browse menus, add items to their cart, and place orders online from local restaurants.',
      projectTech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      projectExternalLinks: {
        github: 'https://github.com/Koushik-http/Food-website.git',
        externalLink: 'https://food-website-beta-indol.vercel.app/',
      },
      {
      image: '/projects/june.png', // Corrected image path
      projectName: 'JUNE',
      projectDescription:
        'JUNE is an intelligent personal assistant designed to simplify everyday tasks through voice commands and interactive responses.',
      projectTech: ['Python'],
      projectExternalLinks: {
        github: 'https://github.com/Koushik-http/Jarvis.git',
      },
    },
    {
      image: '/projects/hotel-ease.png', // Corrected image path
      projectName: 'Hotel Booking Site',
      projectLink: 'https://hotel-ease-koushik.vercel.app',
      projectDescription:
        'A hotel booking website that allows users to search for rooms, check availability, and make reservations online.',
      projectTech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      projectExternalLinks: {
        github: 'https://github.com/Koushik-http/Hotel-ease.git',
        externalLink: 'https://hotel-ease-koushik.vercel.app',
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div
                className="project-image"
                onClick={() => window.open(projectLink, '_blank')}
              >
                <div className="project-image-overlay"></div>
                <div className="project-image-container">
                  <Image
                    src={image}
                    alt={projectName}
                    layout="fill"
                    objectFit="cover" // Ensures the image covers the container properly
                    loading="lazy"
                    quality={100}
                  />
                </div>
              </div>
              <motion.div
                className="project-info"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="project-info-title">
                  <span
                    className="cursor-pointer"
                    onClick={() => window.open(projectLink, '_blank')}
                  >
                    {projectName}
                  </span>
                </h3>
                <div className="project-info-description">
                  <p>{projectDescription}</p>
                </div>
                <ul className="project-info-tech-list">
                  {projectTech.map((tech) => (
                    <motion.li
                      className="project-info-tech-list-item"
                      key={tech}
                      whileHover={{ y: -2, color: 'var(--theme-color)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
                <ul className="project-info-links">
                  <motion.li
                    className="project-info-links-item"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={projectExternalLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-info-links-item-link"
                    >
                      <Github />
                    </Link>
                  </motion.li>
                  <motion.li
                    className="project-info-links-item"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={projectExternalLinks.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-info-links-item-link"
                    >
                      <ExternalLink />
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}

export default Projects;
