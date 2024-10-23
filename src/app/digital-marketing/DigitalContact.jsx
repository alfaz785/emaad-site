import React from "react";
import clientImg from "../../assets/images/client-q.png";
import callSystemImg from "../../assets/images/call-system.png";
import Image from "next/image";

const DigitalContact = () => {
  return (
    <>
      <div className="contect-design-question">
        <div className="container">
          <div className="client-question-informaton">
            <div className="contact-client-ques d-flex align-items-center">
              <div className="client-img">
                <Image src={clientImg} alt="img" />
              </div>
              <div className="client-info">
                <p>
                  Have a question about our services or can't find what you're
                  looking for? Our dedicated team is here to help!looking for?
                  Our dedicated team is here to help!
                </p>
                <div className="-client-call-button">
                  <a href="">
                    <div className="client-contact-box">
                      <h4>CONTACT US</h4>
                    </div>
                  </a>
                  <div className="call-recoard">
                    <Image src={callSystemImg} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalContact;
