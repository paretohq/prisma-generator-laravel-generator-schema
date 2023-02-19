import { DMMF } from '@prisma/generator-helper';
import { getDbType } from "./getDbType";
import { getFieldName } from "./getFieldName";
import { getHtmlType } from "./getHtmlType";
import { getValidations } from "./getValidations";
import { isFillable } from "./isFillable";
import { isInForm } from "./isInForm";
import { isInIndex } from "./isInIndex";
import { isInView } from "./isInView";
import { isPrimary } from "./isPrimary";
import { isSearchable } from "./isSearchable";

export const genSchemaField = (field: DMMF.Field) => ({
  name: getFieldName(field),
  dbType: getDbType(field),
  htmlType: getHtmlType(field),
  validations: getValidations(field),
  searchable: isSearchable(field),
  fillable: isFillable(field),
  primary: isPrimary(field),
  inForm: isInForm(field),
  inIndex: isInIndex(field),
  inView: isInView(field)
})