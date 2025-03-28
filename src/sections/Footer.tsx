import { useEffect, useState } from 'react';

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {

  }, []);

  return (
    <footer>
      <a
        href="https://github.com/Koushik-http"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <span className="footer-info">View on GitHub</span>
      </a>
      {githubInfo.stars !== null && (
        <span className="footer-icon">
          {/* Display stars */}
          {githubInfo.stars}
        </span>
      )}
      {githubInfo.forks !== null && (
        <span className="footer-icon">
          {/* Display forks */}
          {githubInfo.forks}
        </span>
      )}
    </footer>
  );
}

export default Footer;
