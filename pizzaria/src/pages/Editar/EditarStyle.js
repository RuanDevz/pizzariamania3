import styled, { keyframes } from "styled-components";

export const ContainerEditar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 20px;
    padding-bottom: 40px;
  }
  #back{
  position: absolute;
  left: 100px;
  top: 50px;
  font-size: 3em;
  color: #ff5b00;
  cursor: pointer;
}
`;

export const Inputsedit = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: -40px 0px;
  .input-container {
    position: relative;
  }

  .input {
    font-size: 1em;
    margin: 30px 0px;
    padding: 0.6em 1em;
    border: none;
    border-radius: 6px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    max-width: 500px;
    color: #333;

    &:hover {
      background-color: #f2f2f2;
    }

    &:focus {
      outline: none;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
      color: #999;
      font-size: 0.6em;
    }
  }

  .highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    transition: width 0.3s ease;
  }

  ${keyframes` 
    from {
      transform: scale(1);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    to {
      transform: scale(1.02);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  `}

  .input:focus {
    animation: input-focus 0.3s ease;
  }

  .button{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p#error{
    text-align: center;
    font-weight: bold;
    color: red;
  }
`;

export const Successupdatedorder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 140px;


h1{
  font-size: 1.4em;
}
img{
  width: 150px;
}
` 
