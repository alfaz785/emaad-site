import React from "react";
import contactUsImg from "../../assets/images/contact-us-image.png";
import Image from "next/image";

const TouchContactUs = () => {
  return (
    <>
      <div className="get-in-touch" style={{ overflowX: "hidden;" }}>
        <div className="container">
          <div className="row align-items-xl-center mt_100 get-in-touch-mt">
            <div className="col-md-5 d-none d-lg-block">
              <Image
                src={contactUsImg}
                className="contact_image"
                alt="Contact Image"
              />
            </div>

            <div className="col-lg-7 col-12">
              <form className="contact-touch-form">
                <div className="form-group">
                  {/* <!-- <label htmlFor="firstName">First Name :</label> --> */}
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label htmlFor="email">Email :</label> --> */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label htmlFor="phone">Phone :</label> --> */}
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label htmlFor="message">Message :</label> --> */}
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message :"
                  ></textarea>
                </div>
                <button type="submit" className="custom-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchContactUs;
