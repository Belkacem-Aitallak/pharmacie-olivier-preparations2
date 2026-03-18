import { pgTable, serial, text, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const componentsTable = pgTable("components", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  unitType: text("unit_type").notNull(),
  pricePerUnit: numeric("price_per_unit", { precision: 10, scale: 2 }).notNull(),
});

export const insertComponentSchema = createInsertSchema(componentsTable).omit({ id: true });
export type InsertComponent = z.infer<typeof insertComponentSchema>;
export type Component = typeof componentsTable.$inferSelect;
