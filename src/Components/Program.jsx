// import React from 'react'
import PropTypes from "prop-types"

const Program = ({ programData }) => {
  return (
    <>
      <section className="section section-program" id="program">
        <div className="container">
          <p className="program-para">
            Our Program&nbsp; <i className="fa-solid fa-user-graduate"></i>
          </p>
          <h2 className="program-heading">What We Offer</h2>
          <div className="program-boxes grid grid-three-columns">
            {programData.map((curele) => {
              return (
                <div className="program-box" key={curele.id}>
                  <img src={curele.img} alt="img1" />
                  <div className="program-overlay">
                    <i className={curele.icon}></i>
                    <h3>{curele.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Program.propTypes = {
  programData: PropTypes.array.isRequired,
};

export default Program;
