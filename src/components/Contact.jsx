import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  // background-color:#53b28a;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width:768px){
     justify-content:center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width:768px){
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 20px;
  background-color: lightgray;
  border: none;
  border-radius: 2px;
`;

const Button = styled.button`
  background-color: #f8798e;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width:768px){
     display:none;
  }
`;
const handlesubmit=e=>{
  e.preventDefault();
}
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handlesubmit}>
            <Title>Contact us</Title>
            <Input placeholder="name"></Input>
            <Input placeholder="email"></Input>
            <Textarea placeholder="write your message" rows={10} />
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <Map></Map>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
