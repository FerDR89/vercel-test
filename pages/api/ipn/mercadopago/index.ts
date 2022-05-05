import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

function mercadoPago(req: NextApiRequest, res: NextApiResponse) {
  const { transaction_number, finished } = req.body;
  res.status(200).json({
    transaction_number,
    finished,
  });
}

export default methods({
  post: mercadoPago,
});
