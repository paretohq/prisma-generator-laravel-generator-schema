import { DMMF } from "@prisma/generator-helper";

export function getDbType(field: DMMF.Field): string {
  return field.name
}