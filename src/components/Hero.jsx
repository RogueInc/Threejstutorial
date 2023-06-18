import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  // background-color:red;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  // background-color:red;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 75px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Whatwedo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtext = styled.h2`
  color: #f8798e;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    width: 100vw;
  }
`;

const Button = styled.button`
  background-color: #f8798e;
  color: #fff;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5%;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: moveitbaby 3s linear infinite ease;

  @keyframes moveitbaby {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(50px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think.Make.Solve</Title>
          <Whatwedo>
            <Line src="./img/line.png"></Line>
            <Subtext>What we do</Subtext>
          </Whatwedo>
          <Desc>
            We enjoy being delightful,human-centric digital experience
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#32144a"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
