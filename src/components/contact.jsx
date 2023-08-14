import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styled } from "styled-components"




const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`

const Title = styled.h1`
  font-weight: 200;
  
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Input = styled.input`
  padding: 20px;
  background-color: #dedede;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #dedede;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #de4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  padding: 20px;  
  
`

const Right = styled.div`
  flex: 1;
  
`




function Contact() {

  const ref = useRef()
  const [success, setSuccess] = useState(null)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
  
    emailjs.sendForm('service_eh4grdu', 'template_gebd32f', ref.current, 'IQoJMjuz-pSa9EbX7')
    .then(() => {
        setSuccess(true)
    }, () => {
        setSuccess(false)
    });
  }


  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name='name' required/>
            <Input type='email' placeholder="Email" name='email' required/>
            <TextArea placeholder="Write Your Message" name='message' rows={10} required/>
            <Button type="submit">Send</Button>
            {success && 'your message has been sent.'}
          </Form>
        </Left>
        <Right>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact