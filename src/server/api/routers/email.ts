import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { email } from '@/server/db/schema'

export const emailRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const ip = ctx.headers.get('x-forwarded-for')
      const recent = await ctx.db.query.email.findMany({
        limit: 10,
        orderBy: (email, { desc }) => [desc(email.createdAt)],
      })

      if (
        recent?.[0]?.createdAt?.getTime() &&
        recent?.[0]?.createdAt?.getTime() >
          new Date().getTime() - 1000
      ) {
        return
      }
      if (
        recent?.[9]?.createdAt?.getTime() &&
        recent?.[9]?.createdAt?.getTime() >
          new Date().getTime() - 15000
      ) {
        return
      }

      await ctx.db.insert(email).values({
        email: input.email,
        ip: ip,
      })
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.db.query.email.findMany()
    return res ?? null
  }),
  getRecent: publicProcedure.query(async ({ ctx }) => {
    const res = await ctx.db.query.email.findMany({
      limit: 10,
      orderBy: (email, { desc }) => [desc(email.createdAt)],
    })
    return res ?? null
  }),
})
