export interface ListSensorMeasure {
    handle: (data: ListSensorMeasure.Request) => Promise<ListSensorMeasure.Result[]>
}

export namespace ListSensorMeasure {
    export type Result = {
        sensorIdentification: string
        sensorValue: string
        sensorTimeStamp: string
        sensorTenantId: string
        sensorEquipment: string
        sensorMeasureType: string
    }
    export type Request = {
        limit: number
        page: number
        sensorIdentification: string
    }
}
