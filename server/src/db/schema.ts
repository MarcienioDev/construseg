import { pgTable, uuid, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core"; //  import types table

//Cols
export const todos = pgTable("todos", {
    id: uuid("id").defaultRandom().primaryKey(),
    task: varchar("task", {length: 255}).notNull(),
    description: text("description"),
    dueDate: timestamp("due_date"),
    isDone: boolean("is_done").default(false),
    doneAt: timestamp("done_at"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})