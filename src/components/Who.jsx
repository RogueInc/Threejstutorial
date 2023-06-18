import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  // background-color:red;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  // background-color:red;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width:768px){
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 75px;

  @media only screen and (max-width:768px){
     font-size: 60px;
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
  flex: 1;
  position: relative;

  @media only screen and (max-width:768px){
     align-items: center;
     text-align: center;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov:25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <Whatwedo>
            <Line src="./img/line.png"></Line>
            <Subtext>Who we are</Subtext>
          </Whatwedo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts
          </Desc>
          <Button>Learn More</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
