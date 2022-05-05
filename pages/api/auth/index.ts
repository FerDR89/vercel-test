import { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

function findOrCreateUser(req, res) {
  const { email } = req.body;
  res.status(200).json({
    body: req.body,
    query: req.query,
    message: `Hice un POST en auth, recibì un email: ${email} y respondo con un código`,
  });
}

export default function auth(req: NextApiRequest, res: NextApiResponse) {
  methods({
    post: findOrCreateUser(req, res),
  });
}
