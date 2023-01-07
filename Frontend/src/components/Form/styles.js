import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 5px #dc143c;
  border-radius: 5px;

  button {
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #dc143c;
    color: white;
    height: 42px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  label {
  }

  input {
    width: 140px;
    padding: 0 15px;
    border: 1px solid #555;
    border-radius: 5px;
    height: 40px;
    margin-top: 3px;
  }
`;
