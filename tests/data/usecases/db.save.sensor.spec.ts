import { DbSaveSensorMeasure } from '@/data/usecases'
import { SaveSensorMeasure } from '@/domain/usecases'
import { LoadSensorRepositorySpy, SaveSensorMeasureRepositorySpy } from '@/tests/data/mocks'

type SutTypes = {
    loadSensorRepositorySpy: LoadSensorRepositorySpy
    saveSensorMeasureRepositorySpy: SaveSensorMeasureRepositorySpy
    sut: DbSaveSensorMeasure
}

const throwError = (): never => {
    throw new Error()
}

const makeSut = (): SutTypes => {
    const loadSensorRepositorySpy = new LoadSensorRepositorySpy()
    const saveSensorMeasureRepositorySpy = new SaveSensorMeasureRepositorySpy()
    const sut = new DbSaveSensorMeasure(loadSensorRepositorySpy, saveSensorMeasureRepositorySpy)
    return { sut, loadSensorRepositorySpy, saveSensorMeasureRepositorySpy }
}

const mockRequest = (): SaveSensorMeasure.Request => ({
    sensorIdentification: 'sensorIdentification',
    sensorValue: 'sensorValue',
    sensorTimeStamp: 'sensorTimeStamp'
})

describe('DbSaveSensorMeasure', () => {
    test('Should call LoadSensorRepository with correct values', async () => {
        const { sut, loadSensorRepositorySpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(loadSensorRepositorySpy.params).toEqual(request.sensorIdentification)
    })

    test('Should throw if LoadSensorRepository throws', async () => {
        const { sut, loadSensorRepositorySpy } = makeSut()
        jest.spyOn(loadSensorRepositorySpy, 'load').mockImplementationOnce(throwError)
        const request = mockRequest()
        const promise = sut.handle(request)
        await expect(promise).rejects.toThrow()
    })

    test('Should call SaveSensorRepository with correct values', async () => {
        const { sut, saveSensorMeasureRepositorySpy } = makeSut()
        const request = mockRequest()
        await sut.handle(request)
        expect(saveSensorMeasureRepositorySpy.params).toEqual({
            ...mockRequest(),
            sensorTenantId: 'sensorTenantId',
            sensorEquipment: 'sensorEquipment',
            sensorMeasureType: 'sensorMeasureType'
        })
    })

    test('Should throw if SaveSensorRepository throws', async () => {
        const { sut, saveSensorMeasureRepositorySpy } = makeSut()
        jest.spyOn(saveSensorMeasureRepositorySpy, 'save').mockImplementationOnce(throwError)
        const request = mockRequest()
        const promise = sut.handle(request)
        await expect(promise).rejects.toThrowError()
    })
})
