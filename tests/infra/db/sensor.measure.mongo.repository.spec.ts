import { SensorMeasureMongoRepository } from '@/infra/db/mongodb'
import { MongoTestDbHelper } from './db.handler'
import { SaveSensorMeasureRepository } from '@/data/protocols'

const makeSut = (): SensorMeasureMongoRepository => {
    return new SensorMeasureMongoRepository()
}

const saveMeasureParams = (): SaveSensorMeasureRepository.Params => ({
    sensorIdentification: 'sensorIdentification',
    sensorTenantId: 'sensorTenantId',
    sensorTimeStamp: 'sensorTimeStamp',
    sensorEquipment: 'sensorEquipment',
    sensorMeasureType: 'sensorMeasureType',
    sensorValue: 'sensorValue'
})

describe('SaveSensorMeasureRepository', () => {
    beforeAll(async () => await MongoTestDbHelper.connect())
    afterEach(async () => await MongoTestDbHelper.clearDatabase())
    afterAll(async () => await MongoTestDbHelper.disconnect())

    describe('save()', () => {
        test('Should return a sensor measure on success', async () => {
            const sut = makeSut()
            const request = saveMeasureParams()
            const account = await sut.save(request)
            expect(account).toBeTruthy()
        })
    })
})
