import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const buttonRouter = createTRPCRouter({
  press: protectedProcedure
    .input(z.object({ dryckid: z.string() }))
    .mutation(async ({input: { dryckid}, ctx}) => {
      ctx.prisma.dryck.update({
        where: { ctx.auth?.userId},
        data: {}
      })
    })
  });
