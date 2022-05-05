import { NextApiRequest, NextApiResponse } from "next";
import * as methods from "micro-method-router";

function getMe(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).send({
    message: "Estoy haciendo un GET desde el endpoint me",
  });
}

function patchMe(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    body: req.body,
    query: req.query,
    message: "Estoy haciendo un PATCH desde el endpoint me",
  });
}

export default methods({
  get: getMe,
  patch: patchMe,
});
