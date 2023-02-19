import { isInIndex } from "../helpers/isInIndex"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('is in index table', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(isInIndex(field)).toMatchSnapshot()
    })
  })
})
