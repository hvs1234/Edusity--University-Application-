import React from "react";
import Navbar from "./Components/Navbar";
import Program from "./Components/Program";
import ProgramData from "./APIs/ProgramAPI";
import about_img from "./assets/about-img.webp";
import Campus from "./Components/Campus";
import CampusData from "./APIs/CampusAPI";
import Contact from "./Components/Contact";

const Home = () => {
  // APIs Data
  //---------------------------------- Program API ---------------------------------------------------//
  const [programData] = React.useState(ProgramData);

  //---------------------------------- Campus API ---------------------------------------------------//
  const [campusData] = React.useState(CampusData);

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}

      <section className="section section-hero">
        <div className="overlay"></div>
        <header className={`header ${isActive ? "active":""}`}>
          <div className="logo">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i>&nbsp; Edusity
            </h2>
          </div>
          <Navbar />
          <div className="mobile-navbar-btn" onClick={toggleNavbar}>
            <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
            <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
          </div>
        </header>
        <div className="container">
          <div className="hero-content">
            <div className="hero-data">
              <h1 className="hero-heading">
                We Ensure Better Education For A Better World
              </h1>
              <p className="hero-para">
                Our-cutting-edge curriculum is designed to empower students with
                the knowledge, skills, and experiences needed to excel in the
                dynamic field of education
              </p>
              <a href="#program" className="btn hero-btn">
                Explore More&nbsp;{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}

      <Program programData={programData} />

      {/* About Section */}

      <section className="section section-about" id="about">
        <div className="container">
          <div className="about-content grid grid-two-columns">
            <div className="about-img">
              <img src={about_img} alt="about_img" />
            </div>
            <div className="about-data">
              <h3>About The University</h3>
              <h2>Nuturing Tommorow`s Leaders Today</h2>
              <p>
                Edusity, an innovative university platform, empowers learners
                with accessible education. With interactive courses, expert
                instructors, and cutting-edge resources, Edusity cultivates a
                dynamic learning environment. It`s where knowledge meets
                convenience, shaping futures one click at a time.
              </p>
              <p>
                At Edusity, students engage in diverse disciplines, from
                business to technology, fostering well-rounded expertise. The
                platform prioritizes collaboration, offering forums and virtual
                classrooms for interactive learning. With Edusity, education
                transcends boundaries, connecting learners worldwide.
              </p>
              <p>
                Edusity`s intuitive interface streamlines the learning journey,
                ensuring seamless navigation and personalized experiences. It`s
                a hub of innovation, where emerging trends and traditional
                wisdom converge, preparing learners for success in a rapidly
                evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}

      <Campus campusData={campusData} />

      {/* Contact Section */}

      <Contact />

      {/* Footer Section */}

      <section className="section-footer">
        <p>
          Copyright <i className="fa-solid fa-copyright"></i>&nbsp; Edusity.
          2024 | All right reserved
        </p>
      </section>
    </>
  );
};

export default Home;
