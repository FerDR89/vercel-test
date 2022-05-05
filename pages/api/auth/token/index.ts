import { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

function postToken(req, res) {
  const { email, codigo } = req.body;
  res.status(200).json({
    body: req.body,
    query: req.query,
    message: `Hice un POST en auth/token, recibì un email: ${email} y un codigo:${codigo}`,
  });
}

export default function authToken(req: NextApiRequest, res: NextApiResponse) {
  methods({
    post: postToken(req, res),
  });
}
