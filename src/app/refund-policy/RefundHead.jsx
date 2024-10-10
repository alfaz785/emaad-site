"use client";

import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const RefundHead = () => {
  const partsPolicy = [
    { id: "policy1", text: "Refund " },
    { id: "policy2", text: "Policy" },
  ];
  useEffect(() => {
    MultiTypingEffect(partsPolicy, 100);
  }, []);

  return (
    <>
      <div className="refund-policy-section">
        <div className="container">
          <div className="refund-policy-title">
            <h1 className="mb-0">
              <span id="policy1"> </span>
              <span className="highlight-jobs" id="policy2"></span>
            </h1>
            <p className="mb-0">
              At <span className="emaad-title">Emaad Infotech®</span>, we strive to
              ensure our customers are fully satisfied with our services. If you
              are not entirely happy with your purchase, we are here to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundHead;
