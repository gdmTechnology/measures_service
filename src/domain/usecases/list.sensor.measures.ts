export interface ListSensorMeasure {
    handle: (data: ListSensorMeasure.Request) => Promise<ListSensorMeasure.Result>
}

type SensorMeasureType = {
    sensorIdentification: string
    sensorValue: string
    sensorTimeStamp: string
    sensorTenantId: string
    sensorEquipment: string
    sensorMeasureType: string
}

export namespace ListSensorMeasure {
    export type Result = {
        measures: SensorMeasureType[]
        totalPages: number
        currentPage: number
    }
    export type Request = {
        limit: number
        page: number
        sensorIdentification: string
    }
}
