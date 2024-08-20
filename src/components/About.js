import React, { forwardRef } from "react";
import "../styles/About.css";

const About = forwardRef((props, ref) => {
  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        <h2 className="section-title slide-in-left">About Us</h2>

        <div className="what-we-do">
          <div className="fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/images/writer.png`}
              alt="Interactive Textbooks"
              className="about-image"
            />
          </div>
          <div className="content slide-in-right">
            <h3>What We Do</h3>
            <p>
              At Briljante Books, we're passionate about revolutionizing
              education through our cutting-edge digital platform. We combine
              traditional learning methods with modern technology to create an
              engaging and effective educational experience.
            </p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission slide-in-left">
            <h3>Our Mission</h3>
            <p>
              To revolutionize education by providing accessible, engaging, and
              high-quality interactive textbooks that empower learners of all
              ages.
            </p>
          </div>
          <div className="vision slide-in-right">
            <h3>Our Vision</h3>
            <p>
              A world where every individual has the tools and resources to
              pursue lifelong learning and achieve their full potential.
            </p>
          </div>
        </div>

        <div className="our-approach">
          <h3 className="slide-in-left">Our Approach to Learning</h3>
          <div className="approach-grid">
            <div className="approach-item fade-in">
              <h4>Interactive Content</h4>
              <p>
                Engage with dynamic exercises, quizzes, and simulations that
                bring concepts to life.
              </p>
            </div>
            <div className="approach-item fade-in">
              <h4>Adaptive Learning</h4>
              <p>
                Experience personalized learning paths that adjust to your pace
                and understanding.
              </p>
            </div>
            <div className="approach-item fade-in">
              <h4>Multimedia Integration</h4>
              <p>
                Access videos, animations, and interactive diagrams that enhance
                comprehension.
              </p>
            </div>
            <div className="approach-item fade-in">
              <h4>Collaborative Features</h4>
              <p>
                Connect with peers and educators through integrated discussion
                forums and group projects.
              </p>
            </div>
          </div>
        </div>

        <div className="meet-our-team">
          <h3 className="slide-in-left">Meet Our Team</h3>
          <p className="fade-in">
            Get to know the brilliant minds behind Briljante Books who are
            dedicated to transforming education.
          </p>

          <div className="team-members">
            <div className="team-member slide-in-left">
              <img
                src={`${process.env.PUBLIC_URL}/images/woman.png`}
                alt="Dr. Emily Chen"
                className="member-image"
              />
              <div className="member-info">
                <h4>Dr. Emily Chen</h4>
                <p>Chief Education Officer</p>
                <p>
                  With over 15 years in educational technology, Dr. Chen leads
                  our content development strategies.
                </p>
              </div>
            </div>
            <div className="team-member slide-in-right">
              <img
                src={`${process.env.PUBLIC_URL}/images/woman.png`}
                alt="Michael Rodriguez"
                className="member-image"
              />
              <div className="member-info">
                <h4>Michael Rodriguez</h4>
                <p>Lead Developer</p>
                <p>
                  A pioneer in EdTech, Michael brings 10+ years of experience in
                  creating intuitive learning platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
