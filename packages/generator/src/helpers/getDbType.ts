import { DMMF } from "@prisma/generator-helper";

export function getDbType(field: DMMF.Field): String {
  if (field.type === "String") return 'string';
  if (field.type === "DateTime") return 'datetime';
  if (field.type === "JSON") return 'json';
  if (field.type === "Bytes") return 'binary';
  if (field.type === "Boolean") return 'boolean';
  if (field.type === "int") return 'integer';
  if (field.type === "BigInt") return 'bigInteger';
  if (field.type === "Float") return 'float';
  if (field.type === "Decimal") return 'decimal';

  // TODO: handle foreign ids from field relations

  return 'string';
}