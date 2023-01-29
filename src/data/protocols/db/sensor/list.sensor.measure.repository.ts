export interface ListSensorMeasureRepository {
    list: (data: ListSensorMeasureRepository.Params) => Promise<ListSensorMeasureRepository.Result[]>
}

export namespace ListSensorMeasureRepository {
    export type Params = {
        limit: number
        page: number
        sensorIdentification: string
    }
    export type Result = {
        sensorIdentification: string
        sensorTenantId: string
        sensorEquipment: string
        sensorMeasureType: string
        sensorValue: string
        sensorTimeStamp: string
    }
}
