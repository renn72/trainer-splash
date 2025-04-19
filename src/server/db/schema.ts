// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm'
import { index, sqliteTable } from 'drizzle-orm/sqlite-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const email = sqliteTable('email', (d) => ({
  id: d.integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
  email: d.text(),
  ip: d.text(),
  createdAt: d
    .integer({ mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .notNull(),
}))
