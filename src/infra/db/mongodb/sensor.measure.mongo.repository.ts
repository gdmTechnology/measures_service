import { SaveSensorMeasureRepository, ListSensorMeasureRepository } from '@/data/protocols'
import { SensorMeasureModel } from './models'

export class SensorMeasureMongoRepository implements SaveSensorMeasureRepository, ListSensorMeasureRepository {
    async save(data: SaveSensorMeasureRepository.Params): Promise<SaveSensorMeasureRepository.Result> {
        const model = new SensorMeasureModel(data)
        return await model.save()
    }

    async list(data: ListSensorMeasureRepository.Params): Promise<ListSensorMeasureRepository.Result[]> {
        const { limit, page, sensorIdentification } = data
        const list = await SensorMeasureModel.find({ sensorIdentification })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()
        return list
    }
}
