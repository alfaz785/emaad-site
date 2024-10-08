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
      <div class="refund-policy-section">
        <div class="container">
          <div class="refund-policy-title">
            <h1 class="mb-0">
              <span id="policy1"> </span>
              <span class="highlight-jobs" id="policy2"></span>
            </h1>
            <p class="mb-0">
              At <span class="emaad-title">Emaad Infotech®</span>, we strive to
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
