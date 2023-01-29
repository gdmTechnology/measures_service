import { DbListSensorMeasure } from '@/data/usecases'
import { ListSensorMeasure } from '@/domain/usecases'
import { ListSensorMeasureRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
    listSensorMeasureRepositorySpy: ListSensorMeasureRepositorySpy
    sut: DbListSensorMeasure
}

const throwError = (): never => {
    throw new Error()
}

const makeSut = (): SutTypes => {
    const listSensorMeasureRepositorySpy = new ListSensorMeasureRepositorySpy()
    const sut = new DbListSensorMeasure(listSensorMeasureRepositorySpy)
    return { sut, listSensorMeasureRepositorySpy }
}

const mockRequest = (): ListSensorMeasure.Request => ({
    limit: 10,
    page: 1,
    sensorIdentification: 'sensorIdentification'
})

describe('DbListSensorMeasure', () => {
    test('Should call ListSensorRepository with correct values', async () => {
        const { sut, listSensorMeasureRepositorySpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(listSensorMeasureRepositorySpy.params).toEqual(request)
    })

    test('Should throw if ListSensorRepository throws', async () => {
        const { sut, listSensorMeasureRepositorySpy } = makeSut()
        jest.spyOn(listSensorMeasureRepositorySpy, 'list').mockImplementationOnce(throwError)
        const request = mockRequest()
        const promise = sut.handle(request)
        await expect(promise).rejects.toThrow()
    })
})
