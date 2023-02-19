import { DMMF } from "@prisma/generator-helper";

export function getHtmlType(field: DMMF.Field): String {
  // Infer html type from field name
  if (field.name === 'email') return 'email';
  if (field.name === 'password') return 'password';

  // Infer html type from field type
  if (field.type === "String") return 'text';
  if (field.type === "DateTime") return 'date';
  if (field.type === "JSON") return 'textarea';
  if (field.type === "Bytes") return 'file';
  if (field.type === "Boolean") return 'checkbox';
  if (
    field.type === "Int" ||
    field.type === "BigInt" ||
    field.type === "Float" ||
    field.type === "Decimal"
  ) return 'number';

  // TODO: infer type select from relationship fields

  return 'text';
}