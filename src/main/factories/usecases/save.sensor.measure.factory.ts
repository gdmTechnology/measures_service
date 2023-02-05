import { SaveSensorMeasure } from '@/domain/usecases'
import { DbSaveSensorMeasure } from '@/data/usecases'
import { SensorMeasureMongoRepository, SensorMongoRepository } from '@/infra/db/mongodb'

export const makeDbSaveSensorMeasures = (): SaveSensorMeasure => {
    const sensorMongoRepository = new SensorMongoRepository()
    const sensorMeasureMongoRepository = new SensorMeasureMongoRepository()
    return new DbSaveSensorMeasure(sensorMongoRepository, sensorMeasureMongoRepository)
}
