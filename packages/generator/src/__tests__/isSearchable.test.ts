import { isSearchable } from "../helpers/isSearchable"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('is searchable', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(isSearchable(field)).toMatchSnapshot()
    })
  })
})
