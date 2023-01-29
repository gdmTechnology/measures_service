import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeListSensorMeasuresValidation = (): ValidationComposite => {
    const validations: Validation[] = []
    for (const field of ['page', 'limit', 'sensorIdentification']) {
        validations.push(new RequiredFieldValidation(field))
    }
    return new ValidationComposite(validations)
}
