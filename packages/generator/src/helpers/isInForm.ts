import { DMMF } from "@prisma/generator-helper";

export function isInForm(field: DMMF.Field): boolean {
  if (field.name === "id") return false;

  return true;
}