import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Text from './Text';

const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [placement, setPlacement] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; 
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(value)) {
      setError("Name can only contain letters and spaces.");
      return;
    }

    setName(value);
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }

    setEmail(value);
  }

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    const phoneRegex = /^[0-9]+$/;

    if (!phoneRegex.test(target)) {
      setError("Phone number can only contain numbers.");
      return;
    }
    setPhone(target);
  }

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const handlePlacement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value);
  }

  useEffect(() => {
    if(!error)return;
    setTimeout(() => {
      setError(null);
    }, 3000)
  },[error])

  return (
  <Container>
    <Text size='xxl' as='div'>Lena Ink</Text>
    <Text as='div'>Include links, images, or a Pinterest board for your inspiration</Text>
    <Text as='div' color='green'>Must be 18 years of age or older</Text>

    <FormWrapper>
      <label htmlFor='name'>Name</label>
      <Input placeholder='John Doe'type='text' id='username' name='username' value={name} onChange={handleName}/>

      <label htmlFor='email'>Email</label>
      <Input placeholder='Email' type='text' id='email' name='email' value={email} onChange={handleEmail}/>

      <label htmlFor='phonenumber'>Phone Number</label>
      <Input placeholder='phone number' id='phonenumber' value={phone} onChange={handlePhoneNumber}/>

      <label htmlFor='description'>Size + Description</label>
      <Input placeholder='2 x 2 inch floral tattoo on bicep' id='description' value={description} onChange={handleDescription}/>

      <label htmlFor='placement'>Placement</label>
      <Input placeholder='Placement'id='placement' value={placement} onChange={handlePlacement}/>

      {error? <div>{error}</div>: null}
      {/* Skin Tones */}
    </FormWrapper>
  </Container> );
}

export default Form;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
`
const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;

  label {
    margin-top: 1rem;
  }
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: black;
  border: 1px solid black;
  padding: 0.5rem;

  background: white;
  border-radius: 10px;
`