import { DMMF } from "@prisma/generator-helper";

export function isInIndex(field: DMMF.Field): boolean {
  if (
    field.name === "body" ||
    field.name === "summary" ||
    field.name === "details" ||
    field.name === "description"
  ) return false;

  return true;
}