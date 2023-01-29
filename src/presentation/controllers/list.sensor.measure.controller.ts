import { Controller } from '@/presentation/protocols/controller'
import { Validation } from '../protocols/validation'
import { badRequest, serverError } from '../helpers/http.helper'
import { ListSensorMeasure } from '@/domain/usecases'

export class ListSensorMeasureController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly listSensorMeasure: ListSensorMeasure
    ) { }

    async handle(data: ListSensorMeasureController.Request): Promise<any> {
        try {
            const error = this.validation.validate(data)
            if (error) return badRequest(error)
            const measuresList = await this.listSensorMeasure.handle(data)
            return measuresList
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace ListSensorMeasureController {
    export interface Request {
        limit: number
        page: number
        sensorIdentification: string
    }
}
