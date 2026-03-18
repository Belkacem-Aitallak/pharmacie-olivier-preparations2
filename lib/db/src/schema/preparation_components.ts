import { pgTable, serial, integer, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { preparationsTable } from "./preparations";
import { componentsTable } from "./components";

export const preparationComponentsTable = pgTable("preparation_components", {
  id: serial("id").primaryKey(),
  preparationId: integer("preparation_id").notNull().references(() => preparationsTable.id, { onDelete: "cascade" }),
  componentId: integer("component_id").notNull().references(() => componentsTable.id),
  quantity: numeric("quantity", { precision: 10, scale: 3 }).notNull(),
  componentTotal: numeric("component_total", { precision: 10, scale: 2 }).notNull(),
});

export const insertPreparationComponentSchema = createInsertSchema(preparationComponentsTable).omit({ id: true });
export type InsertPreparationComponent = z.infer<typeof insertPreparationComponentSchema>;
export type PreparationComponent = typeof preparationComponentsTable.$inferSelect;
