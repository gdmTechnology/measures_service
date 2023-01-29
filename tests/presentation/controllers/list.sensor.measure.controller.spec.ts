import { ListSensorMeasureController } from '@/presentation/controllers'
import { ValidationSpy, ListSensorMeasureSpy } from '../mocks'

const throwError = (): never => {
    throw new Error()
}

const mockRequest = (): ListSensorMeasureController.Request => ({
    sensorIdentification: 'sensorIdentification',
    limit: 10,
    page: 1
})

type SutTypes = {
    validationSpy: ValidationSpy
    listSensorMeasureSpy: ListSensorMeasureSpy
    sut: ListSensorMeasureController
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const listSensorMeasureSpy = new ListSensorMeasureSpy()
    const sut = new ListSensorMeasureController(validationSpy, listSensorMeasureSpy)
    return {
        validationSpy,
        listSensorMeasureSpy,
        sut
    }
}

describe('ListSensorMeasureController', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(validationSpy.input).toEqual(request)
    })

    test('Should return 400 if Validation fails', async () => {
        const { sut, validationSpy } = makeSut()
        validationSpy.error = new Error()
        const request = mockRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 500 if Validation throws', async () => {
        const { sut, validationSpy } = makeSut()
        jest.spyOn(validationSpy, 'validate').mockImplementationOnce(throwError)
        const request = mockRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should call ListSensorMeasure with correct values', async () => {
        const { sut, listSensorMeasureSpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(listSensorMeasureSpy.params).toEqual(request)
    })

    test('Should return 500 if ListSensorMeasure throws', async () => {
        const { sut, listSensorMeasureSpy } = makeSut()
        jest.spyOn(listSensorMeasureSpy, 'handle').mockImplementationOnce(throwError)
        const request = mockRequest()
        const httpResponse = await sut.handle(request)
        expect(httpResponse.statusCode).toBe(500)
    })
})
