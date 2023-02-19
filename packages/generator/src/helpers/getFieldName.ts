import { DMMF } from "@prisma/generator-helper";

export function getFieldName(field: DMMF.Field): string {
  return field.name
}