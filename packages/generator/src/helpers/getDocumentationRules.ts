import { Rules } from "./getValidations";

function splitRules(rules: string): Array<string> {
  const rules_string = rules.split("(")[1].split(")")[0];
  return rules_string.split("|").map(rule_string => `@rule(${rule_string})`)
}

export function getDocumentationRules(documentation: string | undefined): [boolean, Rules] {
  const ruleDefinitions: Array<string> = [];
  const attributes = documentation?.split(" ") ?? [];
  let override = false;

  for (let attribute of attributes) {
    if (attribute.startsWith("@rules")) {
      ruleDefinitions.push(...splitRules(attribute));
      override = true;
      break;
    }

    if (attribute.startsWith("@rule"))
      ruleDefinitions.push(attribute)
  }

  return [
    override,
    ruleDefinitions.reduce((result: Rules, rd) => {
      rd = rd.split("(")[1].split(")")[0];
      const [k, v] = rd.split(":");
      result[k] = [v]
      return result;
    }, {})
  ]
}