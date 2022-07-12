import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;

  button {
    background-color: #0CA06A;
    color: white;
    transition: all 200ms ease-in;
  }

  button:hover {
    background-color: #20D090;
  }
`;

export const Title = styled.h2`
font-style: italic;
font-size: 25px;
font-weight: 400;
color: white;
margin-bottom: 10px;
`;
