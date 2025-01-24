import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";

const lenaEmail = "lenavumc@gmail.com";

const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [placement, setPlacement] = useState("");
  const [size, setSize] = useState("");
  const [pinterestLink, setPinterestLink] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(value)) {
      setError("Name can only contain letters and spaces.");
      return;
    }

    setName(value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setPlacement("");
    setSize("");
    setPinterestLink("");
  };

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    const phoneRegex = /^[0-9]+$/;

    if (!phoneRegex.test(target)) {
      setError("Phone number can only contain numbers.");
      return;
    }
    setPhone(target);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handlePlacement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlacement(e.target.value);
  };

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSize(val);
  };

  const handlePinterestLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPinterestLink(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Tattoo Consulation Request: ${name}`);
    const body = encodeURIComponent(`
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Description: ${description}
        Placement: ${placement}
        Size: ${size}
        Pinterest Link: ${pinterestLink}
      `);

    const mailToLink = `mailto:${lenaEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;

    resetState();
  };

  useEffect(() => {
    if (!error) return;
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  const isButtonDisabled = !Boolean(
    name && email && phone && size && description && placement
  );

  return (
    <Container id="consultation">
      <LeftContainer>
        <Text size="xxl" as="h1">
          Lena Ink
        </Text>
        <Text as="div">
          Include links, images, or a Pinterest board for your inspiration
        </Text>
        <Text as="div" color="green" weight={800}>
          Must be 18 years of age or older
        </Text>
      </LeftContainer>

      <FormWrapper onSubmit={handleSubmit}>
        <Input
          placeholder="John Doe"
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={handleName}
        />
        <ColumnContainer>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <Input
            placeholder="Phone number"
            id="phonenumber"
            value={phone}
            onChange={handlePhoneNumber}
          />
        </ColumnContainer>

        <Input
          placeholder="Tattoo Description"
          id="description"
          value={description}
          onChange={handleDescription}
        />
        <Input
          placeholder="Tattoo Size (ie. 2x2 inches)"
          id="size"
          value={size}
          onChange={handleSize}
        />
        <Input
          placeholder="Placement (ie. forearm)"
          id="placement"
          value={placement}
          onChange={handlePlacement}
        />
        <Input
          placeholder="Pinterest Board Link"
          value={pinterestLink}
          onChange={handlePinterestLink}
        />
        {error ? <div>{error}</div> : null}

        <Button onClick={handleSubmit} disabled={isButtonDisabled}>
          Send Email
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const FormWrapper = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: black;
  padding: 0.5rem;
  margin: 1rem 0;
  border: unset;
  border-bottom: 1px solid black;
  background: white;

  &::placeholder {
    font-size: 1.5vw;

    @media screen and (max-width: 600px) {
      font-size: 5vw;
    }
  }
`;

const LeftContainer = styled.div`
  width: 50%;

  & > h1 {
    font-size: 10vw;
  }

  & > div {
    font-size: 2vw;

    &:last-of-type {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    & > div {
      font-size: 4vw;
    }
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  color: white;
  padding: 1rem;
  font-size: 16px;
  font-weight: 900;
  border-radius: 10px;
  background: black;
  cursor: pointer;

  &:disabled {
    background: grey;
  }
`;
