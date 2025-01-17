import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="portofolio"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="lead">{message}</p>
          </div>
          <div className="col-md-7">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <a href={value.link} target="_blank">
                    <img
                      // className="d-block w-100"
                      className="img-fluid"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    </a>
                    <Carousel.Caption style={{backgroundColor: 'rgba(29, 44, 42, 0.5)',}}>
                      <h3>{value.label}</h3>
                      <p>{value.paragraph}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
