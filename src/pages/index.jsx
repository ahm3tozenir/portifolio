import { styled } from "styled-components"
import Hero from '../components/hero';
import Contact from "../components/contact"

const Container = styled.div`
  height: 100vh;
  background: url('./img/bg.jpeg');
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function Index() {
  return (
    <Container>
        <Hero/>
        <Contact/>
    </Container>
  )
}

export default Index