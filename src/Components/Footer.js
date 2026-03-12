import { Link } from 'react-router-dom';
import '../Style/Footer.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-title">Fish With Legs&#8482;</span>
          <span className="footer-tagline">Step behind the bar.</span>
        </div>

        <div className="footer-links" role="navigation" aria-label="Footer navigation">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/recipes">Recipes</Link>
          <Link className="footer-link" to="/courses">Courses</Link>
        </div>

        <div className="footer-legal">
          <span>
            &copy; {year} Fish With Legs&#8482;. All rights reserved.
          </span>
          <span>
            All content, recipes, course materials, and branding are the
            intellectual property of Fish With Legs and may not be reproduced,
            distributed, or transmitted in any form without prior written permission.
          </span>
          <span>
            Fish With Legs&#8482; is a trademark of Fish With Legs.
          </span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
