import { getHtmlType } from '../helpers/getHtmlType'
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('get html type', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(getHtmlType(field)).toMatchSnapshot()
    })
  })
})
