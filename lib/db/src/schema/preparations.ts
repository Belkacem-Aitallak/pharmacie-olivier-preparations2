import { pgTable, serial, text, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const preparationsTable = pgTable("preparations", {
  id: serial("id").primaryKey(),
  patientName: text("patient_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  doctorName: text("doctor_name").notNull(),
  preparatorName: text("preparator_name").notNull(),
  status: text("status").notNull().default("Ordonnance reçue"),
  note: text("note"),
  prescriptionImage: text("prescription_image"),
  totalPrice: numeric("total_price", { precision: 10, scale: 2 }).notNull().default("0"),
  dateCreated: timestamp("date_created").notNull().defaultNow(),
});

export const insertPreparationSchema = createInsertSchema(preparationsTable).omit({ id: true, dateCreated: true });
export type InsertPreparation = z.infer<typeof insertPreparationSchema>;
export type Preparation = typeof preparationsTable.$inferSelect;
