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
      <p>Hi, I&apos;m Alex. I am a CSUS.
        I am a <a href="https://catalog.csus.edu/colleges/engineering-computer-science/computer-science/bs-in-computer-science/">CSUS Computer Science</a> Graduate.
        Previously, I was a Software Enginner at <a href="https://www.carnegiehighered.com/fire-engine-red-student-search/">Fire Engine RED</a>.
        My focus is primarily in front end development,
        but I am open to develop in any part of the stack.
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
