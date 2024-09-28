import { initTRPC } from "@trpc/server";
import { Context } from "./context"
import superjson from "superjson"

const t = initTRPC.context<Context>().create({
    transformer: superjson,
})

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

// const userAuthValidation = t.middleware(({ ctx, next }) => {})
// export const protectedProcedure = t.procedure.use(userAuthValidation)
