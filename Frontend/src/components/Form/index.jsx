import React, { useRef } from "react";
import * as Styles from "./styles";

function Form({ onEdit }) {
  const ref = useRef();
  return (
    <Styles.Container ref={ref}>
      <Styles.InputArea>
        <label>Nome:</label>
        <input name="nome" />
      </Styles.InputArea>
      <Styles.InputArea>
        <label>Email:</label>
        <input name="email" type="email" />
      </Styles.InputArea>
      <Styles.InputArea>
        <label>Telefone:</label>
        <input name="fone" />
      </Styles.InputArea>
      <Styles.InputArea>
        <label>Data de Nascimento:</label>
        <input name="data_nascimento" type="date" />
      </Styles.InputArea>
      <button type="submit">Salvar</button>
    </Styles.Container>
  );
}

export default Form;
