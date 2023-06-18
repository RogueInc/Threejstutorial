import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width:768px){
      width: 100%;
  }
`;
const Container = styled.div`
  width: 1350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media only screen and (max-width:768px){
      width: 100%;
  }
`;
const Links = styled.div`
display:flex;
align-items: center;
gap:40px;


`;

const Icons = styled.div`
display:flex;
align-items: center;
gap:20px;
`;

const Logo = styled.img`
height:50px;
`;

const Icon = styled.img`
width: 20px;;
cursor: pointer;`;

const List = styled.ul`
display: flex;
gap:20px;
list-style: none;

@media only screen and (max-width:768px){
      display:none;
  }`;

const Listitem = styled.li`
cursor: pointer;`;

const Button = styled.button`
width: 100px;;
padding:10px;
background-color: #f8798e;
border-radius: 10%;
color:#fff;
border:none;
cursor: pointer;`;



const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/cat.svg" />
          <List>
            <Listitem>Home</Listitem>
            <Listitem>Studio</Listitem>
            <Listitem>Works</Listitem>
            <Listitem>Contact</Listitem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
