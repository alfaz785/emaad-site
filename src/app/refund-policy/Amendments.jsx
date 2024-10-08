import React from "react";
import starImg from "../../assets/images/ul-star.svg";
import Image from "next/image";

const Amendments = () => {
  return (
    <>
      <div class="amendments-section mt_80">
        <div class="container">
          <div class="amendments-title d-flex align-items-center">
            <Image src={starImg} alt="Delivery Icon" class="section-icon" />
            <h3 class="mb-0">Delivery of Product</h3>
          </div>
          <p class="mb-0 mt_25">
            [Your Company Name] reserves the right to amend this Refund Policy
            at any time. Any changes will be posted on this page and will take
            effect immediately. It is your responsibility to review this policy
            periodically to ensure you are aware of any updates.
          </p>
          <p class="mb-0 mt_30">
            Thank you for choosing [Your Company Name]. We value your business
            and are committed to providing you with the highest level of service
            and support.
          </p>
        </div>
      </div>
    </>
  );
};

export default Amendments;
