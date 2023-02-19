import { DMMF } from "@prisma/generator-helper";

export function isFillable(field: DMMF.Field): boolean {
  return true;
}