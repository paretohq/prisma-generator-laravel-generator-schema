import { DMMF } from "@prisma/generator-helper";

export function isPrimary(field: DMMF.Field): boolean {
  return field.isId;
}