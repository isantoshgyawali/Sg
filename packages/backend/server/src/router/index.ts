import { createTRPCRouter, publicProcedure } from "../trpc";

export const MainRouter = createTRPCRouter({
    sayHello: publicProcedure.query(() => {
        return "Hello"
    })
})

export type tRPC_Router = typeof MainRouter;
