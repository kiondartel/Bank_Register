import styled from "styled-components";
import user from "../../image/user.jpg";
export const Container = styled.div`
  height: 150px;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  button {
    min-height: 50px;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    background: crimson;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 0 1rem;
    border: none;
    margin-right: 1rem;
  }

  h2 {
    color: #fff;
    margin: 0.5rem 4.5rem 0 0;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 4rem;
`;

export const User = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1.5rem;
`;
