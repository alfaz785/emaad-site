import React from "react";

const TouchGoogle = () => {
  return (
    <>
      <div className="mt_100">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4863769229464!2d72.96979997434856!3d23.598600990515997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cd0d9275a8c19%3A0x43e7bb3deaba5e4f!2sHimatnagar%2C%20Gujarat%20383120!5e0!3m2!1sen!2sin!4v1629134146321!5m2!1sen!2sin"
              width="1200"
              height="625"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchGoogle;
