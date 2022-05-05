export default function getProduct(request, response) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    message: "Estoy desde la ruta /api/products/:id",
  });
}
