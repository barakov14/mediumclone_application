import {UsersDTO} from '@core/data-access'

export interface SignAuthPayload {
  user: {
    email: string
    password: string
  }
}

export interface SignAuthRegisterPayload {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface SignAuthUser {
  user: UsersDTO
}

export interface SignAuthErrors {
  [key: string]: string[]
}
