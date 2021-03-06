import styled from "styled-components";
import bg1 from "../../assets/bg1.gif";

export const Main = styled.div`
  animation: fadein 15s;
  background-image: url(${bg1});
  background-color: rgb(255, 201, 14);
  background-size: 40rem;
  width: 100%;
  height: 100%;
  text-align: center;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  position: fixed;
  animation: fadeout 10s;
  opacity: 0;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Space = styled.div`
  color: red;
  font-size: 5rem;
  height: 20rem;
`;

export const Button = styled.button`
  font-size: 3rem;
  animation: buttonAnimation 0.3s infinite;
  @keyframes buttonAnimation {
    0% {
      transform: translateY(50px);
    }
    50% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(50px);
    }
  }
`;

export const Text = styled.div`
  color: black;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 10rem;
  line-height: 3rem;
  padding: 0rem 5rem;
`;

export const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  text-align: center;
`;
