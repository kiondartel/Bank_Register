import React, { useEffect, useRef } from "react";
import * as Styles from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <Styles.Container ref={ref} onSubmit={handleSubmit}>
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
};

export default Form;
