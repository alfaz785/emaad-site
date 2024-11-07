import React from "react";
import starImg from "../../assets/images/ul-star.svg";
import Image from "next/image";

const Amendments = () => {
  return (
    <>
      <div className="amendments-section mt_80">
        <div className="container">
          <div className="amendments-title d-flex align-items-center">
            <Image src={starImg} alt="Delivery Icon" className="section-icon" />
            <h3 className="mb-0">Amendments</h3>
          </div>
          <p className="mb-0 mt_25">
            Emaad Infotech® reserves the right to amend this Refund Policy
            at any time. Any changes will be posted on this page and will take
            effect immediately. It is your responsibility to review this policy
            periodically to ensure you are aware of any updates.
          </p>
          <p className="mb-0 mt_30">
            Thank you for choosing Emaad Infotech®. We value your business
            and are committed to providing you with the highest level of service
            and support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Amendments;
