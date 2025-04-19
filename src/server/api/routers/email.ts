import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { email } from '@/server/db/schema'

export const emailRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        ip: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const recent = await ctx.db.query.email.findMany({
        limit: 10,
        orderBy: (email, { desc }) => [desc(email.createdAt)],
    })

      await ctx.db.insert(email).values({
        email: input.email,
        ip: input.ip,
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
