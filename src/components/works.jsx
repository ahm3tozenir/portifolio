import { styled } from "styled-components"

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  &::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    overflow: hidden;
    height: 0; 
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to{
          height: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`



function Works() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((e,i)=>(
            <ListItem key={i} text={e}>{e}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works