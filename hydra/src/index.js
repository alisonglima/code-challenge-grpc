const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
require("dotenv").config();

const implementation = require("./implementation");

require("./database");

const protoObject = protoLoader.loadSync(path.resolve(__dirname, "proto", "hydra.proto"));

const UsersDefinition = grpc.loadPackageDefinition(protoObject);

const server = new grpc.Server();

server.addService(UsersDefinition.UserService.service, implementation);
server.bindAsync("0.0.0.0:3334", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`User service is running on port ${port}`);
    server.start();
  }
});
