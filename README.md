# code-challenge-grpc

- 2 micro-serviços (gRPC server):
  Serviço de User (credenciais e todas as informações)
  Serviço de Purchases

- API (gRPC client):
  Express (/users, /purchases)

requisição REST:
POST api.auth0.com -> (email, name, username, password) -> 2s
express
axios.post('api.auth0.com', ...) -> JSON {}

requisição gRPC:
api.auth0.com:500121 -> createUser(email, name, username, password) -> 0.4s
express
gRPC.client.createUser(...) -> BUFF {}
