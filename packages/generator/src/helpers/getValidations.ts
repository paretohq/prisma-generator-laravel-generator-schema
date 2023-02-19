import { DMMF } from "@prisma/generator-helper";
import { logger } from "@prisma/sdk";
import { getDocumentationRules } from "./getDocumentationRules";

export type Rules = {
  [key: string]: Array<string>
}

function stringifyRule([key, value]: [string, Array<string>]): string {
  let result = key;
  if (value[0]) result += `:${value.join(',')}`
  return result;
}

export function getValidations(field: DMMF.Field): string {
  let rules: Rules = {};

  const [override, documentation_rules] = getDocumentationRules(field.documentation);

  if (override) return Object.entries(documentation_rules).map(stringifyRule).join("|")

  if (field.isRequired) rules['required'] = [];

  if (field.type === "String") rules['string'] = []

  if (field.type === "Int" || field.type === "BigInt") rules['integer'] = []

  if (field.type === "Float" || field.type === "Decimal") rules['decimal'] = []

  if (field.type === "Boolean") rules['boolean'] = []

  if (field.name === "email") rules['email'] = []

  if (field.name === "password") rules['min'] = ['8']

  // TODO: option in relationship fields to add exists rule

  if (field.documentation)
    rules = {
      ...rules,
      ...documentation_rules
    };

  return Object.entries(rules).map(stringifyRule).join("|")
}