import { getValidations } from "../helpers/getValidations"
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('get validation rules', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(getValidations(field)).toMatchSnapshot()
    })
  })
})
