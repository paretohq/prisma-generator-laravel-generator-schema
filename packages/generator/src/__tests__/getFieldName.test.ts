import { getFieldName } from "../helpers/getFieldName"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('get field name', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(getFieldName(field)).toMatchSnapshot()
    })
  })
})
