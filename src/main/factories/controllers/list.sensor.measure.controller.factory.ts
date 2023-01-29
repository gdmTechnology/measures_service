import { ListSensorMeasureController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator, makeDbListSensorMeasures, makeListSensorMeasuresValidation } from '@/main/factories'

export const makeListSensorMeasuresController = (): Controller => {
    const controller = new ListSensorMeasureController(makeListSensorMeasuresValidation(), makeDbListSensorMeasures())
    return makeLogControllerDecorator(controller)
}
