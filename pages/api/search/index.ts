import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

function search(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    query: req.query,
    message: `Esta es mi query` + req.query,
  });
}

export default methods({
  get: search,
});
