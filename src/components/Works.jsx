import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import Webdesign from "./Webdesign";
import Productdesign from "./Productdesign";

const data = [
  "Web design",
  "Development",
  "Illustrations",
  "Product design",
  "Social media",
];

const Section = styled.div`
  height: 100vh;
  // background-color:orange;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px){
     width: 100%;
     flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width:768px){
     padding:20px;
     justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Listitem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width:768px){
     font-size: 24px;
     color: #fff;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #f8798e;
    overflow: hidden;
    width: 0;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: movetext 0.5s linear both;

      @keyframes movetext {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100vh;
`;

const Works = () => {
  const [work, setwork] = useState("Web design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <Listitem key={item} text={item} onClick={() => setwork(item)}>
                {item}
              </Listitem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web design" ? (
            <Webdesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <Productdesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
