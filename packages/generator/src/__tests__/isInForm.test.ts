import { isInForm } from "../helpers/isInForm"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('is in form', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(isInForm(field)).toMatchSnapshot()
    })
  })
})
