import { DMMF } from "@prisma/generator-helper";

type HtmlType = 'text' | 'email' | 'number' | 'date' | 'file' | 'password' | 'select' | 'radio' | 'checkbox' | 'textarea';

export function getHtmlType(field: DMMF.Field): HtmlType {
  return 'text';
}