import Fastify from "fastify";
import cors from "@fastify/cors";
import createPollController from "./models/pools/useCases/createPool";
import findPoolsController from "./models/pools/useCases/findPools";
import createUserController from "./models/users/useCases/createUser";
import findUsersController from "./models/users/useCases/findUsers";

const fastify = Fastify({
  logger: true,
});

fastify.get("/pools", async (req, res) => {
  return findPoolsController().handle(req, res);
});

fastify.post("/pools", async (req, res) => {
  return createPollController().handle(req, res);
});

fastify.get("/users", async (req, res) => {
  return findUsersController().handle(req, res);
});

fastify.post("/users", async (req, res) => {
  return createUserController().handle(req, res);
});

async function server() {
  await fastify.register(cors, {
    origin: true,
  });

  try {
    await fastify.listen({ port: 3333, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

server();
