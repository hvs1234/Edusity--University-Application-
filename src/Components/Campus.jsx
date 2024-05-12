import React from "react";
import PropTypes from "prop-types";

const Campus = ({ campusData }) => {
  const [noOfData, setnoOfData] = React.useState(4);
  const slice = campusData.slice(0, noOfData);

  const loadMore = () => {
    setnoOfData(noOfData * 4);
  };

  const loadLess = () => {
    setnoOfData(4);
  };
  return (
    <>
      <section className="section section-campus" id="campus">
        <div className="container">
          <p className="campus-para">
            Gallery&nbsp; <i className="fa-brands fa-envira"></i>
          </p>
          <h2 className="campus-heading">Campus Photos</h2>
          <div className="campus-boxes grid grid-four-columns">
            {slice.map((curele) => {
              return (
                <div className="campus-box" key={curele.id}>
                  <img src={curele.img} alt="img" />
                </div>
              );
            })}
          </div>
          {noOfData <= 4 && (
            <button className="btn load-btn" onClick={loadMore}>
              Show More&nbsp; <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          )}
          {noOfData > 4 && (
            <button className="btn load-btn" onClick={loadLess}>
              Show Less&nbsp; <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          )}
        </div>
      </section>
    </>
  );
};

Campus.propTypes = {
  campusData: PropTypes.array.isRequired,
};

export default Campus;
