import { getDbType } from '../helpers/getDbType'
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('get db type', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.models.forEach((model) => {
    model.fields.forEach(field => {
      expect(getDbType(field)).toMatchSnapshot()
    })
  })
})
