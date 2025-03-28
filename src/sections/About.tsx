import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      'Hello! I am R Koushik varma, a Full Stack Developer passionate about DevOps and AI ML. I hold a Bachelor of Engineering from Sathyabama Institute of science and Technology.',
    experience:
      '',
  };

  const desktopText = {
    intro:
      'Hello! I am R Koushik varma, a Full Stack Developer passionate about DevOps and AI ML. With experience across a wide array of technologies, I strive to deliver scalable, cost-effective solutions. I hold a Bachelor of Technology from Sathyabama Institute of science and Technology, with a focus on Frontend development, backend development, and intelligent automation.',
    experience:
      'As a dedicated student passionate about web development, I have honed my skills through a combination of personal projects, academic coursework, and online learning. I’ve developed and deployed several full-stack web applications, utilizing technologies such as HTML, CSS, JavaScript, React, and Node.js. My projects range from simple static websites to more dynamic applications involving APIs and real-time data integration.I’ve gained practical experience by collaborating with fellow students on group projects and contributing to open-source communities. I am constantly improving my technical abilities, and I am eager to apply my skills to real-world problems, bringing fresh perspectives and a strong willingness to learn.',
  };

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Vite</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Express</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">TailwindCSS</li>

          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/koushik.jpg"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
