import styled from "styled-components/macro";

export const Text = styled.div`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const HiddenMessage = styled.div`
  color: black;
  font-size: 1.6rem;
  font-weight: 500;
  height: 2rem;
  height: 50rem;
`;

export const Icon = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const IconNone = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0rem 2rem;
`;
