import {DeepReadonly} from '@core/utils'

export type UsersDTO = DeepReadonly<{
  email: string,
  token: string,
  username: string,
  bio?: string,
  image?: string
}>
