import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "./Text";
import { motion } from "framer-motion";

// const lenaEmail = "lenavumc@gmail.com";

const Form = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [placement, setPlacement] = useState("");
  const [size, setSize] = useState("");
  const [pinterestLink, setPinterestLink] = useState("");
  const [file, setFile] = useState<FileList | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
    setFile(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("to", "jkow95@gmail.com"); //update with lena email
    formData.append("subject", `Tattoo Consultation for ${name}`);
    formData.append(
      "text",
      `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Description: ${description};
      Size: ${size};
      Placement: ${placement};
      Pinterst Link: ${pinterestLink}
      `
    );

    if (file) {
      Array.from(file).forEach((fileItem) => {
        formData.append("attachments", fileItem);
      });
    }

    const API_BASE = process.env.NEXT_PUBLIC_EMAILER_API_URL;
    const deployedAPI = `${API_BASE}/send-email`;

    const response = await fetch(deployedAPI, {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 8000);
    }
    resetState();
    setIsLoading(false);
  };

  useEffect(() => {
    if (!error) return;
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  const isButtonDisabled = !Boolean(
    name && email && phone && size && description && placement && file
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
          placeholder="Image Reference Link"
          value={pinterestLink}
          onChange={handlePinterestLink}
        />
        {error ? <div>{error}</div> : null}

        <label htmlFor="fileInput">
          Upload Tattoo Area or References (5 max){" "}
        </label>
        <Input
          name="attachments"
          type="file"
          accept="image/*"
          id="fileInput"
          multiple
          required
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 5) {
              setError("You can only upload up to 5 files.");
              return;
            }
            setFile(files);
          }}
        />

        <Button onClick={handleSubmit} disabled={isButtonDisabled || isLoading}>
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              style={{
                border: "2px solid white",
                borderTop: "2px solid transparent",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                margin: "0 auto",
              }}
            />
          ) : (
            "Send Email"
          )}
        </Button>
      </FormWrapper>
      <Toast
        initial={{ x: "100vw" }}
        animate={{ x: showToast ? 0 : "100vw" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Success! I&apos;ll reach out shortly
      </Toast>
    </Container>
  );
};

export default Form;

const Toast = styled(motion.div)`
  border: 1px solid var(--success);
  border-radius: 10px;
  background: var(--success);
  position: absolute;
  top: 5rem;
  right: 0;
  padding: 1rem;

  color: white;
  font-weight: 600;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;

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
