import { DMMF } from '@prisma/generator-helper';
type SchemaField = {
  name: string;
  dbType: string;
  htmlType: string;
  validations: string;
  searchable: boolean;
  fillable: boolean;
  primary: boolean;
  inForm: boolean;
  inIndex: boolean;
  inView: boolean;
}

export function genSchemaField(field: DMMF.Field): SchemaField {
  return {
    name: field.name,
    dbType: field.name,
    htmlType: "text",
    validations: "",
    searchable: false,
    fillable: false,
    primary: field.isId,
    inForm: false,
    inIndex: false,
    inView: false
  };
}