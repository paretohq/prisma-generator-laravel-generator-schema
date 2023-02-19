import { DMMF } from "@prisma/generator-helper";

export function getValidations(field: DMMF.Field): String {
  const rules = [];

  if (field.isRequired)
    rules.push("required")

  // TODO: unique rules needs access to db name of model

  if (field.type === "String")
    rules.push("string")

  if (field.type === "Float" || field.type === "Decimal")
    rules.push("decimal")

  if (field.type === "Boolean")
    rules.push("boolean")

  if (field.name === "id")
    rules.push("integer|min:1")

  if (field.name === "email")
    rules.push("email")

  if (field.name === "password")
    rules.push("min:8")

  // TODO: option in custom comment to set min,max,length rules

  // TODO: option to add url rule

  // TODO: option in relationship fields to add exists rule

  // TODO: option to override inferred rules entirely

  return rules.join("|");
}