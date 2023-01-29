import { adaptRoute } from '@/main/adapters'
import {
    makeListSensorMeasuresController
} from '@/main/factories'

import { Router } from 'express'
import { auth } from '@/main/middlewares'

export default (router: Router): void => {
    router.get('/measures/:sensorIdentification/:page/:limit', auth, adaptRoute(makeListSensorMeasuresController()))
}
