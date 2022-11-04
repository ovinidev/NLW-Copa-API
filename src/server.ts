import Fastify from "fastify";
import cors from "@fastify/cors";
import { z } from "zod";
import createPollController from "./models/pools/useCases/createPool";
import findPoolsController from "./models/pools/useCases/findPools";
import { prisma } from "./services/prismaClient";

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
  const users = await prisma.user.findMany();
  const usersCounter = await prisma.user.count();

  return res.status(200).send({ users, usersCounter });
});

fastify.post("/users", async (req, res) => {
  const createUsersBody = z.object({
    name: z.string(),
    email: z.string(),
  });

  const { name, email } = createUsersBody.parse(req.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.status(201).send({ message: "User created" });
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
