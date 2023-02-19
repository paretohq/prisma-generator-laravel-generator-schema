import { DMMF } from "@prisma/generator-helper";

export function isSearchable(field: DMMF.Field): boolean {
  return false;
}