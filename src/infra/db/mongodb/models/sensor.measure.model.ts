import mongoose, { Schema } from 'mongoose'

const SensorMeasureSchema = new Schema({
    sensorIdentification: {
        type: String,
        required: true
    },
    sensorTenantId: {
        type: String,
        required: true
    },
    sensorTimeStamp: {
        type: String,
        required: true
    },
    sensorEquipment: {
        type: String,
        required: true
    },
    sensorMeasureType: {
        type: String,
        required: true
    },
    sensorValue: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const SensorMeasureModel = mongoose.model('SensorMeasureModel', SensorMeasureSchema)
