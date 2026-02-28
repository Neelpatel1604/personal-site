import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Neel patel's personal website. Studying at Sheridan College, "
      + 'Developing knowledge and experience in Cloud computing'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">ABOUT THIS SITE</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript
          </p>
        </div>
      </header>
      <div className="content">
        <p>
          Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          <Link to="/services">services</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
        <div
          className="logo-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '20px',
          }}
        >
          <div>
            <a href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/cloudpractitionerlogo.png"
                alt="Cloud Practitioner Certification"
                style={{ width: '200px', height: 'auto' }}
              />
            </a>
            <p style={{ marginTop: '8px', marginBottom: 0 }}>
              <a
                href="https://www.credly.com/badges/a1a0c75d-b2bb-4f82-b97e-a67af59589b5/linked_in?t=shv1tc"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Cloud Practitioner Certification
              </a>
            </p>
          </div>
          <div>
            <a href="https://www.credly.com/earner/earned/badge/55209ee6-f002-4d61-a842-a6ef44e9d411" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/cloud-club.png"
                alt="AWS Cloud Club Captain"
                style={{ width: '200px', height: 'auto' }}
              />
            </a>
            <p style={{ marginTop: '8px', marginBottom: 0 }}>
              <a
                href="https://www.credly.com/earner/earned/badge/55209ee6-f002-4d61-a842-a6ef44e9d411"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my AWS Cloud Club Captain badge
              </a>
            </p>
          </div>
        </div>
        <p>Source available <a href="https://github.com/Neelpatel1604/personal-site">here</a>.</p>
      </div>
    </article>
  </Main>
);

export default Index;
