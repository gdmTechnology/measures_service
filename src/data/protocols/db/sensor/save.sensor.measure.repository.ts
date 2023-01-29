export interface SaveSensorMeasureRepository {
    save: (data: SaveSensorMeasureRepository.Params) => Promise<SaveSensorMeasureRepository.Result>
}

export namespace SaveSensorMeasureRepository {
    export type Params = {
        sensorIdentification: string
        sensorTenantId: string
        sensorTimeStamp: string
        sensorEquipment: string
        sensorMeasureType: string
        sensorValue: string
    }
    export type Result = {
        accountId: string
        sensorIdentification: string
        sensorTenantId: string
        sensorName: string
        sensorEquipment: string
        sensorMeasureType: string
        sensorCurrentValue: string
        sensorTimeStamp: string
        createdAt: Date
        updateAt: Date
    }
}
