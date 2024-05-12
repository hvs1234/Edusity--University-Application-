// import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="section section-contact" id="contact">
        <div className="container">
          <p className="contact-para campus-para">
            Contact Us&nbsp; <i className="fa-solid fa-phone"></i>
          </p>
          <h2 className="contact-heading campus-heading">Get In Touch</h2>
          <div className="line"></div>
          <div className="contact-content home-contact grid grid-two-columns">
            <div className="contact-data">
              <h3>
                Send us a Message&nbsp; <i className="fa-solid fa-envelope"></i>
              </h3>
              <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to
                our university community.
              </p>
              <div>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i>&nbsp; Lane 3,
                  Rajpur Road Dehradun, Uttarakhand India.
                </a>
              </div>
              <div>
                <a href="tel:+9149349278">
                  <i className="fa-solid fa-phone"></i>&nbsp; +91 9149349278
                </a>
              </div>
              <div>
                <a href="mailto:3469harshsharma@gmail.com">
                  <i className="fa-solid fa-envelope"></i>&nbsp;
                  3469harshsharma@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-form-part">
              <form className="form" action="https://formspree.io/f/mgegdrao" method="POST">
                <div>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    className="input-here"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="Phone Number"
                    id="phone"
                    className="input-here"
                    placeholder="Your Phone"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <textarea
                    name="Message"
                    cols="30"
                    rows="4"
                    id="message"
                    className="input-here"
                    placeholder="Your Message"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    name="submit"
                    value={"Contact Now"}
                    className="btn submit-btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
