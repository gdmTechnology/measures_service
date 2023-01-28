export interface LoadSensorRepository {
    load: (sensorIdentification: string) => Promise<LoadSensorRepository.Result>
}

export namespace LoadSensorRepository {
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
