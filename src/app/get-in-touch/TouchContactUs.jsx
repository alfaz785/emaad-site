import React from "react";
import contactUsImg from "../../assets/images/contact-us-image.png";
import Image from "next/image";

const TouchContactUs = () => {
  return (
    <>
       <div
        className="position-relative get-in-touch"
        style={{ overflowX: "hidden;" }}
      >
        <div className="container">
          <div className="row align-items-xl-center mt_100">
            <div className="col-md-5">
              <Image
                src={contactUsImg}
                className="contact_image"
                alt="Contact Image"
              />
            </div>

            <div className="col-md-7">
              <form className="contact-touch-form">
                <div className="form-group">
                  {/* <!-- <label for="firstName">First Name :</label> --> */}
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label for="email">Email :</label> --> */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label for="phone">Phone :</label> --> */}
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone :"
                  />
                </div>
                <div className="form-group">
                  {/* <!-- <label for="message">Message :</label> --> */}
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
        <div className="vertical-title">CONTACT</div>
      </div>
    </>
  );
};

export default TouchContactUs;
