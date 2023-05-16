
export const example = createTRPCRouter({
    hello: protectedProcedure.query(({ ctx }) => {
      return {
        secret: `${ctx.auth?.userId} is using a protected procedure`
      }
    })
  })