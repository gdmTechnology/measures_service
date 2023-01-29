import { ListSensorMeasure } from '@/domain/usecases'
import { DbListSensorMeasure } from '@/data/usecases'
import { SensorMeasureMongoRepository } from '@/infra/db/mongodb'

export const makeDbListSensorMeasures = (): ListSensorMeasure => {
    const sensorMeasureMongoRepository = new SensorMeasureMongoRepository()
    return new DbListSensorMeasure(sensorMeasureMongoRepository)
}
