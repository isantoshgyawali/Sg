import fastify from "fastify";
import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import { MainRouter } from "./src/router";
import { createTRPCContext } from "./src/context";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4001
const server = fastify({logger : false})

void server.register(cors, {
    origin: "*",
})

void server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
        router: MainRouter,
        createContext: createTRPCContext,
    }
})

const start = async () => {
    try {
        await server.listen({port, host: "0.0.0.0"});
        console.log(`tRPC server running at http://localhost:${port}`);
    } catch (err) {
        server.log.error(err);
        if (err instanceof Error) {
            console.log(err.message)
        }
        process.exit(1);
    }
};

void start()
