import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alex Keth</h2>
        <p><a href="mailto:alexketh@gmail.com">alexketh@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alex, a Computer Science graduate
        from <a href="https://catalog.csus.edu/colleges/engineering-computer-science/computer-science/bs-in-computer-science/">California State University, Sacramento (CSUS)</a>.
        I bring a wealth of experience as a former
        Software Engineer at <a href="https://www.carnegiehighered.com/fire-engine-red-student-search/">Fire Engine RED</a>,
        where I specialized in front-end development.
        My commitment to excellence extends to all aspects
        of the software stack, showcasing a versatile skill
        set and a passion for delivering impactful solutions.
        Explore my portfolio to discover more about my professional
        journey and proficiency in software development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex Keth <Link to="/">https://alexketh.github.io/personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
