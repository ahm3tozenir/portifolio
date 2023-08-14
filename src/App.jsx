import Hero from './components/Hero';
// import About from "./components/about"
// import Works from "./components/works"
import Contact from "./components/contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from "styled-components"




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
function App() {


  return (
    <Container>
      <Hero/>
      <Contact/>
    </Container>
  )
}

export default App
