import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: #31302F;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 8px 8px 1px rgba(0, 0, 0, 0.33);

  input {
    background-color: #5D5C5B;
    color: white;
  }

  input::placeholder {
    color: #C1C1BC;
  }

  button {
    background-color: #0CA06A;
    color: white;
  }
`;

export const Label = styled.label`
font-style: italic;
font-size: 25px;
font-weight: 400;
color: white;
margin-bottom: 10px;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
