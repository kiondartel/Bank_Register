import React from "react";
import * as Styles from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

function Grid({users}) {
  return (
    <Styles.Table>
      <Styles.Thead>
        <tr>
          <Styles.Th>Nome</Styles.Th>
          <Styles.Th>Email</Styles.Th>
          <Styles.Th onlyWeb>Fone</Styles.Th>
          <Styles.Th></Styles.Th>
          <Styles.Th></Styles.Th>
        </tr>
      </Styles.Thead>
      <Styles.Tbody>
        {users.map((item, index)) => (
          <tr key={index}>
            <td width="30%">{item.nome}</td>
            <td width="30%">{item.email}</td>
            <td width="20%" onlyWeb>{item.fone}</td>
            <td width="5%" alignCenter><FaEdit /></td>
            <td width="5%" alignCenter><FaTrash onClick={() => handleDelete(item.id)} /></td>
          </tr>
        )}
      </Styles.Tbody>
    </Styles.Table>
  );
}

export default Grid;
