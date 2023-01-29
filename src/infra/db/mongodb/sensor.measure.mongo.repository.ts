import { SaveSensorMeasureRepository } from '@/data/protocols'
import { SensorMeasureModel } from './models'

export class SensorMeasureMongoRepository implements SaveSensorMeasureRepository {
    async save(data: SaveSensorMeasureRepository.Params): Promise<SaveSensorMeasureRepository.Result> {
        const model = new SensorMeasureModel(data)
        return await model.save()
    }
}
