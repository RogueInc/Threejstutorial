import Contact from "./components/Contact"
import Works from "./components/Works"
import Hero from "./components/Hero"
import Who from "./components/Who"
import styled from "styled-components"
import Test from "./components/Test"

const Container = styled.div`
height:100vh;
// background-color:purple;
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
color:#fff;
background:url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display:none;
}
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      {/* <Test/> */}
    </Container>
  )
}

export default App
