import { ListSensorMeasure } from '@/domain/usecases'
import { ListSensorMeasureRepository } from '@/data/protocols'

export class DbListSensorMeasure implements ListSensorMeasure {
    constructor(
        private readonly listSensorMeasureRepository: ListSensorMeasureRepository
    ) { }

    async handle(data: ListSensorMeasure.Request): Promise<ListSensorMeasure.Result> {
        const measures = await this.listSensorMeasureRepository.list(data)
        return { measures, totalPages: measures.length / data.limit, currentPage: data.page }
    }
}
