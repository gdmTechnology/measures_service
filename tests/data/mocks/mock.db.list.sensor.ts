import { ListSensorMeasureRepository } from '@/data/protocols/db'

export class ListSensorMeasureRepositorySpy implements ListSensorMeasureRepository {
    params: any
    result: any = [{
        sensorIdentification: 'sensorIdentification',
        sensorValue: 'sensorValue',
        sensorTimeStamp: 'sensorTimeStamp',
        sensorTenantId: 'sensorTenantId',
        sensorEquipment: 'sensorEquipment',
        sensorMeasureType: 'sensorMeasureType'
    }]

    async list(params: any): Promise<ListSensorMeasureRepository.Result[]> {
        this.params = params
        return this.result
    }
}
