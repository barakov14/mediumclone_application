import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {SignAuthErrors, SignAuthPayload, SignAuthRegisterPayload, SignAuthUser} from '../sign.model'

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{req: SignAuthPayload}>(),
    register: props<{req: SignAuthRegisterPayload}>(),

    authSuccess: props<{res: SignAuthUser}>(),

    authFailure: props<{error: SignAuthErrors}>()
  }
})
