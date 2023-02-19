import { DMMF } from "@prisma/generator-helper";

export function isSearchable(field: DMMF.Field): boolean {
  if (
    field.name === "name" ||
    field.name === "title" ||
    field.name === "email" ||
    field.name === "slug"
  ) return true;

  return false;
}