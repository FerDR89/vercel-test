import { NextApiRequest, NextApiResponse } from "next";

export default function changeAddress(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    address: "Cambie mi direcciòn desde el endpoint address",
  });
}
