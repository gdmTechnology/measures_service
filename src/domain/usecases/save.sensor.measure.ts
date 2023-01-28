export interface SaveSensorMeasure {
    handle: (data: SaveSensorMeasure.Request) => Promise<void>
}

export namespace SaveSensorMeasure {
    export type Request = {
        sensorIdentification: string
        sensorValue: string
        sensorTimeStamp: string
        // sensorTenantId: string
        // sensorEquipment: string
        // sensorMeasureType: string
    }
}
