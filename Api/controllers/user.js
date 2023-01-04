import { db } from "../db";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (er, data) => {
    if (er) return res.json(er);

    return res.status(200).json(data); // listagem de usuarios
  });
};
