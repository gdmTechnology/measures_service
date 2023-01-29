import { ListSensorMeasure } from '@/domain/usecases'
export class ListSensorMeasureSpy implements ListSensorMeasure {
    params = null

    async handle(data: ListSensorMeasure.Request): Promise<any> {
        this.params = data
    }
}
