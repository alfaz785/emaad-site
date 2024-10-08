import React from "react";

const DraggableBox = () => {
  return (
    <>
      <div className="mt_100">
        <div className="draggable-boxes-main">
          <div className="container-fluid draggable-boxes">
            <div className="draggable" id="item1" draggable="true">
              <p className="mb-0">
                <span>215+</span> Projects Done
              </p>
            </div>
            <div className="draggable" id="item2" draggable="true">
              <p className="mb-0">
                <span>14+</span> Products
              </p>
            </div>
            <div className="draggable" id="item3" draggable="true">
              <p className="mb-0">
                <span>100% </span> Satisfaction
              </p>
            </div>
            <div className="draggable" id="item4" draggable="true">
              <p className="mb-0">
                <span>190+ </span>Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraggableBox;
