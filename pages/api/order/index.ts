import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

function buyAProduct(request: NextApiRequest, response: NextApiResponse) {
  const { productId } = request.body;
  response.status(200).json({
    body: request.body,
    query: request.query,
    message: `Estoy haciendo un POST desde el endpoint order, este es mi productId: ${productId}`,
  });
}

export default methods({
  post: buyAProduct,
});
