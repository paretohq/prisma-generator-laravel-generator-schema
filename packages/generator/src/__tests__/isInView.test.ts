import { isInView } from "../helpers/isInView"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('is in entity\'s page', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(isInView(field)).toMatchSnapshot()
    })
  })
})
