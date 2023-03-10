import { genSchemaField } from '../helpers/genSchemaField'
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('schema field generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(genSchemaField(field)).toMatchSnapshot()
    })
  })
})
