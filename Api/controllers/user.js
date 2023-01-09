import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (er, data) => {
    if (er) return res.json(er);

    return res.status(200).json(data); // listagem de usuarios
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO users (`nome`, `email`, `fone``data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario criado com sucesso");
  });
};
