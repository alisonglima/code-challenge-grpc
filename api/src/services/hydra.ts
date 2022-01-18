import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

const protoObject = protoLoader.loadSync(path.resolve(__dirname, "..", "proto", "hydra.proto"));

const UsersDefinition = grpc.loadPackageDefinition(protoObject);

// @ts-ignore:next-line
const client = new UsersDefinition.UserService("localhost:3334", grpc.credentials.createInsecure());

export default client;
