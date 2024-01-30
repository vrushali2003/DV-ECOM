import React from "react";
import styled from "styled-components";
import teachwithusbanner from "../assest/teachwithusbanner.webp";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;

  @media (min-width: 320px) and (max-width: 768px) {
    font-size: 20px;
  }
`;

const TeachWithUsBanner = () => {
  return (
    <Container className="w-100">
      <div className="row g-0">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <Img src={teachwithusbanner} alt="teachwithus" />
          <Overlay></Overlay>
          <Heading>
            <b>TEACH WITH US</b>
          </Heading>
        </div>
      </div>
    </Container>
  );
};

export default TeachWithUsBanner;
