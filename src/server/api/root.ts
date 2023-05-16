import { createTRPCRouter } from "~/server/api/trpc";
import { buttonRouter } from "~/server/api/routers/button";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  button: buttonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
